define([
	'loaderUtls',
	'modules/ui/providers/nav',
	'modules/ui/directives/hover-action',
	'modules/ui/directives/nav-link',
	'modules/ui/directives/nav',
	'modules/ui/directives/toolbar'
], function (loaderUtls) {
	var args = arguments;
	var module = angular.module('pcmt-ui-mod', []);

	loaderUtls.loadModule(module, args);
	return module;
});