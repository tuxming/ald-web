/**
 * Created by tuxming on 2016-07-04.
 */
/**
 * @ngdoc function
 * @name app.controller:timeByFreelancerCtrl
 * @description
 * # timeByFreelancerCtrl
 * Controller of the app
 */
app.controller('timeByFreelancerCtrl', function($scope){

  $scope.showModel = true;
  $scope.switchModel = function(obj){
    $scope.showModel = obj;
  };

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
