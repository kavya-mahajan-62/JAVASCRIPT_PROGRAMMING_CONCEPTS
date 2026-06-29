//Else Statements
let age = 17;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

//example
let color = "blue";
if (color === "red") {
  console.log("stop");
} else if (color === "yellow") {
  console.log("wait");
} else if (color === "green") {
  console.log(go);
} else {
  console.log("this traffic light is broken");
}
// calculation of popcorn prices using if,else if, else
let size = "s";
if (size === "XL") {
  console.log("price is 250 rupees");
} else if (size === "l") {
  console.log("price is 200 rupees");
} else if (size === "M") {
  console.log("price is 100 rupees");
} else {
  console.log("price is 50 rupees"); // this will print because all the above conditions/statements failed
}
//NESTING IF ELSE
let marks = 99;
if (marks >= 33) {
  console.log("pass");
  if (marks >= 80) {
    console.log("grade-O");
  } else {
    console.log("grade-A");
  }
} else {
  console.log("better luck next time");
}
