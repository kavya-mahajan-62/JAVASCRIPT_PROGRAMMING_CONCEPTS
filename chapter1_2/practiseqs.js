//Practise questins -----mixed concepts of conditionals and operators

let str = "app";
if (str[0] === "a" && str.length > 3) {
  console.log("good string");
} else {
  console.log("this is not a good string");
}
//2nd questions
let num = 12;
if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  //brackets dhyaan se close karni hai and left to right solve and bodmas kehta hai pehle bracket ---opening bracket ko close bhi karna hai
  console.log("safe");
} else {
  console.log("unsafe");
}
