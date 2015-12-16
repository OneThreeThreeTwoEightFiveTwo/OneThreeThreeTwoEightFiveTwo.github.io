'use strict'; /* Created by: Ravzan [Anglia Ruskin University] */

angular
    .module (
    'website'
)
    .controller (
    'NavigationCtrl', function ( $scope, $location, $http ) {
        // Imports the Navigation items.
        $http.get ( 'scripts/data/navigation.json').success (
            function ( data ) {

                // Store information for use.
                $scope.items = data.items;
            }
        ).then (
            function () {

                // Must use a wrapper object, otherwise "activeItem" won't work.
                $scope.wrapper = {};

                // Creates two variables for navigation routes.
                // Used to set the current route.
                var currentRoute,

                    // Used for the default route, home.
                    defaultRoute = 'home',

                    // Function to determine the current route.
                    setCurrentRoute = function () {

                        // $$path contains anything after the '/'. e.g. 'index.html#/about', $$path contains '/about'. $$path is aware of docroot/context.
                        // $location is service used to analyse the URL in the address bar and makes it available.
                        currentRoute = $location.$$path.substr( 1 );
                    },

                    // Function to set the current active item based on the current route variable.
                    setActiveItem = function () {

                        // If the current route is empty, set it to the default route ('home'), otherwise set it to the current route name.
                        $scope.wrapper.activeItem = currentRoute.length ? currentRoute : defaultRoute;
                    };

                // If the user manually changes browser location, detect it and make adjustments.
                $scope.$on (
                  '$routeChangeSuccess', function () {

                        // Set the current route on page load.
                        setCurrentRoute();

                        // Set default navigation item based on ID.
                        setActiveItem();
                    }
                );

                // Set the current route on page load.
                setCurrentRoute();

                // Set default navigation item based on ID.
                setActiveItem();

            }
        );
    }
);
