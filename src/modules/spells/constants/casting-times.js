define([], function () {
	return {
		type: 'constant',
		name: '@spellCastingTimes',
		value: [
			{ label: '1 action', time: 10 },
			{ label: 'bonus action', time: 5 },
			{ label: '1 minute', time: 60 },
			{ label: '10 minutes', time: 600 },
			{ label: '1 hour', time: 3600 },
			{ label: '4 hours', time: 14400 },
			{ label: '8 hours', time: 28800 }
		]
	};
});