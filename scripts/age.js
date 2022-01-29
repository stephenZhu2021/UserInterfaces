/*
Prompt users to provide you with a year of birth.
If they fail to provide a year ignore their request and do nothing else.
If they provide anything other then a year that is less then or equal the current year, alert them with an error message and Prompt them again
If their input pass validation, alert the user with their possible ages.
*/

function usersAge( ){
	 
	let yearBirth; // will contain users birth year
	let isDateOk = false; // used for do-while loop
	let currentDate = new Date(); // get current date object 
	let yearCurrent = currentDate.getFullYear(); // get current year
	
	do{
		// prompt the user
		let yearBirthAnswer = prompt("What year were you born?");

		// user pressed cancel
		if (yearBirthAnswer === null){
			return;
		}

		// get int value of the prompt returned string
		yearBirth = parseInt(yearBirthAnswer); // convert string to int

		/* validate errors
				1. year from prompt is greater then current year
				2. year from prompt is not empty string
				3. year from prompt is same as int value of year from prompt
		*/
		if ( yearBirth > yearCurrent || yearBirth == "" || yearBirthAnswer != yearBirth){	
			// errors = alert the user
			alert( "Please enter a valid year!");
		}else{
			// no errors, we can escape the loop
			isDateOk = true;
		}
	} while(!isDateOk);

	// calculate the possible years
	let age1 = yearCurrent - yearBirth;
	let age2 = age1 - 1;

	// alert user possible ages
	alert("You're either " + age1 + " or " + age2 + " years old.");
}