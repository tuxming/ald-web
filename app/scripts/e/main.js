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
    });
});

app.controller("ContractHourlyCtrl", function($scope){

});
