'use strict';

angular
    .module (
    'website'
)
    .controller (
    'HeaderCtrl', function ( $scope, $location ) {

        // Function to get the active location.
        $scope.isActive = function ( viewLocation ) {

            // Returns the location via the location path.
            return viewLocation === $location.path();
        };
    }
);
