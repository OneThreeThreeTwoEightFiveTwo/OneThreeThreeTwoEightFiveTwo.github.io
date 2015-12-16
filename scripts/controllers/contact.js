'use strict';

angular
    .module (
    'website'
)
    .controller (
    'ContactCtrl', function ( $scope ) {

        // Web-page Title
        $scope.title = "Contact Me";

        // Blank Form Data
        $scope.formData = {};

        // Function to process the form's details.
        $scope.processForm = function () {

            // Informs the person the message has been sent
            alert ( 'Message Sent' );
        };

    }
);