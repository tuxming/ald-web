'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('indexCtrl', function ($scope, store, $window) {


    $scope.goto = function(type, url){

      if(type=='d'){
        var mymenu = menu.login.freelancer;
        mymenu.findwork.active = true;
        store.set("menu", mymenu);
      }else if('e'){
        var mymenu = menu.login.client;
        mymenu.jobs.active = true;
        store.set("menu", mymenu);
      }
      $window.location.href = webroot + url;

    }

  })
;
