let scoreWin = 0, scoreLose = 0, scoreTie = 0;
// declared outside the function to scores update

function playRPS(event){
	// if no event then no playing the game
	if (event === undefined)
		return;

	// 1. figure out what I picked
	let myPick = this.value;

	// 2. pick something for computer
	let compPick;
	switch ( Math.floor( Math.random() * 3 ) + 1 ){
		case 1: compPick = "rock"; break;
		case 2: compPick = "paper"; break; 
		default: compPick = "scissor";
	}

	/* ALTERNATIVE to switch */
	// let random = Math.floor( Math.random() * 3 ) + 1;
	// if (random == 1) compPick = "rock";
	// else if (random == 2) compPick = "paper";
	// else compPick = "scissor";

	// 3. show current matchcup
	document.getElementById("current").innerText = myPick + " vs. " + compPick;

	// 4. determine winner & update Score
	if (myPick == compPick){	// TIES
		document.querySelector("#scoreTie span").innerText = ++scoreTie;
	} else if ((myPick == "rock" && compPick == "scissor") ||
							(myPick == "paper" && compPick == "rock") ||
							(myPick == "scissor" && compPick == "paper" ) ) {
		// WINS
		document.querySelector("#scoreWin span").innerText = ++scoreWin;
	} else { // LOSE
		document.querySelector("#scoreLose span").innerText = ++scoreLose;
	}

}

/* Event Listeners */
let buttons = document.querySelectorAll("input");
for (let i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", playRPS);
}
// previous loop would be equivalent as adding individual listeners
// document.getElementById("btnRock").addEventListener("click", playRPS);
// document.getElementById("btnPaper").addEventListener("click", playRPS);
// document.getElementById("btnScissor").addEventListener("click", playRPS);