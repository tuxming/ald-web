'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/saved', {
        templateUrl: 'views/jobs/saved.html',
        controller: 'SavedController',
        controllerAs: 'saved'
      })
      .when('/proposals', {
        templateUrl: 'views/proposals/proposals.html',
        controller: 'ProposalsController',
        controllerAs: 'proposals'
      })
      .when('/mysatas', {
        templateUrl: 'views/my-stats/my-stats.html',
        controller: 'MyStatsController',
        controllerAs: 'mystats'
      })
      .when('/myprofile', {
        templateUrl: 'views/myprofile/myprofile.html',
        controller: 'MyProfileController',
        controllerAs: 'myprofile'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
