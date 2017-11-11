define([
	'loaderUtls',
	//providers
	'modules/ui/providers/nav',
	// factories
	'modules/ui/factories/drawer',
	// services
	'modules/ui/services/app-drawer',
	// directives
	'modules/ui/directives/hover-action',
	'modules/ui/directives/nav-link',
	'modules/ui/directives/nav',
	'modules/ui/directives/toolbar',
	'modules/ui/directives/app-drawer'
], function (loaderUtls) {
	var args = arguments;
	var module = angular.module('pcmt-ui-mod', []);

	loaderUtls.loadModule(module, args);
	return module;
});