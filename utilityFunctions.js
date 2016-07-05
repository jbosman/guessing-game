function updateGuessesLeft(num) {
	$(".guessesLeft").text( "Guesses Left: " + num );
}

function submitGuess(gameStateFuncObj) {

	// First check if there are guesses left
	// if not make the button useless
	if( gameStateFuncObj.stillPlaying() ) {
			var playerGuessDOM = $("#playerGuess");

			// This if is mainly to check that the field wasnt blank
			if( playerGuessDOM.val() != "" ) {
				// Submit the players next guess
				gameStateFuncObj.checkGuess(playerGuessDOM.val());
				// Clear the current guess from the text field
				playerGuessDOM.val("");

				gameStateFuncObj.updateDisplay();
				// Printing the game state for debugging
				gameStateFuncObj.printGameState();

			}
	}	

}