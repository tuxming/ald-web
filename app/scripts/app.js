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
      .when('/myreport', {
        templateUrl: 'views/mystats/mystats.html',
        controller: 'MyStatsController',
        controllerAs: 'myreport'
      })
      .when('/myprofile', {
        templateUrl: 'views/myprofile/myprofile.html',
        controller: 'MyProfileController',
        controllerAs: 'myprofile'
      })
      .when('/aboutus', {
        templateUrl: 'views/about/aboutus.html',
        controller: 'AboutUsController',
        controllerAs: 'aboutus'
      })
      .when('/careers', {
        templateUrl: 'views/about/careers.html',
        controller: 'CareersController',
        controllerAs: 'careers'
      })
      .when('/team', {
        templateUrl: 'views/about/team.html',
        controller: 'TeamController',
        controllerAs: 'team'
      })
      .when('/board', {
        templateUrl: 'views/about/board.html',
        controller: 'BoardController',
        controllerAs: 'board'
      })
      .when('/press', {
        templateUrl: 'views/about/press.html',
        controller: 'PressController',
        controllerAs: 'press'
      })
      .when('/contact', {
        templateUrl: 'views/about/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })       
      .otherwise({
        redirectTo: '/'
      });
  });
