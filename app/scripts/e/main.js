/**
 * Created by tuxming on 2016-05-22.
 */
'use strict'
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      templateUrl: webroot+'/e/myjobs.html',
      controller: 'MyJobsCtrl',
      controllerAs: 'myjobs'
    })
    .when('/contracts', {
      templateUrl: webroot+'/e/contracts.html',
      controller: 'ContractCtrl',
      controllerAs: 'contracts'
    })
    .when('/my-contractors', {
        templateUrl: webroot + '/e/freelancers/hired.html',
        controller: 'HiredCtrl',
        controllerAs: 'hired'
    })
    .when('/byo', {
        templateUrl: webroot + '/e/freelancers/byo.html',
        controller: 'ByoCtrl',
        controllerAs: 'byo'
    })
    .when('/jobs/new', {
        templateUrl: webroot + '/e/jobs/new.html',
        controller: 'NewjobCtrl',
        controllerAs: 'newjob'
    });
});

app.controller("ContractHourlyCtrl", function($scope){

});

app.controller("ByoCtrl", function ($scope) {

});

app.controller("NewjobCtrl", function ($scope) {

});
