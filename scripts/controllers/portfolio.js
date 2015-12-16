'use strict';

angular
    .module (
    'website'
)
    .controller (
    'PortfolioCtrl', function ( $scope, $http ) {

        // Web-page Title
        $scope.title = "Portfolio";

        // Imports posts from the external JSON file. Then gets the data.
        $http.get ( "scripts/data/projects.json" ).then ( function ( data ) {

            // Stores the JSON projects data into the object 'names'.
            $scope.projects = data.data.projects;
        });
    }
);
