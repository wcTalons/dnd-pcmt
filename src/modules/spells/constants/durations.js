define([], function () {
	return {
		type: 'constant',
		name: '@spellDurations',
		value: [
			{ label: "Instant", time: 0 },
			{ label: "1 round", time: 15 },
			{ label: "1 minute", time: 60 }
		]
	};
});