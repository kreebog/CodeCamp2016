function getNow() {
	return new Date().getTime();
}

function logMessage(message){
	var now = new Date();
	var timeStamp = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
	
	console.log("descrablizer.js : " + timeStamp + " :: " + message);
}

// Clears out the contents of the given container
function clearContainer(containerName) {
	$("#" + containerName).empty();	
}

function drawLetters(containerName, letters) {

	var maxTileTwistAngle = 8;
	
	letters = letters.toLowerCase();
	
	// first clear any words or letters from the container
	clearContainer(containerName);
	
	// then draw a tile for each of the letters passed into the function 
	for (pos = 0; pos < letters.length; pos++) {

		try {
			if (letters[pos] == " ") {
				$("#" + containerName).append("<span class='spacer'></span>");
			} else {
				// create a new tile image from the current letter
				var tile = $("<image class='letterTile' src='" + letterTiles[letters[pos].toString()].file + "'>");

				// apply a little bit of random rotation for fun!
				tile.rotate(getRandomInteger(maxTileTwistAngle, true));
				
				// add the image to the given container 
				$("#" + containerName).append(tile);
			}
		} catch (err) {
			logMessage("Error in drawLetters() - You probably used a letter that doesn't have a tile image!");
		}
	}
}

// Generates a random integer between between 0 and the given maximum value
// If "allowNegative" is true, randomly flip the sign to negative 
function getRandomInteger(max, allowNegative) {
	// increase max by one to allow for zeros
	max = max + 1;
	var number = Math.floor((Math.random() * max));
	
	// if allowNegative was set to true, randomly decide if the return should be negative
	if (allowNegative && (Math.random() < 0.5) ) {
		number = -number;
	}
	
	return number;
}

// search the array of words for a matching word
function isValidWord(word) {
	var wordFound = false;
	word = word.toLowerCase();
	
	for (x = 0; x < wordlist.length; x++) {
		if (wordlist[x] == word) {
			logMessage("Found match for '"+ word + "' in position #" + x + " of " + wordlist.length + "!");
			wordFound = true;
		}
	}
	
	return wordFound;
}

function calcFactorial (wordLength) {
    if (wordLength === 0) { 
		return 1; 
	}
    else { 
    	return wordLength * calcFactorial( wordLength - 1 ); 
	}
}

function permutate(word) {
	var startTime = getNow();
	var permCount = 0;
	
	for (x = word.length; x > 0; x--) {
		permCount = permCount + calcFactorial(x);
	}
	
	logMessage(permCount + " possible letter combinations for the word '" + word + "'");
}


