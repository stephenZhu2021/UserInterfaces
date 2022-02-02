
// elem = document.getElementById("Home");
// elem = document.getElementsByTagName("h1");
// elem = document.getElementsByClassName("txtRed");
// elem = document.querySelector("li.txtRed");
// elem = document.querySelectorAll("li.txtRed");

let elem;
elem = document.querySelectorAll(".txtRed");
for( let i = 0; i< elem.length; i++){
	elem[i].style.color = "red";
}

document.querySelector(".txtRed").style.backgroundColor = "blue";

/* CREATE DOM NODES */
let newElement, newText;

newElement = document.createElement("a");
newElement.href = "http://www.google.ca";
newElement.target = "_blank";

newText = document.createTextNode("Click me!!!");

newElement.appendChild( newText );

document.getElementsByTagName("body")[0].appendChild( newElement );

// ----


for (let i = 0; i <=2; i++ ){
	newElement = document.createElement("li"); 

// newText = document.createTextNode("Blueberries " + i);
// newElement.appendChild( newText );
	newElement.innerText = "Blueberries " + i;

 document.querySelector("ul").appendChild(newElement);
 //insertBefore
}