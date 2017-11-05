define([], function () {
	return {
		type: 'service',
		name: '$spellList',
		value: ['$spellDetails', function ($spellDetails) {
			var self = this;

			self._list = [];

			self.addSpell = function (spell) {
				self._list.push(spell);
			};

			self.getModel = function () {
				return {
					name: '',
					description: '',
					atHigherLevels: '',
					isRitual: false,
					isConcentration: false,
					components: [$spellDetails.components[0]],
					school: $spellDetails.schools[0],
					level: $spellDetails.levels[0],
					types: [$spellDetails.types[0]],
					time: {
					casting: $spellDetails.castingTimes[0],
					duration: $spellDetails.durations[0]
					},
					attack: {
					action: $spellDetails.actionTypes[0],
					ability: $spellDetails.abilities[0],
					range: $spellDetails.ranges[0],
					target: $spellDetails.targets[0]
					},
					hit: { dice: $spellDetails.dieSizes[0], count: 1 },
					damageTypes: [$spellDetails.damageTypes[0]],
					conditions: []
				};
			};
		}]
	};
});