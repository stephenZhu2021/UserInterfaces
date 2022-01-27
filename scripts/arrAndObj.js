
let teacher = {
	hometown: "Montreal",
	eyes: "Brown",
	likes: ['ninja cats', 'code'],
	birthday: {month: 11, day: 27},
	"home address" : "123 Main",
	eats: eatsFood // NO parentheses ( ) so that we don't call the function right away
};
let dog = {
	name: 'Shadow',
	breed: 'Jack Russel',
	counter: 0,
	bark: function (){ 
		console.log("Woof!"); 
		this.counter++;
	},
	eats: eatsFood // NO parentheses ( ) so that we don't call the function right away
};

function eatsFood(){
	let phrase = "Yummy";
	console.log( phrase );
	if ("counter" in this){
		this.counter++; // this is whoever invoked the function
	} else {
		this.counter = 1;
	}
}

function Planet(name, diameter, distance, color) {
	this.name = name;
	this.diameter = diameter;
	this.distanceFromSun = distance;
	this.color = col
let teacher = {
	hometown: "Montreal",
	eyes: "Brown",
	likes: ['ninja cats', 'code'],
	birthday: {month: 11, day: 27},
	"home address" : "123 Main",
	eats: eatsFood // NO parentheses ( ) so that we don't call the function right away
};
let dog = {
	name: 'Shadow',
	breed: 'Jack Russel',
	counter: 0,
	bark: function (){ 
		console.log("Woof!"); 
		this.counter++;
	},
	eats: eatsFood // NO parentheses ( ) so that we don't call the function right away
};

function eatsFood(){
	let phrase = "Yummy";
	console.log( phrase );
	if ("counter" in this){
		this.counter++; // this is whoever invoked the function
	} else {
		this.counter = 1;
	}
}

function Planet(name, diameter, distance, color) {
	this.name = name;
	this.diameter = diameter;
	this.distanceFromSun = distance;
	this.color = color;
	this.showDetails = function( sayHi = false) {
		let result =  this.name + " has a diameter of " 	+ this.diameter;
		if ( sayHi ) result += " Hello!";
		return result;
	}
}

let mercury = new Planet( "Mercury", "123 Miles", "234 Miles", "blue" );
let venus = new Planet ("Venus", "76 Miles", "354 Miles");

function Sport(name, players = 6){
	this.sportName = name;
	this.playerCount = players;
}

let hockey = new Sport("hockey");
let soccer = new Sport("soccer", 11);
or;
	this.showDetails = function( sayHi = false) {
		let result =  this.name + " has a diameter of " 	+ this.diameter;
		if ( sayHi ) result += " Hello!";
		return result;
	}
}

let mercury = new Planet( "Mercury", "123 Miles", "234 Miles", "blue" );
let venus = new Planet ("Venus", "76 Miles", "354 Miles");

function Sport(name, players = 6){
	this.sportName = name;
	this.playerCount = players;
}

let hockey = new Sport("hockey");
let soccer = new Sport("soccer", 11);
