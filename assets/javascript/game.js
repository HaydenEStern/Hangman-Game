document.onclick = function(event) {

    var hangman = {
        guessCounter: 12,
        winCounter: 0,
        words: ["terezi", "davesprite", "karkat", "vriska", "ferferi", "rose"],
        activeWord: "",
        splitWord: [],
        wordBlank: [],
        userInput: "",
        unBlank: [],
        // randomly selects a word from the words array
        pickWords: function() {
            this.activeWord = this.words[Math.floor(Math.random() * this.words.length)];
        },
        // splits the string into an array with one letter per index and stores it as a new key
        splitWords: function() {
            this.splitWord = this.activeWord.split("");
        },
        // copies the split array and replaces its contents with the "_" character and
        // then rejoins it into a string
        makeBlanks: function() {
            this.wordBlank = this.splitWord.slice().fill("_ ").join("");

        },





        // picks a word, splits it into an array, and displays the blank spaces on the screen
        startGame: function() {
            this.pickWords();
            this.splitWords();
            this.makeBlanks();

        },

        splitBlank: function() {
            this.unBlank = this.wordBlank.split(" ");
        },

        replaceBlank: function() {
        	for (i = 0; i < this.splitWord.length; i++) {
            if (this.splitWord[i] === this.userInput) {
                
               this.unBlank[i] = this.userInput;
               this.unBlank.pop();
               this.unBlank = this.unBlank.join(" ");
               return this.unBlank;

            }
            else {
            	console.log("no match");
            };
        	};
    	},
        

       // iterateBlank: function() {

         //   this.unBlank = this.splitWord.forEach(this.replaceBlank);

       // },

        //	this.unBlank = this.wordBlank.split("").splice(i, i, this.userInput);

        // check if userInput matches a character in splitWords
        //        checkLetter: function() {
        //        	for (i = 0; i < this.splitWord.length; i++) {
        //       		if (this.userInput === this.splitWord[i]) {
        // split blankWord and replace blank at index [i] with userInput
        // and then rejoin
        //					this.fillBlanks();
        //				console.log(this.wordBlank);
        //  		};
        //	};
        // },


    };
    hangman.startGame();
    document.getElementById("game-text").innerHTML = hangman["wordBlank"];
    // stores key pressed by user as the value of the userInput key inside the hangman object
    document.onkeyup = function(event) {
        hangman["userInput"] = event.key;
        //     var checkLetter = function() {

        hangman.splitBlank();
        hangman.replaceBlank();
        document.getElementById("game-text").innerHTML = hangman["unBlank"];
        //    		hangman.splitWord.forEach(function(letter, index, unBlank) {  
        //  			if (hangman.userInput === hangman.splitWord[i]) {   		
        //			hangman.unBlank[index] = this.userInput;
    };
    //	});
    //   for (i = 0; i < hangman.splitWord.length; i++) {
    //      
    // split blankWord and replace blank at index [i] with userInput
    // and then rejoin
};





