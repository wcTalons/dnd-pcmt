define([
	'loaderUtls',
	'modules/character/controllers/stats'
], function (loaderUtls) {
	var args = arguments;
	var module = angular.module('dnd-character', []);

	module.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
		$stateProvider
        	.state('stats', {
            	url: '/stats',
            	templateUrl: 'character/views/stats.html'
        	});
	}]);

	loaderUtls.loadModule(module, args);
	return module;
});