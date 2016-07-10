/**
 * Created by tuxming on 2016-05-22.
 */
'use strict'
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      templateUrl: webroot+'/e/myjobs.html',
      controller: 'myJobsCtrl',
      controllerAs: 'myjobs'
    })
    .when('/contracts', {
      templateUrl: webroot+'/e/contracts.html',
      controller: 'contractCtrl',
      controllerAs: 'contracts'
    })
    .when('/my-contractors', {
        templateUrl: webroot + '/e/freelancers/hired.html',
        controller: 'HiredCtrl',
        controllerAs: 'hired'
    })
    .when('/my-contractors/past', {
        templateUrl: webroot + '/e/freelancers/past.html',
        controller: 'PastHiresCtrl',
        controllerAs: 'past'
    })
    .when('/my-contractors/saved', {
        templateUrl: webroot + '/e/freelancers/saved.html',
        controller: 'HiresSavedCtrl',
        controllerAs: 'saved'
    })
    .when('/freelancers/find', {
        templateUrl: webroot + '/e/freelancers/find.html',
        controller: 'FindFreelancersCtrl',
        controllerAs: 'find'
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
    })
    .when('/freelancers/workdiary', {
        templateUrl: webroot + '/e/freelancers/workdiary.html',
        controller: 'FreelancersWorkdiaryCtrl',
        controllerAs: 'freelancersworkdiary'
    });
});

app.controller("ContractHourlyCtrl", function($scope){

});


