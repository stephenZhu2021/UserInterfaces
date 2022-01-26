/*
Using your previously created file we are going to implement functions to make our code reusables
Create a function that will take a user's birth year as the only parameter.
This function should validate that the provided birth year is a number 

*/

function usersAge( yearBirth ){
	
	if ( typeof(yearBirth) != "number"){
		console.log( "No number provided!");
	} else {
		let yearCurrent = 2021;
		//let yearBirth = 2000;

		let age1 = yearCurrent - yearBirth;
		// let age2 = yearCurrent - yearBirth - 1;
		let age2 = age1 - 1;

		console.log("You're either " + age1 + " or " + age2 + " years old.");
	}
}