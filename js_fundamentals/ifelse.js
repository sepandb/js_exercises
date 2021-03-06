// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

var greaterNum = function (number1, number2) {
	if (number1 > number2) {
		return number1;
	} else {
		return number2;
	}
};

greaterNum(3,2)




// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

var helloWorld = function(language) {

	if (typeof(language) == "undefined") {
		language = "en"
	}

	if (language === "en"){
		return "Hello World"
	}
	else if (language === "de") {
		return "Hallo Welt"
	}
	else {
		return "hola mundo"
	}


}


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.


var assignGrade = function (score) {
	if (score<50) {
		return "F"
	}
	if (score < 60) {
		return "D"
	}
	if (score < 70) {
		return "C"
	}
	if (score < 80) {
		return "B"
	}
	return "A"
}

assignGrade(59)
assignGrade(23)
assignGrade(83)

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

var pluralizeThat = function(noun, number) {

	if (number == 1) {
		return number + " " + noun
	}

	else if (number>0) {
		return number + " " + noun + "s"
	}
	else {
		return  "not a valid number"
	}

}

pluralizeThat("cat", 3)
pluralizeThat("dog", 1)
pluralizeThat("boat", 44)





