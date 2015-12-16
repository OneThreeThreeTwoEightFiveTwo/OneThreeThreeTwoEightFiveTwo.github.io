'use strict';

angular
    .module (
    'website'
)
    .controller (
    'GuessingGameCtrl', function ( $scope ) {

        // Web-page Title
        $scope.title = "Guessing Game";

        // Function to verify the Guess
        $scope.verifyGuess = function () {

            // Displays the number of tries. (Adds one to the try)
            $scope.numberOfGuesses = $scope.numberOfGuesses + 1;

            // Ends the game is the user used up all their guesses.
            if ($scope.numberOfGuesses === $scope.setGuessLimit) {

                // Restarts the game when the user has ran out of guesses.
                $scope.startGame();
            }

            // Gets the deviation between the answer and the user's guess.
            $scope.guessDifference = $scope.answer - $scope.guess;

        };

        // Function to initialise the Game
        $scope.startGame = function () {

            // Sets the number of tries to 0.
            $scope.numberOfGuesses = 0;

            // Sets a guess limit for the user.
            $scope.setGuessLimit = 11;

            // Randomly Generates a number between: 1 - 100.
            $scope.answer = Math.floor ( ( Math.random() * 100 ) + 1 );

            // Sets the users guess to null
            $scope.guess = null;

            // Sets the deviation to null.
            $scope.guessDifference = null;
        };

        // Initialises the game.
        $scope.startGame();

        // Logs the correct answer in the console.
        console.log("Answer: " + $scope.answer);
    }
);
