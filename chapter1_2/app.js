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
let output = "the total price is :" + (pencilPrice + eraserPrice) + "Rupees."; //+ operator is used to concatenate the string and the numbers but we have to use parenthesis to group the expression otherwise it will give us the wrong output because of operator precedence and concatenation means joining the string and the numbers together to form a single string.
console.log(output); //we cannot use comma in output string because it will not give us the correct output  parenthesis are used to group the expression and give us the correct output otherwise it will give us the wrong output because of operator precedence
//let us create output string using template literals
console.log(`the total price is : ${pencilPrice + eraserPrice} Rupees. `); //difference between comma and + operator is that comma operator will print the values with a space in between them and + operator will concatenate the values without any space in between them. Template literals are used to create output string in a more readable and easier way. We can use backticks `` to create template literals and we can use ${} to insert the values of variables or expressions inside the template literals.
//OPERATORS IN JAVASCRIPT
//Arithmetic Operators
let x = 10;
let y = 20;
console.log(x + y); //addition operator
console.log(x - y); //subtraction operator
console.log(x / y); //division operator it simply means how many times the second number can be divided into the first number eg 10/20 = 0.5 because 20 can be divided into 10 only 0.5 times
console.log(x * y); //multiplication operator
console.log(x % y); //modulo operator simply it means remainder operator it gives us the remainder of the division of two numbers
console.log(x ** y); //exponentiation operator
a = 10;
b = 5;
console.log(a++); //post increment operator it means first it will print the value of a and then it will increment the value of a by 1 ---10
console.log(++a); //pre increment operator it means first it will increment the value of a by 1 and then it will print the value of a ---12
//pre and post increment operator are used to increment the value of a variable by 1 but the difference is that pre increment operator will increment the value of a variable before it is used in the expression and post increment operator will increment the value of a variable after it is used in the expression.
//decrement operator is used to decrement the value of a variable by 1
console.log(b--); //post decrement operator it means first it will print the value of b and then it will decrement the value of b by 1 ---5
console.log(--b); //pre decrement operator it means first it will decrement the value of b by 1 and then it will print the value of b ---3
// tricky part for students to understand pre and post increment and decrement operator is that they are used in expressions and they have different precedence and associativity. Pre increment and decrement operator have higher precedence than post increment and decrement operator. Pre increment and decrement operator have right to left associativity and post increment and decrement operator have left to right associativity. this can be understood by the following example such as let a = 10; let b = 5; console.log(a++ + ++b); //it will print 16 because first it will print the value of a which is 10 and then it will increment the value of a by 1 and then it will increment the value of b by 1 and then it will add the values of a and b which is 11 + 6 = 17 but because of operator precedence and associativity it will print 16 because first it will print the value of a which is 10 and then it will increment the value of a by 1 and then it will increment the value of b by 1 and then it will add the values of a and b which is 11 + 6 = 17 but because of operator precedence and associativity it will print 16 because first it will print the value of a which is 10 and then it will increment the value of a by 1 and then it will increment the value of b by 1 and then it will add the values of a and b which is 11 + 6 = 17 but because of operator precedence and associativity it will print 16 because first it will print the value of a which is 10 and then it will increment the value of a by 1 and then it will increment the value of b by 1 and then it will add the values of a and b which is 11 + 6 = 17 but because of operator precedence and associativity it will print 16 because first it will print the value of a which is 10 and then it will increment the value of a by 1 and then it will increment the value of b by 1 and then it will add the values of a and b which is 11 + 6 = 17 but because of operator precedence and associativity it will print

//Assignment Operators
let c = 10;
c += 5; //it means c = c + 5; it will add 5 to the value of c and assign the new value to c ans is 15 because 10 + 5 = 15
console.log(c);
c -= 5; //it means c = c - 5; it will subtract 5 from the value of c and assign the new value to c ans is 10 because 15 - 5 = 10
console.log(c);
c *= 5; //it means c = c * 5; it will multiply the value of c by 5 and assign the new value to c ans is 50 because 10 * 5 = 50
console.log(c);
c /= 5; //it means c = c / 5; it will divide the value of c by 5 and assign the new value to c ans is 10 because 50 / 5 = 10
console.log(c);
c %= 5; //it means c = c % 5; it will give the remainder of the division of c by 5 and assign the new value to c ans is 0 because 10/5 = 2 and the remainder is 0
console.log(c);
c **= 5; //it means c = c ** 5; it will raise the value of c to the power of 5 and assign the new value to c---ans because 0 ** 5 = 0
console.log(c); //it means c = c ** 5; it will raise the value of c to the power of 5 and assign the new value to c---ans because 0 ** 5 = 0
