'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */

var webroot = '/ald-web';
var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/job-categories', {
        templateUrl: webroot+'views/categories/job-categories.html',
        controller: 'JobCategoriesController',
        controllerAs: 'job-categories'
      });
  });
