// ************ DOCUMENT READY ************ //

$(document).ready( function() {

	var gameState = new gameStateFactory();

	gameState.printGameState();

	// ************ SUBMIT GUESS BUTTON CLICK ************ //

	$("form").find(".submit-guess").on("click", function() {	
		event.preventDefault();

		var playerGuessDOM = $("#playerGuess");

		//console.log("Submit Guess Button Pressed");
		gameState.checkGuess(playerGuessDOM.val());
		playerGuessDOM.val("");


		gameState.printGameState();
	})

	// ************ RESTART BUTTON CLICK ************ //

	$("form").find(".Restart-Button").on("click", function() {
		event.preventDefault();

		console.log("Restart Button Pressed");

		gameState.playAgain();

		gameState.printGameState();

	})
});