'use strict';

app.controller("ByoCtrl", function ($scope, $rootScope) {
    $scope.firstName = '';
});

app.controller("HiredCtrl", function ($scope, $rootScope) {
    $rootScope.title = "My Freelancers - Hired";
    $rootScope.myfreelancer_page_nav = 'hired';
});

app.controller("PastHiresCtrl", function ($scope, $rootScope) {
    $rootScope.title = "My Freelancers - PastHires";
    $rootScope.myfreelancer_page_nav = 'past';
});

app.controller("HiresSavedCtrl", function ($scope, $rootScope) {
    $rootScope.title = "My Freelancers - Saved";
    $rootScope.myfreelancer_page_nav = 'saved';
});

app.controller("FindFreelancersCtrl", function ($scope, $rootScope) {
    $rootScope.title = "Freelancers - Brwose";
});

app.controller("FreelancersWorkdiaryCtrl", function ($scope, $rootScope, $uibModal) {
    $rootScope.title = "Freelancers - Workdiary";
});