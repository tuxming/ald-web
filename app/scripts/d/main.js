/**
 * Created by tuxming on 2016-05-09.
 */
'use strict';
app.controller('MainCtrl', function ($scope, store, $window) {

  $scope.searchGoto = function(){
    $window.location.href = webroot+"/d/findwork/browse.html";
  }
}).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: webroot+'/d/findwork/findwork.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/saved', {
      templateUrl: webroot+'/d/findwork/saved.html',
      controller: 'SavedController',
      controllerAs: 'saved'
    })
    .when('/proposals', {
      templateUrl: webroot+'/d/findwork/proposals.html',
      controller: 'ProposalsController',
      controllerAs: 'proposals'
    })
    .when('/proposals/archived', {
        templateUrl: webroot + '/d/findwork/archived.html',
        controller: 'ProposalsArchivedController',
        controllerAs: 'archived'
    })
    .when('/myreport', {
      templateUrl: webroot+'/d/findwork/mystats.html',
      controller: 'MyStatsController',
      controllerAs: 'myreport'
    })
    .when('/myprofile', {
      templateUrl: webroot+'/d/findwork/myprofile.html',
      controller: 'MyProfileController',
      controllerAs: 'myprofile'
    })
    .when('/tests', {
      templateUrl: webroot+'/d/findwork/tests.html',
      controller: 'TestsCtrl',
      controllerAs: 'tests'
    })
    .when('/tests/more', {
        templateUrl: webroot + '/d/findwork/testsmore.html',
        controller: 'TestsMoreCtrl',
        controllerAs: 'testsmore'
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
