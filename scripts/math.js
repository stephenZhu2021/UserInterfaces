/**
 * Squares a number, and output to the console
 * @param {number} num Numebr to be squared
 * @returns Squared number value
 */
function squareNum(num){
	let squaredNumber = num * num;
	console.log("The result of squaring the number " + num + " is " + squaredNumber + ".");
	return squaredNumber;
}

/**
 * Divides number by 2, and output to the console
 * @param {number} num Number to be halved
 * @returns Halved number
 */
function halfNumber(num){
	let half = num / 2;
	console.log("Half of " + num + " is " + half + ".");
	return half;
}

/**
 * Find what percent the first number represents of the second number
 * @param {number} num1 Percentage of this number
 * @param {number} num2 Represented in this number
 * @returns Percentage of number
 */
function percentOf(num1, num2){
	let percent = ((num1 * 100) / num2);
	console.log(num1 + " is " + percent + "% of " + num2 + ".");
	return percent;
}

/**
 * Calculates the area of a circle
 * @param {number} num Radius of the circle 
 * @returns Area of the circle
 */
function areaOfCircle(num) {
	let area = ((num * num) * Math.PI); // or 3.1415
	console.log("The area for a circle with radius " + num + " is " + area + ".");
	return area;
}

/**
 * Combines previous function
 * @param {number} num Number used to start the calculations
 */
function allTheStuff(num){
	//	a. Take half of the number and store the result.
	let result = halfNumber(num);
	
	//	b. Square the result of (a) and store that result.
	result = squareNum(result);
	
	//	c. Calculate the area of a circle with the result of (b) as the radius.
	let area = areaOfCircle(result)

	//	d. Calculate what percentage that area (c) is of the squared result (b).
	percentOf(area, result);
}