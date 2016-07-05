// ************ DOCUMENT READY ************ //

$(document).ready( function() {

	var gameState = new gameStateFactory();

	gameState.printGameState();

	gameState.updateDisplay();


	// ************ SUBMIT GUESS BUTTON CLICK ************ //

	$("form").find(".submit-guess").on("click", function() {	
		// Prevent default button click actions
		// Mainly this stops the page from refreshing
		event.preventDefault();
		//console.log("Submit Guess Button Pressed");

		// First check if there are guesses left
		// if not make the button useless
		if( gameState.stillPlaying() ) {
			var playerGuessDOM = $("#playerGuess");

			// Submit the players next guess
			gameState.checkGuess(playerGuessDOM.val());
			// Clear the current guess from the text field
			playerGuessDOM.val("");

			gameState.updateDisplay();
			// Printing the game state for debugging
			gameState.printGameState();
		}
	})

	// ************ RESTART BUTTON CLICK ************ //

	$("form").find(".Restart-Button").on("click", function() {
		event.preventDefault();

		console.log("Restart Button Pressed");

		gameState.playAgain();

		gameState.updateDisplay();
		gameState.printGameState();

	})
});