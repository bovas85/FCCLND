'use strict';

/**
 * @ngdoc function
 * @name freeCodeLondonersCampApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the freeCodeLondonersCampApp
 */
angular.module('freeCodeLondonersCampApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
