'use strict';

/**
 * @ngdoc function
 * @name app.controller:ProposalsController
 * @description
 * # ProposalsController
 * Controller of the app
 */

app.controller('ProposalsController', function ($scope, $rootScope) {
    $rootScope.title = "Proposals Active";
    $rootScope.proposals_page_nav = 'active';
});

app.controller('ProposalsArchivedController', function ($scope, $rootScope) {
    $rootScope.title = "Proposals Archived";
    $rootScope.proposals_page_nav = 'archived';

});