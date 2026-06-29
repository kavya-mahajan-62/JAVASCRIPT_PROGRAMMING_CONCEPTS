//LOGICAL OPERATORS
//1)AND OPERATOR
let marks = 80;
if (marks >= 33 && marks >= 80) {
  console.log("pass");
  console.log("A+");
}
//2)OR OPERATOR
if (marks >= 33 || marks >= 80) {
  console.log("pass");
  console.log("A+");
}
//LOGICAL NOT OPERATOR
if (!(marks < 33)) {
  console.log("pass");
  console.log("A+");
}
//CONNECTING MULTIPLE LOGICAL OPERATOR
if ((marks >= 33 && marks <= 80) || !false) {
  //we will solve as per precedence --left to right---we solve logical operator left to right
  console.log("PASSING");
}
