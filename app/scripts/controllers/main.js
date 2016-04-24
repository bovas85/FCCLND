'use strict';

/**
 * @ngdoc function
 * @name freeCodeLondonersCampApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freeCodeLondonersCampApp
 */
angular.module('freeCodeLondonersCampApp')
  .controller('MainCtrl', function ($scope, $http) {
    // var elem = document.querySelector('.grid');
    $scope.campers = [];
  	$http.get('data/campers.json')
    .success(function(data/*, status, headers, *config*/) {
      $scope.campers = data;
    });


$scope.campers.map(function(o){
    $scope.email = o.email;
    $scope.fcc = o.fcc;
    $scope.tw = o.tw;
    $scope.fb = o.fb;
    $scope.web = o.web;
    $scope.lk = o.lk;
});
});
