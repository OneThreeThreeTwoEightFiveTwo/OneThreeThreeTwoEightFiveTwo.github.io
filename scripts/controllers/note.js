'use strict';

angular
    .module (
    'website'
)
    .controller (
    'NoteCtrl', function ( $scope ) {

        // Web-page Title.
        $scope.title = "Notes App";

        // Initial Data.
        $scope.notes = [{

            // Today's date.
            createdOn: Date.now (),

            // Disables editing.
            edit: false,

            // Note text.
            text: ""
        }];

        // Function to add a note.
        $scope.addNote = function () {

            // Create new note
            $scope.newNote = {};

            // Note created on current date.
            $scope.newNote.createdOn = Date.now ();

            // New note text
            $scope.newNote.text = '';

            // Edit new note
            $scope.newNote.edit = true;

            // Push new note
            $scope.notes.push( $scope.newNote );

            // Create new note
            $scope.newNote = {};

        };

        // Function to delete the note.
        $scope.deleteNote = function ( i ) {

            // Confirmation to delete the note.
            var confirmation = confirm ( "Are you sure you want to delete this note?" );

            // Confirmation.
            if ( confirmation == true ) {

                // Deletes note.
                $scope.notes.splice( i, 1 );
            }
        };

        // Function to update the note.
        $scope.updateNote = function ( i, note ) {

            // Updates note text.
            $scope.notes[i].text = note;

            // Sets Edit back to false.
            $scope.notes[i].edit = false;
        };
    }
);
