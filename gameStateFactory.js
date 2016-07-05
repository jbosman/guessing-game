var gameStateFactory = function() {
		this.playAgain();
}

gameStateFactory.prototype.getNumOfGuesses = function() {
	return this.numOfGuesses;
}

gameStateFactory.prototype.getPlayerGuess = function() {
	return this.playerGuess;
}

gameStateFactory.prototype.getWinningNum = function() {
	return this.winningNum;
}

gameStateFactory.prototype.generateWinningNumber = function() {
	return Math.floor(Math.random() * 100) + 1;
}

gameStateFactory.prototype.stillPlaying = function() {
	return this.inPlay;
}

gameStateFactory.prototype.lowerOrHigher = function() {
	
	if( this.getPlayerGuess() == this.getWinningNum() ){
		winnerCountSpeak();
		this.inPlay = false;
	}
	else if( this.getNumOfGuesses() === 0 ){
		loserCountSpeak();
		this.inPlay = false;
	}
	else if( this.getPlayerGuess() < this.getWinningNum() )
		toLowCountSpeak();
	else if( this.getPlayerGuess() > this.getWinningNum() ) 
		toHighCountSpeak();
	else{
		debugger;
		alert("Unknown State");
	}

}

gameStateFactory.prototype.checkGuess = function(num) {
	
	// Then update the players guess
	this.playerGuess = num;
	var match = false;

	// Check if we have duplicate guess
	for( var i = 0; i < this.pastPlayerGuesses.length && !match; i++ ){
		if( this.pastPlayerGuesses[i] === num )
			match = true;
	}

	// If it's not a duplicate
	if( !match ){
		this.numOfGuesses--;
		this.pastPlayerGuesses.push(num);
		this.lowerOrHigher();
	}
	else
		dupGuessCountSpeak();	

}

gameStateFactory.prototype.playAgain = function() {
	initCountSpeak();
	this.numOfGuesses = 10;
	this.playerGuess = -1;
	this.pastPlayerGuesses = [];
	this.winningNum = this.generateWinningNumber();
	this.inPlay = true;
}

gameStateFactory.prototype.printGameState = function() {
	console.log("Guesses Left: " + this.getNumOfGuesses() );
	console.log("Players Guess: " + this.getPlayerGuess());
	console.log("Winning Num: " + this.getWinningNum() );
}

gameStateFactory.prototype.updateDisplay = function () {
	updateGuessesLeft(this.getNumOfGuesses());
}