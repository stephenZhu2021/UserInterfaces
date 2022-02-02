



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
