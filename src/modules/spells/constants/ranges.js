define([], function () {
	return {
		type: 'constant',
		name: '@spellRanges',
		value: [
			{ label: "touch", range: 0 },
			{ label: "10ft", range: 10 },
			{ label: "30ft", range: 30 },
			{ label: "60ft", range: 60 },
			{ label: "120ft", range: 120 }
		]
	};
});