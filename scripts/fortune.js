/*
Turn the script into a function
The last parameter should be Number of Kids
Number of kids should have a default value of 0

Change the sentence structure depending on number of children.  
if NUMBER OF KIDS is 0, do not mention them
…and live in   G   with your dog   D .
if NUMBER OF KIDS is 1, kids is singular
…and live in   G with your 1 kid and your dog   D .
if NUMBER OF KIDS is greater then 1, kids is plural
…and live in   G with your   N   kids and your dog   D .
if NUMBER OF KIDS is less then 0, do not mention them
…and live in   G with your dog   D  .

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

	console.log( fortune );
}