'use strict';

/**
 * @ngdoc function
 * @name aldWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aldWebApp
 */
var app = angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'globe'
]);

app.controller('myprofileController', function($scope, g){
	//console.log(window.g.server);
	//console.log(g.server);
	$scope.array = [0,1,2,3,4,5,6,7,8,9];
	
	$scope.array1 = [0,1,2];
	
});