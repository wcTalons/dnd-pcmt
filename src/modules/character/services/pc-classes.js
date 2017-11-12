define(['helperUtls'], function (helperUtls) {
	return {
		type: 'service',
		name: '$pcClasses',
		value: ['$pcmtWizardFactory', function ($pcmtWizardFactory) {
			var self = this;

			self.get = function () {
				var classList = helperUtls.list(),
					classTypes = arguments;

				for (var i = 0, ii = classTypes.length; i < ii; i++) {

					switch (classTypes[i]) {
						case 'wizard':
							classList.push($pcmtWizardFactory.newWizard());
						break;
					}
				}

				return classList;
			};
		}]
	};
});