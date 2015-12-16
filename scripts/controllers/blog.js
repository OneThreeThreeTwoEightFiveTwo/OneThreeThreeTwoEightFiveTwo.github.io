'use strict'; /* Modified code from: http://codepen.io/nickmoreton/pen/mgtLK */

angular
    .module (
    'website'
)
    .controller (
    'BlogCtrl', function ( $scope, $http ) {

        // Web-page Title
        $scope.title = "Blog";

        var blog = this;

        // Creates an empty object for posts.
        blog.posts = {};

        // Imports posts from the external JSON file.
        $http.get ( 'scripts/data/posts.json' ) .success (
            function ( data ) {

                // Stores the JSON data into the object 'posts'.
                blog.posts = data;

                console.log(blog.posts);
            }
        );

        // Sets the blog tab to 'blog'. (default)
        blog.currentTab = 'blog';

        // Function to set the current tab.
        blog.selectTab = function ( setTab ) {

            // Sets the blog tab.
            blog.currentTab = setTab;
        };

        // Function to check the current tab.
        blog.isSelected = function ( checkTab ) {

            // Checks the blog tab.
            return blog.currentTab === checkTab;
        };
    }
);
