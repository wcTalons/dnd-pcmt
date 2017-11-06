define([
	'loaderUtls',
	'modules/character/controllers/stats'
], function (loaderUtls) {
	var args = arguments;
	var module = angular.module('pcmt-character-mod', ['pcmt-ui-mod']);

	module.config(['$pcmtNavProvider', '$urlRouterProvider', function ($pcmtNavProvider, $urlRouterProvider) {
		$pcmtNavProvider.register({
			icon: 'accessibility',
			state: 'stats',
			url: '/stats',
			templateUrl: 'character/views/stats.html'
		});
		$urlRouterProvider.otherwise('/stats');
	}]);

	loaderUtls.loadModule(module, args);
	return module;
});