//Level 2
//question 1
//Using the loop from question 5 above, only log the counter variable if it is an even number.
//answer 1
for (i = 15; i <= 25; i++) {
	if (i % 2 == 0){
	console.log(i);}
};
//question 2
//Create a function that logs the sentence "I am a function".
//Assign this function to a variable called innerFunction.
//Create another function called outerFunction that accepts one argument.
//Inside outerFunction, call the argument like you would a function - with parenthesis ().
//Call outerFunction and pass in the innerFunction variable.
//answer 2
function hello () {
	console.log("I am function");
};
var innerFunction = hello;
function outerFunction (a) {
	console.log(a);
};
outerFunction(hello);
