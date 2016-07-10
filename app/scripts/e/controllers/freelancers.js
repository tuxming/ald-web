'use strict';

app.controller("ByoCtrl", function ($scope, $rootScope) {
    $scope.firstName = '';
});

app.controller("HiredCtrl", function ($scope, $rootScope) {
    $rootScope.title = "My Freelancers - Hired";
    $rootScope.page_nav = 'hired';
});

app.controller("PastHiresCtrl", function ($scope, $rootScope) {
    $rootScope.title = "My Freelancers - PastHires";
    $rootScope.page_nav = 'past';
});

app.controller("HiresSavedCtrl", function ($scope, $rootScope) {
    $rootScope.title = "My Freelancers - Saved";
    $rootScope.page_nav = 'saved';
});

app.controller("FindFreelancersCtrl", function ($scope, $rootScope) {
    $rootScope.title = "Freelancers - Brwose";
});