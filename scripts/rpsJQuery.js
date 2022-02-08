let scoreWin = 0, scoreLose = 0, scoreTie = 0;
// declared outside the function to scores update

function playRPS(event){
	// if no event then no playing the game
	if (event === undefined)
		return;

	// 1. figure out what I picked
		let myPick = $(this).val();			
		// let myPick = this.value;

	// 2. pick something for computer
	let compPick;
	switch ( Math.floor( Math.random() * 3 ) + 1 ){
		case 1: compPick = "rock"; break;
		case 2: compPick = "paper"; break; 
		default: compPick = "scissor";
	}
	
	// 3. show current matchcup
		$("#current").text( myPick + " vs. " + compPick );
		// document.getElementById("current").innerText = myPick + " vs. " + compPick;

	// 4. determine winner & update Score
	if (myPick == compPick){	// TIES
		$("#scoreTie span").text ( ++scoreTie );
		// document.querySelector("#scoreTie span").innerText = ++scoreTie;
	} else if ((myPick == "rock" && compPick == "scissor") ||
							(myPick == "paper" && compPick == "rock") ||
							(myPick == "scissor" && compPick == "paper" ) ) {
		// WINS
		$("#scoreWin span").text ( ++scoreWin );
		//document.querySelector("#scoreWin span").innerText = ++scoreWin;
	} else { // LOSE
		$("#scoreLose span").text ( ++scoreLose );
		//document.querySelector("#scoreLose span").innerText = ++scoreLose;
	}

}

/* Event Listeners */
$("input").on("click", playRPS);

// PURE JS
// let buttons = document.querySelectorAll("input");
// for (let i = 0; i < buttons.length; i++){
// 	buttons[i].addEventListener("click", playRPS);
// }