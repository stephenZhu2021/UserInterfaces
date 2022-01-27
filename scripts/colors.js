/*
ARRAY PRACTICE

1. Create an array named colors that contains five different names of colors 
2. Colors should be red, blue, yellow, orange, purple 
3. Access the first color in the array and print it to the console
4. Access the third color in the array and print it to the console
5. Write one line of code that changes the value of the last color in the list to "green".
6. Create a new variable called fourthColor and set it equal to the fourth color in the list  and print it to the console.
7. Add the color pink to the end of the list.
8. Add the color white to the beginning of the list.
9. Print the length of the array to the console with console.log()
10. Remove the last color from the end of list and print it to the console.
11. Output every color's value and every color's index in this format: 
		3, purple or 0, blue etc.

*/

//	1. Create an array named colors that contains five different names of colors 
//	2. Colors should be red, blue, yellow, orange, purple 
let colors = ["red", "blue", "yellow", "orange", "purple "];

// 3. Access the first color in the array and print it to the console
console.log( colors[0] );

// 4. Access the third color in the array and print it to the console
console.log( colors[2] ); // third color has index 2

// 5. Write one line of code that changes the value of the last color in the list to "green".
colors[ colors.length-1 ] = "green";

// 6. Create a new variable called fourthColor and set it equal to the fourth color in the list  and print it to the console.
let forthColor = colors[3];
console.log( forthColor );

// 7. Add the color pink to the end of the list.
colors.push("pink");

// 8. Add the color white to the beginning of the list.
colors.unshift("white");

// 9. Print the length of the array to the console with console.log()
console.log( colors.length );

// 10. Remove the last color from the end of list and print it to the console.
let lastColor = colors.pop();
console.log( lastColor );

// 11. Output every color's value and every color's index in this format: 3, purple or 0, blue etc.
for (let i in colors){
	console.log( i + ", " + colors[i]);
}



/* EXPECTED CONSOLE OUTPUT
red
yellow
orange
7
pink
0, white
1, red
2, blue
3, yellow
4, orange
5, green
*/