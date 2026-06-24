// // Conditional statements are used to perform different actions based on different conditions
// // If statement is used to perform an action if a condition is true and if the condition is false then it will not perform any action for that condition
// console.log("before my if statement");
// let age = 23;
// if (age >= 18) {
//   console.log("you can vote"); //it will print because the condition is true because age is 23 which is greater than 18
//   console.log("you can drive");
//   let a = 5;
//   console.log("a * 5");
// }
// if (age < 18) {
//   console.log("you cannot vote"); //it will not print because the condition is false because age is 23 which is greater than 18 or if age is less than 18 then it will print "you cannot vote" but in this case age is 23 which is greater than 18 so it will not print "you cannot vote" but if i make ` age = 17; then it will print "you cannot vote" because the condition is true because age is 17 which is less than 18 and it will not print "you can vote" because the condition is false because age is 17 which is less than 18
// }
// if (age > 20) {
//   console.log("you are in your 20s"); //it will print because the condition is true because age is 23 which is greater than 20
// }

// console.log("after my if statement");

// let firstName = "Kavya";
// if (firstName == "Kavya") {
//   console.log(`welcome ${firstName}`); //it will print because the condition is true because firstName is "Kavya" which is equal to "Kavya"
// }
// //traffic light example
// let color = "red";
// if (color === "red") {
//   console.log("stop-light color is red");
// }
// if (color === "yellow") {
//   console.log("slow down-light color is yellow");
// }
// if (color === "green") {
//   console.log("go-light color is green");
// }

//else if statement is used to perform an action if a condition is true and if the condition is false then it will perform another action for that condition
let age = 14;
if (age >= 18) {
  console.log("you can vote");
} else if (age < 18) {
  console.log("you cannot vote");//it will print because the condition is true because age is 14 which is less than 18
} else if (age < 18) {
  console.log("you cannot vote2");
}
//if aur else if ko aise samjha jaa sakta hai ki agar pehla condition true hai to uske andar ka code execute hoga aur agar pehla condition false hai to dusra condition check hoga aur agar dusra condition true hai to uske andar ka code execute hoga aur agar dusra condition false hai to teesra condition check hoga aur agar teesra condition true hai to uske andar ka code execute hoga aur agar teesra condition false hai to koi bhi code execute nahi hoga.

