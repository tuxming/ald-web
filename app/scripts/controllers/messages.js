'use strict';

/**
 * @ngdoc function
 * @name app.controller:MessageCtrl
 * @description
 * # MessageCtrl
 * Controller of the app
 */
app.controller('MessageCtrl', function ($scope, $uibModal) {

  //left bar switch
  $scope.radioCheck = true;
  $scope.radioSwitch = function(obj){
    $scope.radioCheck = obj;
  };

  //right top bar switch
  $scope.sideFileByDate = false;
  $scope.sideFileByDateSwitch = function(obj){
    $scope.sideFileByDate = !obj;
  };

  $scope.isMsgMaxWidth = true;
  $scope.isShowFiles = false;
  $scope.isShowPeoples = false;
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


  //add people dialog show
  var msgScope = $scope;

  $scope.showAddppDlg = function(){
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'AddppDlg.html',
      controller: function($scope){

        msgScope.xx = '1';

      },
      size: "",
      resolve: {
       // items: function () {
       //   return $scope.items;
       // }
      }
    })
  };

  //meessagelist or room list switch
  $scope.isShowRoomList = true;

  $scope.roomsTabs = [true, false, false, false];
  $scope.switchRoomsTab = function(index){
    $scope.roomsTabs = [false, false, false, false];
    $scope.roomsTabs[index] = true;
  };

  $scope.showMessageList = function(){
    $scope.isShowRoomList = true;
  }

  $scope.showRoomsList = function(){
    $scope.isShowRoomList = false;
  }

});
