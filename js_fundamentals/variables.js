// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var jobTitle = 'engineer';
var partner = 'your wife';
var locale = 'toronto';
var children = 25;

"You will be an " + jobTitle + " in " + locale + ", and married to " + partner + " with " + children + " kids.";


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var current = 2014;
var yob = 1989;
var age = current - yob
"you are " + (age-1) + " or " + age

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how mucsh a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age = 24
var maxAge = 75
var perDay = 2
var totalSnacks = (maxAge - age)*365*perDay

"You will need " + totalSnacks + " to last you until the ripe old age of " + maxAge

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 5
"The circumference of the circle is " + (2*radius*Math.PI)
"The area of the circle is " + (Math.PI*radius*radius)

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 30
celsius + "°C is " + (celsius*9/5 + 32) + "°F"

var farenheit = 86
farenheit + "°F is " + ((farenheit-32)*5/9) + "°C"



