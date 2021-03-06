/**
 * Created by tuxming on 2016-05-22.
 */
'use strict';

/**
 * @ngdoc function
 * @name app.controller:contractCtrl
 * @description
 * # contractCtrl
 * Controller of the app
 */
app.controller('contractCtrl', function($scope, $rootScope){
  $rootScope.title = "Contracts";
});
app.controller('contractDetailCtrl', function($scope, $rootScope,$uibModal){
  $rootScope.title = "Want a company for our web project";
  var msgScope = $scope;
  $scope.showEditIncreaseRateDlg = function(){
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'increase-rate-dlg.html',
      controller: function($scope){

        msgScope.xx = '1';

      },
      size: "",
      resolve: {
        // items: function () {
        //   return $scope.items;
        // }
      }
    })
  };

  $scope.showChangeWeeklyLimitDlg = function(){
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'change-weekly-limit.html',
      controller: function($scope){

        msgScope.xx = '1';

      },
      size: "",
      resolve: {
        // items: function () {
        //   return $scope.items;
        // }
      }
    })
  };

  $scope.showActivitiesEditDlg = function(){
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'activities-edit-dlg.html',
      controller: function($scope){

        $scope.createHide = true;
        $scope.switchCreateHide = function(obj){
          $scope.createHide = obj;
        }

      },
      size: "lg",
      resolve: {
        // items: function () {
        //   return $scope.items;
        // }
      }
    })
  };

  $scope.showCompanyContactEditDlg = function(){
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'company-contact-edit-dlg.html',
      controller: function($scope){

        msgScope.xx = '1';

      },
      size: "",
      resolve: {
        // items: function () {
        //   return $scope.items;
        // }
      }
    })
  };

});

app.controller('switchToHourlyCtrl', function($scope, $rootScope){
  $rootScope.title="Switch to Hourly";
});

app.controller('paymentCtrl', function($scope, $rootScope){
  $rootScope.title="Mack One-Time Payment: xxxx";
});

app.controller('closeCtrl', function($scope, $rootScope){
  $rootScope.title="End Contract with Freelacer-name (project-name)";
});

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      templateUrl: webroot+'/e/contract/contracts.html',
      controller: 'contractCtrl',
      controllerAs: 'contracts'
    })
    .when('/detail',{
      templateUrl: webroot+'/e/contract/detail.html',
      controller: 'contractDetailCtrl',
      controllerAs: 'detail'
    })
    .when('/switch-to-hourly',{
      templateUrl: webroot+'/e/contract/switch-to-hourly.html',
      controller: 'switchToHourlyCtrl',
      controllerAs: 'switchToHourly'
    })
    .when('/payment',{
      templateUrl: webroot+'/e/contract/payment.html',
      controller: 'paymentCtrl',
      controllerAs: 'payment'
    })
    .when('/close',{
      templateUrl: webroot+'/e/contract/close.html',
      controller: 'closeCtrl',
      controllerAs: 'close'
    })
    ;
});

