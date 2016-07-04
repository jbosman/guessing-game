var gameStateFactory = function() {
		this.playAgain();
}

gameStateFactory.prototype.getNumOfGuesses = function() {
	return this.numOfGuesses;
}

gameStateFactory.prototype.getLastPlayerGuess = function() {
	return this.lastPlayerGuess;
}

gameStateFactory.prototype.getNumToGuess = function() {
	return this.numToGuess;
}

gameStateFactory.prototype.generateWinningNumber = function() {
	return Math.floor(Math.random() * 100) + 1;
}

gameStateFactory.prototype.lowerOrHigher = function() {
	if( this.lastPlayerGuess < this.numToGuess )
		return "lower";
	else
		return "higher";
}

gameStateFactory.prototype.checkGuess = function(num) {
	
	// Then update the players guess
	this.playerGuess = num;
	// And decrement the number of guesses
	this.numOfGuesses--;

}

gameStateFactory.prototype.playAgain = function() {
	this.numOfGuesses = 10;
	this.playerGuess = -1;
	this.winningNum = this.generateWinningNumber();
}

gameStateFactory.prototype.printGameState = function() {
	console.log("Guesses Left: " + this.numOfGuesses );
	console.log("Players Guess: " + this.playerGuess );
	console.log("Winning Num: " + this.winningNum );
}