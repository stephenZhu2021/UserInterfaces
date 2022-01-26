/*
We want to be able to calculate the possible age a user has.
1. Store the current year in a variable.
2. Store the users birth year in a variable.
3. Calculate and save their 2 possible ages based on the stored values.
4. Output to the console the users age
		"You're either   X   or   Y   years old."
*/

let yearCurrent = 2021;
let yearBirth = 2000;

let age1 = yearCurrent - yearBirth;
// let age2 = yearCurrent - yearBirth - 1;
let age2 = age1 - 1;

console.log("You're either " + age1 + " or " + age2 + " years old.");