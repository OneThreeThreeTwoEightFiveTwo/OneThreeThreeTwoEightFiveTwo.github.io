'use strict';

angular
    .module (
    'website', [                     // AngularJS Modules
        'angular-markdown-editable', // Let's the user to edit the base markdown on focus.
        'ngAnimate',                 // Enables animation features.
        'ngCookies',                 // Handles cookie management.
        'ngResource',                // Used to query and post data to a REST API.
        'ngRoute',                   // Enable URL routing.
        'ngSanitize',                // Securely parses and manipulates HTML data.
        'ngTouch',                   // Enables touch for touchscreen devices.
        'ngStorage',                 // Makes Web Storage work in the 'Angular Way'.
        'ngMap'
    ]
)
    .config (
    function ( $routeProvider ) // Configures routes. (uses ngRoute)
    {
        $routeProvider
            .when (
            '/', {  // User accesses index.html/#/
                templateUrl: 'views/home.html',
                controller : 'HomeCtrl'
            }
        )
            .when (
            '/contact', {  // User accesses index.html/#/contact
                templateUrl: 'views/contact.html',
                controller : 'ContactCtrl'
            }
        )
            .when (
            '/contact-page', {
                templateUrl: 'views/contact-page.html',
                controller : 'ContactCtrl'
            }
        )
            .when (
            '/blog', {  // User accesses index.html/#/blog
                templateUrl : 'views/blog.html',
                controller  : 'BlogCtrl',
                controllerAs: 'blog'
            }
        )
            .when (
            '/portfolio', { // User accesses index.html/#/portfolio
                templateUrl: 'views/portfolio.html',
                controller : 'PortfolioCtrl'
            }
        )
            .when (
            '/portfolio/guessing-game', {
                templateUrl: 'views/guessing-game.html',
                controller : 'GuessingGameCtrl'
            }
        )
            .when (
            '/portfolio/note', {
                templateUrl: 'views/note.html',
                controller : 'NoteCtrl'
            }
        )
            .otherwise ( // Redirects to Home.
            {
                // Redirects to Home, if the user hasn't entered a current URL.
                redirectTo: '/'
            }
        );
    }
);
