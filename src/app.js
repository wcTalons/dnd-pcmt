define([
  'moduleLocators'
], function (moduleLocators) {
  var appName = 'pcmt-app';
  var app = angular.module(appName, moduleLocators(['ngRoute', 'ui.router']));

  app.run(['$transitions', '$pcmtUiAppDrawer', function ($transitions, $pcmtUiAppDrawer) {
  	$transitions.onStart({}, function () {
  		$pcmtUiAppDrawer.close();
  	});
  }]);

  return app;
});