/**
 * Created by tuxming on 2016-05-09.
 */
'use strict'
app.controller('MainCtrl', function () {

}).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/d/findwork/findwork.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/saved', {
      templateUrl: '/d/findwork/saved.html',
      controller: 'SavedController',
      controllerAs: 'saved'
    })
    .when('/proposals', {
      templateUrl: '/d/findwork/proposals.html',
      controller: 'ProposalsController',
      controllerAs: 'proposals'
    })
    .when('/myreport', {
      templateUrl: '/d/findwork/mystats.html',
      controller: 'MyStatsController',
      controllerAs: 'myreport'
    })
    .when('/myprofile', {
      templateUrl: '/d/findwork/myprofile.html',
      controller: 'MyProfileController',
      controllerAs: 'myprofile'
    }).when('/tests', {
      templateUrl: '/d/findwork/tests.html',
      controller: 'TestsCtrl',
      controllerAs: 'tests'
    });
/*
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });*/
  //  .otherwise({
  //   redirectTo: '/'
  //  });
});
