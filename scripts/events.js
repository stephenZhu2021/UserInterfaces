/* function used by html events */
function sayHello(){
	console.log("Hello You");
}
function sayBye( person ){
	console.log("Bye " + person);
}
function changeBG(){
	document.getElementById("intro").style.backgroundColor="blue";
}
function changeBGWhite(){
	document.getElementById("intro").style.backgroundColor="white";
}

// change the image of mainImage - no event parameter, because we are not using it. no error if omitted
function changeImage(){

	document.getElementById("mainImage").src = "https://picsum.photos/200/300?random="+ Math.random();
	document.getElementById("mainImage").alt = "Random Image";

}

// change the image if the key "s" has been entered in the input. event parameter required to know what key was pressed
function inputChanged(event){
	
	if ( event.key == "s" ){
		changeImage();
	}
}

// Stopping the event from doing what it's programmed to do
function stopDefault(event){
	event.preventDefault();
}

// JS event listener
document.getElementById("mainImage").addEventListener("click", changeImage);
document.getElementById("mainImage").addEventListener("mouseover", changeBG);
document.getElementById("mainImage").addEventListener("mouseout", changeBGWhite);

document.getElementById("txtName").addEventListener("keyup", inputChanged);

document.getElementById("searchEngine").addEventListener("click", stopDefault);
document.getElementById("chkDefault").addEventListener("click", stopDefault);
