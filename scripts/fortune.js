/*
- Create and HTML page with a form that will allow the user to fill in their information.
- Do NOT add an input for the number of children. Instead generate a random number between 0 and 7.
- Your page should also include a space for the completed fortune to be displayed.
- Complete the form and display the fortune to the user – Ensure that the new fortune appear above the old.
- Validate the information provided in the form. Should something be wrong, change the border color or your input to red.
*/

const MAX_NUM_KIDS = 7;
let formIsValid = true;

/**
 * Given some information, provide the user with their fortune.
 * @param {string} partnerName Name of the partner
 * @param {string} jobTitle Job title
 * @param {string} geoLocal Location
 * @param {string} dogName Name of the dog
 * @param {int} [numKids=0]	Number of kids 
 * @returns {string} the completed fortune
 */
function fortuneTeller(partnerName, jobTitle, geoLocal, dogName, numKids=0){
	// Variables now delcared and initialized in function call
	/*
	let numKids, partnerName, jobTitle, geoLocal, dogName;
	numKids = 4;
	partnerName = "Bob";
	jobTitle = "Student";
	geoLocal = "Canada";
	dogName = "Shadow"; 
	*/
	
	let fortune = "You will be a " + jobTitle + " who will one day marry " + partnerName + " and live in " + geoLocal + " with your ";

	 if (numKids == 1)
	 	fortune += "1 kid and your ";
	 else if (numKids > 1)
	 	fortune += numKids + " kids and your ";

	 fortune += "dog " + dogName + ".";

	// ALTERNATIVE 1 - Every option in the conditional statements, not very DRY
/*	if (numKids == 0)
		fortune += "dog " + dogName + ".";
	else if (numKids == 1)
		fortune += "1 kid and your dog " + dogName + ".";
	else if (numKids > 1)
		fortune += numKids + " kids and your dog " + dogName + ".";
	else 
		fortune += "dog " + dogName + ".";
*/
	// ALTERNATIVE 2 - Very compact, short, but possibly confusing
/*	if (numKids >= 1)
		fortune += numKids + " kid" + (numKids==1?"":"s") + " and your ";
*/
	//ALTERNATIVE 3 - If we wanted to use a switch, we would use compartive operators 
/*
	switch (true){
		case numKids == 0 : 
			fortune += "dog " + dogName + ".";
			break;
		case numKids == 1 : 
			fortune += "1 kid and your dog " + dogName + ".";
			break;
		case numKids > 1 :
			fortune += numKids + " kids and your dog " + dogName + ".";
			break;
		default: 
			fortune += "dog " + dogName + ".";
	}
*/

	return( fortune );
}

/**
 * Form validation function
 * @param {string} event Event that executed function 
 */
function formSubmit(event){
	event.preventDefault();	// prevent form submit
	
	formIsValid = true; // reset flag

	// validate partnerName
	validateNotEmpty("txtPartner");
	validateNotEmpty("txtJob");
	validateNotEmpty("txtLocation");
	validateNotEmpty("txtDog");

	// if form is valid process the information
	if (formIsValid){

		// get random number of kids
		numKids = randomInt(MAX_NUM_KIDS);

		// get new fortune
		let newFortune = fortuneTeller(
				document.getElementById("txtPartner").value,
				document.getElementById("txtJob").value,
				document.getElementById("txtLocation").value,
				document.getElementById("txtDog").value,
				numKids
				);

		// display the fortune
		let newP = document.createElement("p");
		newP.innerText = newFortune;
		document.getElementById("fortunes").prepend( newP );

		// OPTION 2 OF DISPLAYING THE FORTUNES
		// let fortuneOutput = document.getElementById("fortunes");
		// fortuneOutput.innerHTML = "<p>" + newFortune + "</p>" + fortuneOutput.innerHTML;
		}
}

/**
 * Validate is element value is empty. If is, flag the form and change border color. 
 * @param {string} elemID Element ID to be checked
 */
function validateNotEmpty( elemID ){
	let elem = document.getElementById( elemID );	// reusable variable

	if (elem.value == ""){
		formIsValid = false;	// form not valid anymore
		elem.style.borderColor = "red";	// change border color to red
	}else
		elem.style.borderColor = "";	// change border color back to default
}

/**
 * Generates a random number form 0 to MAX inclusive
 * 
 * @param {Number} max is the maximum number you can randomly generate.
 * @return {Number} returns randomly generated number.
 */
 function randomInt(max) {
	return Math.floor(Math.random() * (max+1));
}

// Event listener for form submission
document.getElementById("formFortune").addEventListener("submit", formSubmit);
