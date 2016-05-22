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
app.controller('ContractCtrl', function($scope){
  $scope.tabNames = [
    {label: "Active (5)", active: "active"},
    {label: "Hourly (4)", active: ""},
    {label: "Awaiting funding (1)", active: ""},
    {label: "Milestones in progres (0)", active: ""},
    {label: "Payment request (0)", active: ""},
    {label: "Completed/ended (18)", active: ""}
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
