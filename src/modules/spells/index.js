define([
	'loaderUtls',
	'modules/spells/constants/abilities',
	'modules/spells/constants/action-types',
	'modules/spells/constants/area',
	'modules/spells/constants/casting-times',
	'modules/spells/constants/components',
	'modules/spells/constants/conditions',
	'modules/spells/constants/damage-types',
	'modules/spells/constants/die-sizes',
	'modules/spells/constants/durations',
	'modules/spells/constants/levels',
	'modules/spells/constants/ranges',
	'modules/spells/constants/schools',
	'modules/spells/constants/shapes',
	'modules/spells/constants/targets',
	'modules/spells/constants/types',
	'modules/spells/services/details',
	'modules/spells/services/list',
	'modules/spells/controllers/list'
], function (loaderUtls) {
	var args = arguments;
	var module = angular.module('dnd-spells', []);

	module.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
		$stateProvider
        	.state('cards', {
            	url: '/cards',
            	templateUrl: 'spells/views/card.html'
        	});
	}]);

	loaderUtls.loadModule(module, args);
	return module;
});