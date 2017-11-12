define(['helperUtls'], function (helperUtls) {

    return {
        type: 'factory',
        name: '$pcmtCharacterFactory',
        value: ['@abilities', function (abilities) {

            function character(data) {
                var self = this;

                self._data = data || {};

                if (self._data) {
                    self._set();
                }
            }

            character.prototype._setAbilities = function () {
                var self = this;

                if (self._data.abilities) {
                    self.abilities = {};

                    for (var key in self._data.abilities) {
                        var index = abilities.indexBy('abbr', key),
                            ability = angular.copy(abilities[index]);

                        ability.value = self._data.abilities[key];
                        ability.mod = Math.floor((ability.value - 10) / 2);
                        self.abilities[key] = ability;
                    }
                }
            };

            character.prototype._setAC = function () {
                var self = this;

                self.ac = self.equipment.armour ? self.equipment.armour.ac : 10 + self.abilities.DEX.mod;
                self.ac += self.equipment.sheild ? self.equipment.sheild.ac : 0;
            };

            character.prototype._setHP = function () {
                var self = this;

                self.hp = {
                    max: self.pcClasses[0].hitDie.max + self.abilities.CON.mod,
                    temp: self._data.hp && self._data.hp.temp ? self._data.hp.temp : 0 
                };

                function updateHp(pcClass, lvl) {

                    if (lvl) {
                        self.hp.max += (pcClass.hitDie.avg + self.abilities.CON.mod) * lvl;
                    }
                }

                for (var i = 0, ii = self.pcClasses.length; i < ii; i++) {
                    var pcClass = self.pcClasses[i];

                    updateHp(pcClass, (pcClass.isMain ? pcClass.level - 1 : pcClass.level));
                }

                if (self._data.hp && self._data.hp.current) {
                    self.hp.current = self._data.hp.current;
                } else {
                    self.hp.current = angular.copy(self.hp.max);
                }
            };

            character.prototype._set = function() {
                var self = this;

                self.level = self._data || 1;
                self.pcClasses = self._data.pcClasses;
                self._setAbilities();
                self.equipment = self._data.equipment || {};
                self._setAC();
                self._setHP();
            };

            return {
                newCharacter: function (data) {
                    return new character(data);
                }
            };
        }]
    };
});