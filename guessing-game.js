// ************ DOCUMENT READY ************ //

$(document).ready( function() {

	var gameState = new gameStateFactory();

	/* debug messages to the console */
	gameState.printGameState(); 
	/* Update the display - right now just the num of guesses */
	gameState.updateDisplay();


	// ************ SUBMIT GUESS BUTTON CLICK ************ //

	$("form").find(".submit-guess").on("click", function() {	
		// Prevent default button click actions
		// Mainly this stops the page from refreshing
		event.preventDefault();
		//console.log("Submit Guess Button Pressed");

		submitGuess(gameState);
	})

	// ************ RESTART BUTTON CLICK ************ //

	$("form").find(".Restart-Button").on("click", function() {
		event.preventDefault();

		console.log("Restart Button Pressed");

		gameState.playAgain();

		gameState.updateDisplay();
		gameState.printGameState();

	})

	// ************ HINT BUTTON CLICK ************ //

	$("form").find(".hint-button").on("click", function() {
		event.preventDefault();

		console.log("Hint Button Pressed");
	})

	// ************ ENTER KEY PRESS ON PLAYER GUESS FIELD ************ //
	// For whatever reason this was restarting the game.
	// This disables event in the field, but still gets caught
	// by the enter key press event handler below on the document.
	$("form").find("#playerGuess").on("keydown", function() {
		if( event.which == 13 )
			event.preventDefault();
	})

	// ************ ENTER KEY PRESS ************ //
	// Grabs
	$(document).on("keydown", function(event) {
		if( event.which == 13 )
			submitGuess(gameState);
	})
});