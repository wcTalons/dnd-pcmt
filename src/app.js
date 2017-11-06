define([
  'moduleLocators'
], function (moduleLocators) {
  var appName = 'pcmt-app';
  var app = angular.module(appName, moduleLocators(['ngRoute', 'ui.router']));
  return app;
});