/*Practice Questions
Qsl . Create a number variable num with some value.
Now, print "good" if the number is divisible by 10 and print "bad" if it is not.
Qs2. Take the user's name & age as input using prompts.
Then return back the following statement to the user as an alert (by substituting their name & age) .
name is age years old. 
[Use template Literals to print this sentence]
Qs3. Write a switch statement to print the months in a quarter.
Months in Quarter 1 : January, February, March
Months in Quarter 2 : April, May, June
Months in Quarter 3 : July, August, September
Months in Quarter 4: October, November, December
[Use the number as the case value in switch]
Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
For a given string print if it is golden or not.
Qs5. Write a program to find the largest of 3 numbers.

Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
Eg : 32 and 47852 have the same last digit i.e. 2


*/
//Q1
let num = 30;
if (num % 10 === 0) {
  console.log("good");
} else {
  console.log("bad");
}

//Q2
let name = prompt("ENTER YOUR NAME");
let age = prompt("ENTER YOUR AGE");
alert(`${name} is ${age} years old`);

//Q3
let quarter = 5;
switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;

  case 3:
    console.log("July, August, September");
    break;

  case 4:
    console.log("October, November, December");
    break;

  default:
    console.log("not a quarter");
}

//Q4   LOGICAL OPERATOR WAALA QUESTION
let str = "apples";
if ((str[0] === "a" || str[0] === "A") && str.length > 5) {
  console.log("golden string");
} else {
  console.log("not a golden string");
}

//
/*Start

Take A, B, C

        A > B ?
       /      \
     Yes      No
      |         |
   A > C ?    B > C ?
   /     \    /      \
Yes      No Yes      No
 |        |   |        |
 A        C   B        C

End  */
let a = 5;
let b = 18;
let c = 13;
if (a > b) {
  if (a > c) {// yeh line jaise hi falso ho gyi matlab is IF ke andar waala pura block skip hogya
    console.log("a is the largest");
  } else {
    console.log("c is the largest");
  }
} else {
  if (b > c) {
    console.log("b is the largest");
  } else {
    console.log("c is the largest");
  }
}
//   another approach to solve this question  using if else with logical operators
/*  
let a = 10;
let b = 20;
let c = 15;

if (a > b && a > c) {
    console.log("A is Largest");
}
else if (b > a && b > c) {
    console.log("B is Largest");
}
else {
    console.log("C is Largest");  
*/