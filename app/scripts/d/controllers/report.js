'use strict';

/**
 * @ngdoc function
 * @name app.controller:ReportController
 * @description
 * # SavedController
 * Controller of the app
 */

app.controller('ReportController', function($scope){
  $scope.tabNames = [
    {label: "工作中", "total": "￥400.00", active: "active"},
    {label: "审核中", "total": "￥450.00", active: ""},
    {label: "待到账", "total": "￥600.00", active: ""},
    {label: "可用余额", "total": "￥308.00", active: ""}
  ];

  $scope.showTabContent = function(index){
    $scope.tabNames.forEach(function(item, i){
      if(i==index){
        item.active = "active";
      }else{
        item.active = "";
      }
    });
  };
});
