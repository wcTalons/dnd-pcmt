require(['app', 'appTemplates'], function (app) {
	angular.element(document).ready(function () {
		angular.bootstrap(document, [app.name]);
	});
});