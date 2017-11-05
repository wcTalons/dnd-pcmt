define([
  'moduleLocators'
], function (moduleLocators) {
  var appName = 'dnd-player-character-management-tool';
  var app = angular.module(appName, moduleLocators(['ngRoute', 'ui.router']));
  
  app.config(['$urlRouterProvider', function ($urlRouterProvider) {
  	$urlRouterProvider.otherwise('/stats')
  }]);

  return app;
});