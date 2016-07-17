/**
 * Created by tuxming on 2016-05-09.
 */
'use strict';
app.controller('MainCtrl', function ($scope, store, $window) {

  $scope.searchGoto = function(){
    $window.location.href = webroot+"/a/findwork/findjobs.html";
  }
}).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: webroot + '/a/findwork/findjobs.html',
      controller: 'FindJobsCtrl',
      controllerAs: 'findjobs'
    })   
    .when('/reports', {
        templateUrl: webroot + '/a/reports/main.html',
        controller: 'ReportMainCtrl',
        controllerAs: 'agencyreports'
    })
    .when('/roster', {
        templateUrl: webroot + '/a/findwork/agencyroster.html',
        controller: 'RosterCtrl',
        controllerAs: 'rosterctrl'
    });
});
