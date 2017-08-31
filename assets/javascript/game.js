document.getElementById("start").onclick = function(event) {


    var guessCounter = 12;
    var winCounter = 0;
    var words = ["terezi", "davesprite", "karkat", "vriska", "ferferi", "rose"];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var activeWord = "";
    var splitWord = [];
    var wordBlank = [];
    var userInput = "";
    var gameText = document.getElementById("game-text");
    var BlankSpan;
    var guessedLetters = [];
    var isGuessed;


    //clear wor
    // randomly selects a word from the words array
    function pickWords() {
        activeWord = words[Math.floor(Math.random() * words.length)];
    };
    // splits the string into an array with one letter per index and stores it as a new key
    function splitWords() {
        splitWord = activeWord.split("");
    };
    // loops over the split array to put one underscore per character into a <span> tag
    // this displays the blanks
    function makeBlanks() {
        for (i = 0; i < splitWord.length; i++) {
            blankSpan = document.createElement("span");
            blankSpan.innerHTML = "_ ";
            word.appendChild(blankSpan);
        };
    };

    // picks a word, splits it into an array, and displays the blank spaces on the screen
    function startGame() {
        pickWords();
        splitWords();
        makeBlanks();

    };

    // replace the blanks with the selected letter
    function replaceBlanks() {
    	guessedLetters.forEach(function(element) {
    		if (element === userInput) {
    			isGuessed = true;
    		}
    		else {
    			isGuessed = false;
    		};
    	});
    	if (isGuessed === false) {
    		guessCounter --;
    		document.getElementById("guesses").innerHTML = "Guesses remaining: " + guessCounter;
    	};

        guessedLetters.push(userInput);


        // loop over the length of splitword to see if there's a match, if there's a match, replace the correct span w userinput
        for (i = 0; i < splitWord.length; i++) {
            if (userInput === splitWord[i]) {
                word.childNodes[i].innerHTML = userInput;


            };

        };
                if (guessCounter <= 0) {
            document.getElementById("guesses").innerHTML = "You lose";
        };
    };






    startGame();

    // hangman.splitBlank();
    // stores key pressed by user as the value of the userInput key inside the hangman object
    document.onkeyup = function(event) {
        userInput = event.key;
        replaceBlanks();

    };

};