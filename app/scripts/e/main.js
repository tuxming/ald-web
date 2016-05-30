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
    .when('/contract_fixedprice', {
      templateUrl: webroot+'/e/contract_fixedprice.html',
      controller: 'FixedpriceCtrl',
      controllerAs: 'contract_fixedprice'
    })
    .when('/report/contract_hourly', {
      templateUrl: webroot+'/e/report/contract_hourly.html',
      controller: 'ContractHourlyCtrl',
      controllerAs: 'contract_hourly.html'
    })
    ;
});

app.controller("ContractHourlyCtrl", function($scope){

});
