define(['helperUtls'], function (helperUtls) {
	return {
		type: 'constant',
		name: '@abilities',
		value: helperUtls.list([
			{ label: "Strength", abbr: 'STR' },
			{ label: "Dexterity", abbr: 'DEX' },
			{ label: "Constitution", abbr: 'CON' },
			{ label: "Wisdom", abbr: 'WIS' },
			{ label: "Intelligence", abbr: 'INT' },
			{ label: "Charisma", abbr: 'CHA' }
		])
	};
});