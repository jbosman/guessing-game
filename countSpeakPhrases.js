function initCountSpeak() {
	var countSpeakDOM = $(".CountSpeak");
	countSpeakDOM.children().show();
	countSpeakDOM.children().first().text("Try to guess my number!!!");
	countSpeakDOM.children().first().next().text("It's between 1 and 100...");
	countSpeakDOM.children().last().text("Enter a number and press submit!");
}

function winnerCountSpeak() {
	var countSpeakDOM = $(".CountSpeak");
	countSpeakDOM.children().first().text("Contgrats!!!");
	countSpeakDOM.children().first().next().text("You guessed my number!!!");
	countSpeakDOM.children().last().hide();
}

function loserCountSpeak() {
	var countSpeakDOM = $(".CountSpeak");
	countSpeakDOM.children().show();
	countSpeakDOM.children().first().text("Sorry....");
	countSpeakDOM.children().first().next().text("You ran out of guesses.");
	countSpeakDOM.children().last().text("Want to play again?");
}

function toHighCountSpeak() {
	var countSpeakDOM = $(".CountSpeak");
	countSpeakDOM.children().show();
	countSpeakDOM.children().first().hide();
	countSpeakDOM.children().first().next().text("Your guess was too high.");
	countSpeakDOM.children().last().text("Try again?");
}

function toLowCountSpeak() {
	var countSpeakDOM = $(".CountSpeak");
	countSpeakDOM.children().show();
	countSpeakDOM.children().first().hide();
	countSpeakDOM.children().first().next().text("Your guess was too low.");
	countSpeakDOM.children().last().text("Try again?");
}

function dupGuessCountSpeak() {
	var countSpeakDOM = $(".CountSpeak");
	countSpeakDOM.children().show();
	countSpeakDOM.children().first().hide();
	countSpeakDOM.children().first().next().text("You already guessed that silly!");
	countSpeakDOM.children().last().hide();
}

function updateGuessesLeft(num) {
	$(".guessesLeft").text( "Guesses Left: " + num );
}