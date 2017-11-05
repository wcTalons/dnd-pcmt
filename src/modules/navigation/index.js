define([
	'loaderUtls',
	'modules/navigation/services/nav',
	'modules/navigation/directives/nav'
], function (loaderUtls) {
	var args = arguments;
	var module = angular.module('dnd-nav', []);

	loaderUtls.loadModule(module, args);
	return module;
});