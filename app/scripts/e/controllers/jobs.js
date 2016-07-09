'use strict';

/**
 * @ngdoc function
 * @name app.controller:newjobCtrl
 * @description
 * # newjobCtrl
 * Controller of the app
 */
app.controller('myJobsCtrl', function ($scope) {
    $scope.previousjob = '';
    $scope.message = '';
});

app.controller("NewjobCtrl", function ($scope, $rootScope) {
    $rootScope.title = 'New';
});