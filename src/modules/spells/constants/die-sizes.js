define(['helperUtls'], function (helperUtls) {
	return {
		type: 'constant',
		name: '@dieSizes',
		value: helperUtls.list([
			{ label: "d4", max: 4, min: 1, avg: 3 },
			{ label: "d6", max: 6, min: 1, avg: 4 },
			{ label: "d8", max: 8, min: 1, avg: 5 },
			{ label: "d10", max: 10, min: 1, avg: 6 },
			{ label: "d12", max: 12, min: 1, avg: 7 }
		])
	};
});