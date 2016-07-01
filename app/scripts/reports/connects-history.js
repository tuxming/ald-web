/**
 * Created by tuxming on 2016-07-02.
 */

'use strict';

/**
 * @ngdoc function
 * @name app.controller:connectsHistoryCtrl
 * @description
 * # ReportMainCtrl
 * Controller of the app
 */
app.controller('connectsHistoryCtrl', function($scope){
  $scope.popup1 = {
    opened: false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

});
