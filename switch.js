let color = "red";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("Please Wait");
    break;

  case "green":
    console.log("Please Go");
    break;

  default:
    console.log("Light is broken");
    break; // break is basically if condition true stop here--- 1) if condition gets true and breaks is not applied all the next switch gets ultimately on
}
console.log("after switch statements");

//PRACTISE QUESTION

let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wed");
    break;

  case 4:
    console.log("Thu");
    break;

  case 5:
    console.log("Fri");
    break;

  case 6:
    console.log("Sat");
    break;

  case 7:
    console.log("Sun");
    break;

  default:
    console.log("wrongday");
    break;
}
