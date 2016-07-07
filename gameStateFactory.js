var gameStateFactory = function() {
		this.playAgain();
}

gameStateFactory.prototype.playAgain = function() {
	countSpeak("init");
	this.MAX_NUM = 100;
	this.numOfGuesses = 10;
	this.playerGuess = -1;
	this.pastPlayerGuesses = [];
	this.winningNum = this.generateNumber(this.MAX_NUM);
	this.hints = [];
	this.fillHintsArray();
	this.inPlay = true;
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

gameStateFactory.prototype.generateNumber = function(maxNum) {
	return Math.floor(Math.random() * maxNum) + 1;
}

gameStateFactory.prototype.stillPlaying = function() {
	return this.inPlay;
}

gameStateFactory.prototype.lowerOrHigher = function() {
	
	var playersGuess = this.getPlayerGuess();
	var winningNumber = this.getWinningNum();

	if( playersGuess == winningNumber ){
		countSpeak("winner");
		this.inPlay = false;
	}
	else if( this.getNumOfGuesses() === 0 ){
		countSpeak("loser");
		this.inPlay = false;
	}
	else if( playersGuess < winningNumber ) { 
		if( Math.abs(playersGuess - winningNumber) > 10)
			countSpeak("toLowCold");
		else
			countSpeak("toLowHot");
	}
	else if( playersGuess > winningNumber ) {
		if( Math.abs(playersGuess - winningNumber) > 10)
			countSpeak("toHighCold");
		else
			countSpeak("toHighHot");
	}
	else
		alert("Unknown State. Call 911!!");

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
		this.fillHintsArray();
		this.lowerOrHigher();
		console.log(this.hints);
	}
	else
		countSpeak("dupNum");	

}

gameStateFactory.prototype.printGameState = function() {
	console.log("Guesses Left: " + this.getNumOfGuesses() );
	console.log("Players Guess: " + this.getPlayerGuess());
	console.log("Winning Num: " + this.getWinningNum() );
}

gameStateFactory.prototype.updateDisplay = function () {
	updateGuessesLeft(this.getNumOfGuesses());
}

gameStateFactory.prototype.generateHintNumber = function () {
	var invalidNum = false;
	var tempHintNum = -1;
		
	// Check that none of the hint numbers have already been guessed
	do{
		tempHintNum = this.generateNumber(this.MAX_NUM);
		
		for( var j = 0; j < this.pastPlayerGuesses.length && !invalidNum; j++) {
			if( tempHintNum == this.pastPlayerGuesses[j] )
				invalidNum = true;
		}
	}while(invalidNum);

	return tempHintNum;
}

gameStateFactory.prototype.fillHintsArray = function () {

	this.hints = [];

	// Add however many guesses we have left to hint numbers array
	for( var i = 0; i < this.getNumOfGuesses(); i++) {
		this.hints[i] = this.generateHintNumber();
	}

	// When the hintNumbers array has been generated add the winning number in randomly
	var randomArrayLocation = this.generateNumber(this.getNumOfGuesses());
	this.hints[randomArrayLocation] = this.getWinningNum();

}