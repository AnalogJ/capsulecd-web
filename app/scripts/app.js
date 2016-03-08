'use strict';

/**
 * @ngdoc overview
 * @name capsulecdWebApp
 * @description
 * # capsulecdWebApp
 *
 * Main module of the application.
 */
angular
  .module('capsulecdWebApp', [
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
