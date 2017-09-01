
// declare all global variables
var guessCounter = 12;
var winCounter = 0;
var words = ["terezi", "davesprite", "karkat", "vriska", "ferferi", "rose"];
var activeWord = "";
var splitWord = [];
var wordBlank = [];
var userInput = "";
var guessedLetters = [];
var isGuessed;
var word = document.getElementById("word");

// set up the game by clicking the start button
document.getElementById("start").onclick = function(event) {
    startGame();
};


document.getElementById("reset").onclick = function(event) {
    while (word.firstChild) {
        word.removeChild(word.firstChild);
    };
    startGame();
    guessCounter = 12;
    document.getElementById("guesses").innerHTML = "Guesses remaining: " + guessCounter;
    guessedLetters = [];
};

document.onkeyup = function(event) {
    userInput = event.key;
    replaceBlanks();

};



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
        var blankSpan = document.createElement("span");
        blankSpan.innerHTML = "_ ";
        blankSpan.className += " blank";
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
    if (guessedLetters.length > 0) {
        guessedLetters.forEach(function(element) {
            if (element === userInput) {
                isGuessed = true;
            } else {
                isGuessed = false;
            };
        });
        if (isGuessed === false) {
            guessCounter--;
            document.getElementById("guesses").innerHTML = "Guesses remaining: " + guessCounter;
        };
    } else if (guessedLetters.length === 0) {
        guessCounter--;
        document.getElementById("guesses").innerHTML = "Guesses remaining: " + guessCounter;
    };

    guessedLetters.push(userInput);


    // loop over the length of splitword to see if there's a match, if there's a match, replace the correct span w userinput
    for (i = 0; i < splitWord.length; i++) {
        if (userInput === splitWord[i]) {
            word.childNodes[i].innerHTML = userInput + " ";


        };

    };
    if (guessCounter <= 0) {
        document.getElementById("guesses").innerHTML = "You lose";
    };
};