/**
 * Created by tuxming on 2016-07-02.
 */

'use strict';

/**
 * @ngdoc function
 * @name app.controller:TimelogsCtrl
 * @description
 * # ReportMainCtrl
 * Controller of the app
 */
app.controller('buyerWeekCtrl', function($scope){
  $scope.popup1 = {
    opened: false
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

});
