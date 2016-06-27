'use strict';

/**
 * @ngdoc function
 * @name app.controller:MessageCtrl
 * @description
 * # MessageCtrl
 * Controller of the app
 */
app.controller('MessageCtrl', function ($scope) {

  $scope.radioCheck = true;
  $scope.radioSwitch = function(obj){
    $scope.radioCheck = obj;
  };

  $scope.sideFileByDate = false;
  $scope.sideFileByDateSwitch = function(obj){
    $scope.sideFileByDate = !obj;
  };

  $scope.isMsgMaxWidth = false;
  $scope.isShowFiles = false;
  $scope.isShowPeoples = true;
  $scope.showFiles = function(obj){

    $scope.isShowFiles = !obj;
    if($scope.isShowFiles){
        $scope.isMsgMaxWidth = false;
        $scope.isShowPeoples = false;
    }else{
      $scope.isShowPeoples = false;
      $scope.isMsgMaxWidth = true;
    }
  };

  $scope.showPeoples = function(obj){
    $scope.isShowPeoples = !obj;
    if($scope.isShowPeoples){
        $scope.isMsgMaxWidth = false;
        $scope.isShowFiles = false;
    }else{
        $scope.isMsgMaxWidth = true;
        $scope.isShowFiles = false;
    }

  };

});
