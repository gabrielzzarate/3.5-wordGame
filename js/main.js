
//global variables//

var lives = 5; 
var guess;
var correctguess = 0;
var wrongguess = 0;
var splitArray;
var randomWordArray = [];
var newArray = '';
var letterClicked;
var match;


var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

//elements

var livesDisplay = document.getElementById("lives");
var word = document.getElementById("word");
var buttonsContainer = document.getElementById('buttons');
var buttonsHolder = document.getElementsByClassName('buttonsHolder')




//generates a random word the the commonWords array
var randomWord = commonWords[Math.floor(Math.random() * commonWords.length)];

console.log(randomWord);




function underscorePlaceholder(randomWord) {
	var wordcontainer = document.createElement('ul');
	
	
	for (var i = 0; i < randomWord.length; i++) {
		wordcontainer.id = 'word-container';

		wordplaceholder = document.createElement('li');

		wordplaceholder.setAttribute('id', 'letter- ' + i, 'class', 'underscore');
		wordcontainer.setAttribute('class', 'list-inline'); // BS class styling
		randomWordArray.push(randomWord[i]);
		newArray = randomWordArray.join('');
		console.log(newArray);
		
		wordplaceholder.innerHTML = '_';

		word.appendChild(wordcontainer);
		wordcontainer.appendChild(wordplaceholder);
		
	}


	
}
underscorePlaceholder(randomWord);





//generate alphabet buttons

function createAlphabetButtons() {
	var buttonsContainer = document.getElementById('buttons');
    var buttonsHolder = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      buttonsHolder.id = 'buttonsHolder';
      buttons = document.createElement('li');
      
      buttons.innerHTML = alphabet[i];
      buttons.setAttribute('class',  'btn');
      
      buttonsContainer.appendChild(buttonsHolder);
      buttonsHolder.appendChild(buttons);


    }
  }

  createAlphabetButtons();

var buttons = document.getElementsByClassName('btn');
console.log(buttons);

// loops through button class adds click listener
for (var i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', buttonEventHandler);

}



// var splitArray = newArray.split('');
// if (splitArray.indexOf(letterClicked) == -1) {
//   		lives--;
//   		console.log(lives);

//   	}


function buttonEventHandler() {
  	letterClicked = this.innerHTML;
  	

	for (var i =0; i < randomWordArray.length; i++) {

  		if (letterClicked == randomWordArray[i]) {
  			match = document.getElementById('letter- ' + i);
  			match.innerHTML = letterClicked;
  			correctguess++;
  			document.getElementById('sound3').play();
  			
		}  


 		//if (randomWordArray.length == correctguess) {

  			//livesDisplay.innerHTML = 'YOU WIN!';
  		//}
  		
  	}

 	if (randomWordArray.indexOf(letterClicked) == -1) {
  		lives--;
  		document.getElementById('sound4').play();
  		
  	}
  	


  		
  		
  		
displayLives();
}
  


function displayLives() {

livesDisplay.setAttribute('class', 'livesDisplay');
livesDisplay.innerHTML = 'You have ' + lives + ' lives';


if (lives == 0) {
			livesDisplay.innerHTML = 'GAME OVER: the word was ' + randomWordArray;
			document.getElementById('sound2').play();
	}
if (lives == 1) {
  	document.getElementById('sound5').play();

  		}
if (randomWordArray.length == correctguess) {

  			livesDisplay.innerHTML = 'YOU WIN!';
  			document.getElementById('sound7').play();
  		}

}

displayLives();







    

