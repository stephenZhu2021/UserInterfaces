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