// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


var newArr = ["basketball", "football", "volleyball"]

console.log("My 1st choice is " + newArr[0])

var choice = function(array) {
	for(count= 0; count <= array.length-1; count++){
		if (count == 0) {
			 "My 1st choice is " + array[count]

		}
		else if (count == 1) {
			 "My 2nd choice is " + array[count]
		}
		else {
			 "My 3rd choice is " + array[count]
		}
	}

}

choice(newArr)