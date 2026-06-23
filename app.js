// UNDERSTANDING THE BASICS OF JAVASCRIPT
// console.log is used to print the output on the console
console.log("Hello World!");
console.log("Apna college");
let a = 10;
let b = 20;
console.log(a + b);
console.log("sum is :", a + b);
//this is a comment
let pencilPrice = 10;
let eraserPrice = 20;
//Template Literals
console.log("the total price is :", pencilPrice + eraserPrice, "Rupees.");

//let us create output string
let output = "the total price is :" + (pencilPrice + eraserPrice) + "Rupees.";
console.log(output); //we cannot use comma in output string because it will not give us the correct output  parenthesis are used to group the expression and give us the correct output otherwise it will give us the wrong output because of operator precedence
