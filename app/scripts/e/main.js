/**
 * Created by tuxming on 2016-05-22.
 */
'use strict'
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      templateUrl: webroot+'/e/contracts.html',
      controller: 'ContractCtrl',
      controllerAs: 'contract'
    });
});
