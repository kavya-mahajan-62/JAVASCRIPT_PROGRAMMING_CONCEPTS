//EVERY VALUE IN JS ASSOCIATED WITH TRUE OR FALSE WITH REFERENCE TO BOOLEAN CONTEXT
if (true) {
  console.log("it has a true value");
} else {
  console.log("it has a false value");
}
//eg2
if (1) {
  console.log("it has a true value");
} else {
  console.log("it has a false value");
}
//eg3
if (false) {
  console.log("it has a true value");
} else {
  console.log("it has a false value");
}
//eg4
if (0) {
  console.log("it has a true value");
} else {
  console.log("it has a false value");
}
//eg5
if ("") {
  //null string has a false falue
  console.log("it has a true value");
} else {
  console.log("it has a false value");
}
//eg6
if ("kavya") {
  //non null string has a true values
  console.log("it has a true value");
} else {
  console.log("it has a false value");
}
//eg7
if (undefined) {
  console.log("it has a true value");
} else {
  console.log("it has a false value");
}
//eg8
if (null) {
  console.log("it has a true value");
} else {
  console.log("it has a false value");
}
//eg9
if (" ") {
  // this is a string with a space that means it is not an empty string
  console.log("it has a true value");
} else {
  console.log("it has a false value");
}
//eg10
let string = "";
if (string) {
  console.log("string is not empty");
} else {
  console.log("string is empty");
}
//eg 11
let str = "a";
if (str) {
  console.log("string is not empty");
} else {
  console.log("string is empty");
}
//eg 12--imp
let num = 0;
if (num) {
  console.log("num is not equal to zero");
} else {
  console.log("number is equal to zero");
}
