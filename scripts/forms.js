let isFormValid = true; // keeps track of invalid form data



/**
 * Validate the given argument is a valid email address as per HTML5 Specification
 * @param {string} stringToCheck 
 * @returns {boolean} True return is parameter is valid email
 */
function validateEmail(stringToCheck){
	// As per HTML5 Specification
	const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	return emailRegExp.test(stringToCheck);

}

function validateForm(event){
	//prevent form from submitting
	event.preventDefault();

	// validate name - required
	if ( validateRequired("txtName") ){
		showError("txtName", "Name is required");
	} else {
		showSuccess("txtName");
	}

	// validate email - required + email

	// validate password - required + 6 to 12 characters

	// validate passwor confirm - required + matches password

	// validate city - required

	//validate checkbox - required

	// if all if valid then submit form
}

function validateRequired (elemID){
	return document.getElementById( elemID ).value == "";
}

function showError(elemID, message){
	isFormValid = false;

	// show error message in small element
	document.querySelector("#" + elemID + " ~ small").innerText = message;

	// TODO - add error class to small, and elemID
}

function showSuccess(elemID){
	// TO DO - remove error class to small, and elemID
	// TO DO - remove small innerText
}

/* event listener */
document.getElementById("formJS").addEventListener("submit", validateForm );
