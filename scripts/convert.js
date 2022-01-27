/*
	PART 1
		1. Store a weight value in pounds
		2. Save the converted kilogram weight in a variable
			KG = LBS / 2.2046
		3. Output to the console.
			X   lbs is  Y   kg.


	PART 2
		1. Store a weight value in kilograms
		2. Save the converted pounds weight in a variable
			LBS = KG / 0.454
		3. Output to the console.
			X   kg is  Y   lbs.


	PART 3
		Create functions for the 4 different calculation we have in our file.
		The functions will all take in a value X that is a number and convert it.
		Use the following function names
			convertCel2Far(x)
			convertFar2Cel(x)
			convertLbs2Kg(x)
			convertKg2Lbs(x)
*/

/**
 * Convert celsius into fahrenheit, and output the console
 * @param {number} tempCel Temperature in celsius
 */
function convertCel2Far( tempCel ){
	// tempCel = 24;
	let tempFahr = ( ( tempCel * 9 ) / 5 ) + 32;

	console.log( tempCel + "C is " + tempFahr + "F.");
}

/**
 * Convert fahrenheit into celsius, and output the console
 * @param {number} tempFahr Temperature in fahrenheit
 */
function convertFar2Cel( tempFahr ){
	// tempFahr = 77;
	let tempCel = ( ( tempFahr - 32 ) * 5 ) / 9 ;

	console.log( tempFahr + "F is " + tempCel + "C.");
}

/**
 * Convert pounds into kilograms, and output the console
 * @param {number} weightLbs Weight in pounds
 */
function convertLbs2Kg( weightLbs ){
	let weightKg = weightLbs / 2.2046;

	console.log( weightLbs + " lbs is " + weightKg + "kg.");
}

/**
 * Convert kilograms into pounds, and output the console
 * @param {number} weightKg Weight in kilograms
 */
function convertKg2Lbs( weightKg ){
	let weightLbs = weightKg / 0.454;

	console.log( weightKg + "kg is " + weightLbs + "lbs.");
}