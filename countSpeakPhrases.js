// countSpeak
// Takes in a string that should be an array name in object countSay.
// Writes the desired phrase to the count's talking bubble.
function countSpeak(phrase) {
	
	// countSay Object
	// Object used to hold phrases for the count to say
	var countSay = {
	init: 	["Try to guess my number!!!", "It's between 1 and 100...", "Enter a number and press submit!" ],
	winner: ["Contgrats!!!", "You guessed my number!!!", " " ],
	loser: 	["Sorry....", "You ran out of guesses.", "Want to play again?" ],
	toHighHot: ["Your guess was too high.", "But you're hot!", "Try again?"],
	toLowHot:  ["Your guess was too low.", "But you're hot!", "Try again?"],
	toHighCold: ["Your guess was too high.", "You're freezing!", "Try again?"],
	toLowCold:  ["Your guess was too low.", "You're freezing!", "Try again?"],
	dupNum: [" ", "You already guessed that silly!", " " ]
	}

	var countSpeakDOM = $(".CountSpeak");

	countSpeakDOM.children().first().text(countSay[phrase][0]);
	countSpeakDOM.children().first().next().text(countSay[phrase][1]);
	countSpeakDOM.children().last().text(countSay[phrase][2]);
}




