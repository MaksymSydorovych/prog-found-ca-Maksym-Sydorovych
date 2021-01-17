//question 1 
//Declare and initialise a variable with a string value.
//answer 1 
var string = "stringValue";
//question 2 
//Create an object variable called person and give it two properties (a key and a value) of your choice. 
//answer 2 
var person = {
	name: "Maksym",
	age: 31
};
//question 3
//Create a variable called outOfStock and assign it a boolean value.
//Create an if else statement that checks the value of outOfStock.
//If it is true, console log "Out of stock". Otherwise log "In stock". 
//answer 3
var outOfStock = true;
if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
};
//question 4
//Create an array of five numbers.
//Loop through the array and console log each value.
//answer 4
var numbersArray = [1, 2, 3, 4, 5];
for (i = 0; i <numbersArray.length; i++) {
	console.log(i);
};
//question 5
//Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
//answer 6
for (i = 15; i <= 25; i++) {
	console.log(i);
};
//question 6
//Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
//answer 6
for (i = 15; i <= 25; i++) {
	if (i = 20) {console.log(i)}
};
//question 7
//Create an array of two objects. Each object must have the same three properties (with different values):
//one property with a string value
//one property with a number value
//one property with a boolean value
//Loop through the array and console log the number value and the boolean value.
var fruit = [
 {
		name: "aplle",
		amount: 20,
		inStock: true,
	},
 {
		name: "pear",
		amount: 0,
		inStock: false,
	},
];
for (var i = 0; i < fruit.length; i++) {
	console.log(fruit[i].amount, fruit[i].inStock);
};
//question 8
//Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
//Inside the function, log the string "I don't like " together with the argument.
//Call the function and pass in a value of your choice.
//answer 8
function whatIdontLike (animal) {
	var animal = " dogs";
	console.log("I don't like" + animal);
};
whatIdontLike();
//question 9
//Create a function that accepts two arguments.
//Inside the function, subtract the second argument from the first and console log the result.
//answer 10
	function numbers (a, b) {
		var substract = b - a;
		console.log(substract);
	};
	numbers ();
//question 10
//Create an empty array.
//Create a function that accepts one argument.
//Inside the function, add the argument to the array.
//Call the function and pass in a value of any type.
var inStock = [];
function fruits (apples){
	inStock[0] = "pears";
	console.log(inStock)
};
fruits();
