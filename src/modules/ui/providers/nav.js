define([], function () {
	return {
		type: 'provider',
		name: '$pcmtNav',
		value: ['$stateProvider', function ($stateProvider) {
			var provider = this,
				links = [];

			function nav() {
				return {
					links: links
				};
			}

			provider.register = function (link) {
				$stateProvider.state(link.state, link);
				links.push(link);
			};

			provider.$get = [function () {
				return new nav();
			}]
		}]
	};
});