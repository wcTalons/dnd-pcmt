define([], function () {
	return {
		type: 'controller',
		name: 'ctrlSpellList',
		value: ['$spellList', '$spellDetails', function ($spellList, $spellDetails) {
			var spell;
			var spellList = this;

			spellList.spells = [];

			for (var i = 0; i < 8; i++) {
				spell = $spellList.getModel();
				spell.components = [$spellDetails.components[0], $spellDetails.components[1]];
				spell.name = 'Acid Splash';
				spell.school = $spellDetails.schools[i];
				spell.types = [$spellDetails.types[7]];
				spell.attack.action = $spellDetails.actionTypes[1];
				spell.attack.ability = $spellDetails.abilities[1];
				spell.attack.range = $spellDetails.ranges[3];
				spell.attack.target = $spellDetails.targets[3];
				spellList.spells.push(spell);
			}
		}]
	};
});