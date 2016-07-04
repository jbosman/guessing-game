// ************ DOCUMENT READY ************ //

$(document).ready( function() {

	var gameState = new gameStateFactory();

	gameState.printGameState();

	// ************ SUBMIT GUESS BUTTON CLICK ************ //

	$("form").find(".submit-guess").on("click", function() {	
		// Prevent default button click actions
		// Mainly this stops the page from refreshing
		event.preventDefault();

		// First check if there are guesses left
		// if not make the button useless
		if( gameState.getNumOfGuesses() > 0 ) {
			var playerGuessDOM = $("#playerGuess");

			//console.log("Submit Guess Button Pressed");

			// Submit the players next guess
			gameState.checkGuess(playerGuessDOM.val());
			// Clear the current guess from the text field
			playerGuessDOM.val("");

			// Printing the game state for debugging
			gameState.printGameState();
		}
	})

	// ************ RESTART BUTTON CLICK ************ //

	$("form").find(".Restart-Button").on("click", function() {
		event.preventDefault();

		console.log("Restart Button Pressed");

		gameState.playAgain();

		gameState.printGameState();

	})
});