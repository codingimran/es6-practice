const number = 31;
let result;

// if (number >= 50) {
//   result = "Not to fifty!";
// } else {
//   result = "It could be worse";
// }

// number >= 50 ? (result = "Not to fifty!") : (result = "It could be worse");
// result = number >= 50 ? "Not to fifty!" : "It could be worse";

if (number === 0) {
  result = "You have Nothing";
} else if (number < 10) {
  result = "You have very little";
} else {
  result = "You have lot";
}

result =
  number === 0
    ? "You have nothing"
    : number < 10
    ? "You have very little"
    : number >= 20 && number < 30
    ? "You have more than twenty"
    : number >= 30
    ? "You have more than thirty"
    : number >= 40 && number <= 60
    ? "You have more than 40 and less than 60"
    : "You have lot more and more";

console.log(result);
