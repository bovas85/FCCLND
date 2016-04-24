'use strict';

/**
 * @ngdoc overview
 * @name freeCodeLondonersCampApp
 * @description
 * # freeCodeLondonersCampApp
 *
 * Main module of the application.
 */
angular
  .module('freeCodeLondonersCampApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    //'angular-isotope-demo'
    //'iso.directives', 
    //'hljs'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
