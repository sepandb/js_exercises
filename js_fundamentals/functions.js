// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(children, partner, locale, title) {
	return "You will be a " + title + " in " + locale + ", and married to " + partner + " with " + children + " kids ";
}

tellFortune(3, "sepand", "toronto", "engineer");
tellFortune(12, "a clown", "france", "bearded lady")
tellFortune(44, "lots of women because that's what NBA players do", "the US and A", "NBA player")


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(by, cy){
	var	age = cy - by
	return "You are either " + (age-1) + " or " + (age)
}

calculateAge(1985, 2014)
calculateAge(1982, 2014)
calculateAge(1989, 2014)

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, apd){
	var maxAge = 75
	return "You will need " + ((maxAge - age)*apd*365) + " to last you until the ripe old age of " + maxAge
}

calculateSupply(18, 5)
calculateSupply(25, 1)
calculateSupply(38,9)



// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius){
	return "The circumference is " + (2*radius*Math.PI);
}

function calcArea(radius){
	return "The area is " + (Math.PI*radius*radius);
}

console.log(calcCircumference(5));
console.log(calcArea(5));




// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFarenheit(celsius){
	return celsius + "°C is " + ((celsius*9/5)+32) + "°F"
}

function farenheitToCelsius(farenheit){
	return farenheit + "°F is " +  ((farenheit - 32)*5/9) + "°C"
}

celsiusToFarenheit(0)

console.log(celsiusToFarenheit(24))
console.log(farenheitToCelsius(68))

