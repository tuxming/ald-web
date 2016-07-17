'use strict';

/**
 * @ngdoc function
 * @name app.controller:ReportMainCtrl
 * @description
 * # ReportMainCtrl
 * Controller of the app
 */
app.controller('FindJobsCtrl', function ($scope,$rootScope) {
    $rootScope.title = "Explore jobs on Upwork";
});

app.controller('RosterCtrl', function ($scope, $rootScope) {
    $rootScope.title = "Agency Roster";
});
