/**
 * Created by tuxming on 2016-07-04.
 */
/**
 * @ngdoc function
 * @name app.controller:timesheetCtrl
 * @description
 * # timesheetCtrl
 * Controller of the app
 */
app.controller('timesheetCtrl', function($scope){

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
