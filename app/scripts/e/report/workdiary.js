/**
 * Created by tuxming on 2016-07-04.
 */
/**
 * @ngdoc function
 * @name app.controller:workdiaryCtrl
 * @description
 * # workdiaryCtrl
 * Controller of the app
 */
app.controller('workdiaryCtrl', function($scope){

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
