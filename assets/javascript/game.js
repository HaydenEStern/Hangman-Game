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
                oneLetter: [],
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

                // replace the blanks with the selected letter
                replaceBlank: function() {
                    // splits the blank word string into an array        	
                    this.unBlank = this.wordBlank.split(" ");
                    // loops over the the length of the splitWord array        	
                    for (i = 0; i < this.splitWord.length; i++) {
                        // if the letter found in that index of splitWord matches the user's input        		
                        if (this.splitWord[i] === this.userInput) {
                            // set index [i] of unBlank (the displayed content) to equal the user's input. this displays the letter  
                            // need it to display the letter for every instance of userinput             
                            this.unBlank[i] = this.userInput;
                            // joins unBlank and saves it back to the original wordBlank string
                            this.unBlank = this.unBlank.join(" ");
                            this.wordBlank = this.unBlank;
                            return this.wordBlank;

                        };

                    };
                },

                // replace the blanks with the selected letter
                replaceBlankTwo: function() {
                    // splits the blank word string into an array        	
                    this.unBlank = this.wordBlank.split(" ");
                    // loops over the the length of the splitWord array        	
                    // if the letter found in that index of splitWord matches the user's input        		
                    // set index [i] of unBlank (the displayed content) to equal the user's input. this displays the letter  
                    // need it to display the letter for every instance of userinput  
                    
                    //loops over the length of the splitword array
                    	for (i = this.splitWord.length - 1; i > 0; i--) {
                    //while there are still indexes in splitword that equal userinput but have not been replaced in unblank
                    // while the [i] index of unBlank does does not equal the userInput, keep looping and check
                    //		while (this.unBlank[i] != this.userInput) {
                    // if index i of split word matches the user's input	
                        if (this.splitWord[i] === this.userInput) {
                    // splice unBlank and remove the letter at the [i] index and replace it with userinput
                    for (i = 0; i < this.splitWord.length; i++) {
                                this.unBlank.splice(this.unBlank[i], 1, this.userInput);
                            };
                    //join unBlank into a string            
                                this.unBlank = this.unBlank.join(" ");
                     // save it into wordBlank           
                        		this.wordBlank = this.unBlank;
                        		return this.wordBlank;
                            };

                   //     };
                        // joins unBlank and saves it back to the original wordBlank string
                        

                    };
                },
                        // replace element
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
                    // hangman.splitBlank();
                    // stores key pressed by user as the value of the userInput key inside the hangman object
                    document.onkeyup = function(event) {
                        hangman["userInput"] = event.key;
                        //     var checkLetter = function() {
                        //creates function that takes an array and a string as a parameter. the array is the container into which the string will
                        // be split and then manipulated. it can then be stored back into wordBlank
                        hangman.replaceBlank();
                        document.getElementById("game-text").innerHTML = hangman.wordBlank;

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