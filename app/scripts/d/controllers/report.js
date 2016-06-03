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
    {label: "Work In Process", "total": "$40.00", active: "active"},
    {label: "In Review", "total": "$2,001.00", active: ""},
    {label: "Pending", "total": "$2,001.00", active: ""},
    {label: "Available", "total": "$0.00", active: ""}
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
