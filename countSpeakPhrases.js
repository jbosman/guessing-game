
// countSay Object
// Object used to hold phrases for the count to say
var countSay = {
	init: 	["Try to guess my number!!!", "It's between 1 and 100...", "Enter a number and press submit!" ],
	winner: ["Contgrats!!!", "You guessed my number!!!", " " ],
	loser: 	["Sorry....", "You ran out of guesses.", "Want to play again?" ],
	toHigh: [" ", "Your guess was too high.", "Try again?"],
	toLow:  [" ", "Your guess was too low.", "Try again?"],
	dupNum: [" ", "You already guessed that silly!", " " ]
}

// countSpeak
// Takes in a string that should be an object in object countSay.
// Writes the desired phrase to the count's talking bubble.
function countSpeak(phrase) {
	var countSpeakDOM = $(".CountSpeak");
	var countToSay = countSay[phrase];

	countSpeakDOM.children().first().text(countToSay[0]);
	countSpeakDOM.children().first().next().text(countToSay[1]);
	countSpeakDOM.children().last().text(countToSay[2]);
}




