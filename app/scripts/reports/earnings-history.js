/**
 * Created by tuxming on 2016-07-02.
 */

'use strict';

/**
 * @ngdoc function
 * @name app.controller:EarningsHistoryCtrl
 * @description
 * # ReportMainCtrl
 * Controller of the app
 */
app.controller('EarningsHistoryCtrl', function($scope){
  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

});
