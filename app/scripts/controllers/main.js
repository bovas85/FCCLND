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
    var elem = document.querySelector('.grid');

  	$http.get('data/campers.json').
    success(function(data, status, headers, config) {
      $scope.campers = data;

	// layout Isotope after each image loads
	imagesLoaded( document.querySelector('#iso'), function( instance ) {
   	$scope.iso = new Isotope( elem, {
  	// options
  	itemSelector: '.grid-item',
  	layoutMode: 'fitRows'
	});
	$scope.campers.map(function(o){
			$scope.email = o.email;
			$scope.fcc = o.fcc;
			$scope.tw = o.tw;
			$scope.fb = o.fb;
			$scope.web = o.web;
			$scope.lk = o.lk;
	});
	

    })
});
});
 