// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
var minimum = function (num1, num2) {
	console.log(num1 < num2 ? num1 : num2);
};
// 2. Create a new function called minimum3() to find the smallest of three numbers
var minimum3 = function (num1, num2, num3) {
	var smallest = num1 < num2 ? num1 : num2;
	smallest = smallest < num3 ? smallest : num3;
	console.log(smallest);
};
minimum3(1, 2, 3);

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum(array) {
	var output = 0;
	for (var i = 0; i < array.length; i++) {
		output += array[i];
	}
	return output;

}
sum([1, 2, 3, 4]);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply (array) {
	var output = 1;
	for (var i = 0; i < array.length; i++) {
		output *= array[i];
	}
	return output;

}
multiply([1, 2, 3, 4]);

// 5. Write a function called filterSixPlus() that takes the following array and returns words
//    that are six characters or longer.
      var words = ["window", "table", "barstool", "glass", "charger", "outlet"];

function filterSixPlus (array) {
	var output = '';
	for (var i = 0; i < words.length; i++) {
		if (words[i].length >= 6) {
			output += words[i] + '\n';
		}  
	} 
	return output;
}
filterSixPlus(words);

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
function toFahrenheit () {
	var celsius = prompt("What's your favorite temperature in Celsius?");
	var fahrenheit = celsius + 32;
	console.log(fahrenheit);
}
toFahrenheit(100);


// 7. Adding to the code in #2, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.
function tempEvangelist () {
	var temp = parseInt(prompt("What's your favorite temperature?"));
	var conversion = prompt("How should I convert the temperature? Enter either 'F to C' or 'C to F'.");
	var newTemp = temp;
	if (conversion != 'F to C' && conversion != 'C to F') {
		conversion = prompt("Sorry, you can enter only 'F to C' or 'C to F' for this to work. How should I convert the temperature? 'F to C' or 'C to F'?");
	} else {
		conversion == 'F to C' ? newTemp -= 32 : newTemp += 32;
	}
	console.log(newTemp);
}
tempEvangelist();

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
function countBs (string) {
	var numOfBs = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === 'B') {
			numOfBs++;
		}
	}
	// var numOfBs = (string.match(/B/g) || []).length;
	console.log("There are " + numOfBs + " B's");
}
countBs('Baseball Beats');

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
function countChars (string, char) {
	var numOfChars = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === char) {
			numOfChars++;
		}
	}
	console.log("There are " + numOfChars + " " + char + "'s");
}
countChars('Baseball Beats', 'e');

// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.
      var string = "Soon you will master functions!";
 function ohZero (string) {
 	var newString = string.replace(/o/g, '0');
 	console.log(newString);
 }
 ohZero(string);

// 11. Write a function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"
function pigLatinize(sentence) {
	var target = sentence.substr(0, 1);
	
	for (var i = 0; i < sentence.length; i++) {
		if (sentence.charAt(i) === ' ')
		
	}

	var newSentence = '';
		sentence.substr(1) + sentence.substr(0,1) + 'ay';
}


// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
function ninetyNineBottles() {
	var bottles = 99;
	while (bottles > 0 ) {
		document.write(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer, take 1 down, pass it around ... " + (bottles - 1) + " bottles of beer on the wall" + "<br>");
		bottles--;
	}
}
ninetyNineBottles();



// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.
function guessingGame() {
	var randomNum = Math.floor(Math.random() * 100);
	var guess = parseInt(prompt("Thinking of a number. Can you guess what it is?"));
	if (guess == randomNum) {
		alert("You got it! The number was " + randomNum);
	} else {
		while (guess > randomNum) {
			guess = parseInt(prompt("Too high, try again."));
		}
		while (guess < randomNum) {
			guess = parseInt(prompt("Too low, try again."));
		}
	}
}
guessingGame();

// 14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
