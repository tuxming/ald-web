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

app.controller('savedController', function($scope, g){
	//console.log(window.g.server);
	console.log(g.server);
});