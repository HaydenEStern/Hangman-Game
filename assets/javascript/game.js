// declare all variables that will be used inside the function
var words = ["Terezi", "Davesprite", "Karkat", "Vriska", "Ferferi", "Rose"]
var guessCounter = 12;
var winCounter = 0;
var wordBlank;
var activeWord;
var splitWord = [];

// select a random word with which to start
var activeWord = words[Math.floor(Math.random() * words.length)];
var splitWord = activeWord.split("");
var wordBlank = splitWord.fill("_ ").join("");
// display the (hidden) first word when any key is pressed

document.onkeyup = function(event) {

document.getElementById("game-text").innerHTML = wordBlank;
};
//store user input as a variable
/*	document.onkeyup = function(event) {
		userInput = event.key;
//search array of letters for for userInput
		for (i = 0; i < splitWord.length; i++) {
//replace blank space with letter			
			if (splitWord[i] = userInput) {
				console.log(userInput);
			};

		};
	};

*/