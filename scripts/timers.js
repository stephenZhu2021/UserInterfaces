/*
1. Write a function name bgTimer 
2. Every2.6 seconds output to the console the words right and left (alternating) 
3. Every 3.9 seconds alternate the words UP and DOWN (alternating)
4. After 15 seconds alert the user "I'm so dizzy" and stop all the timers
*/

let timerRL, timerUD, timerDizzy, timerDiy;
let countRL = 0, countUD = 0;

function bgTimer(){
	timerRL = setInterval(rightLeft, 2600);
	timerUD = setInterval(upDown, 3900);
	timerDizzy = setTimeout(dizzy, 15000);

	// create your own interval timer
	timerDiy = setTimeout(diyInterval, 2000, 0);
}

// function called from timerDiy
function diyInterval(count){
	if (count++ % 2)
		console.log("aaa");
	else
		console.log("bbb");
	
		timerSteph = setTimeout(diyInterval, 2000, count);
}

// function called from interval timerRL
function rightLeft(){
	if (countRL++ % 2)	
		console.log("Right");
	else
		console.log("Left");
}

// function calle from interval timerUD
function upDown(){
	if (countUD++ % 2)
		console.log("Up");
	else
		console.log("Down");
}

// function called from timerDizzy
function dizzy(){
	alert("I'm so dizzy");
	clearInterval(timerRL);	// stop the timerRL interval
	clearInterval(timerUD);	// stop the timerUD interval
	clearTimeout(timerDizzy);	// stop the timerDozzy timeout
	clearTimeout(timerDiy);	// stop the timerDiy timeout
}


/* WHATS MY NAME

Write a function whatsMyName() that will prompt the user for their name. 
If the user inputs their name, every second console.log their name -1 letter
Examples of console output: 
Prompt input Bob
Console will show: 
		Bob
		Bo
		B
Once there are no letters left, alert the user good bye and their name
		Good Bye Bob!

*/
let timerName, userName;

function whatsMyName(){
	userName = prompt("What is your name?");

	if (userName != null){
		 timerName = setTimeout(showName, 1000, userName);
	}
}

function showName(nameLeft){
	console.log(nameLeft);
	nameLeft = nameLeft.substring(0, nameLeft.length-1);

	if (nameLeft.length <= 0){
		alert("Good Bye " + userName);
	}else{
		timerName = setTimeout(showName, 1000, nameLeft);
	}

}


/* DOM TIMERS
Create a new timer that will change the background every 2 seconds and alternate between black and red.
Create a time that will alternate all the H1 text between black and orange every 2.5 seconds.
Make sure that your colors will never be black at the same time.

After 15 seconds, change the html of body to show the following code : 
	<h1>I'm so dizzy</h1>
*/

let timerBgColor, timerH1Text;
let colorH1 = "";

// Setup timers to manipulate the DOM
function domTimers(){
	timerBgColor = setInterval(changeBg, 2000);
	timerH1Text = setInterval(changeText, 2500);
	timerDizzy = setTimeout(changeDizzy, 15000);
}

// Change background color of body element
function changeBg(){
	let currentStyle = document.getElementsByTagName('body')[0].style;

	// let color = (currentStyle.background == "black") ?"red":"black";
	let color;
	if (currentStyle.background == "black" || colorH1 == "black")
		color = "red";
	else
		color = "black";
	currentStyle.background = color;
}

// Change the text color of all H1 elements
function changeText(){
	let allH1s = document.getElementsByTagName("h1");

	// let currentStyle = allH1s[0].style.background; // get style of first H1
	//	colorH1 = (colorH1 == "black") ? "orange" : "black";
	
	if (colorH1 == "black" || document.getElementsByTagName("body")[0].style.background == "black")
		colorH1 = "orange";
	else
		colorH1 = "black"
	for (let i = 0; i < allH1s.length; i++){
		allH1s[i].style.color = colorH1;
	}
}

// function to execute when dizzy DOM timer is done
function changeDizzy(){
	clearInterval(timerBgColor);
	clearInterval(timerH1Text);
	document.getElementsByTagName("body")[0].style.background = "white";
	document.getElementsByTagName("body")[0].innerHTML  = "<h1>I'm so dizzy</h1>";
}