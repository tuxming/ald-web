/**
 * Created by tuxming on 2016-05-22.
 */
'use strict';

/**
 * @ngdoc function
 * @name app.controller:ContractCtrl
 * @description
 * # MyProfileController
 * Controller of the app
 */
app.controller('MyJobsCtrl', function($scope){
  $scope.tabNames = [
    {label: "进行中 (5)", active: "active"},
    {label: "小时制 (4)", active: ""},
    {label: "等待预备金 (1)", active: ""},
    {label: "里程碑 (0)", active: ""},
    {label: "待付款 (0)", active: ""},
    {label: "已结束 (18)", active: ""}
  ];



  $scope.showTabContent = function(index){
    $scope.tabNames.forEach(function(item, i){
      if(i==index)
        item.active = "active";
      else
        item.active = "";
    });
  };

});
