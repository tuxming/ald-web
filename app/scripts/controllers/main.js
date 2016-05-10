'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('MainCtrl', function () {

  })
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
    });

  //  .otherwise({
  //   redirectTo: '/'
  //  });
});

