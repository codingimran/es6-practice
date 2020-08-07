// function doubleIt(num) {
//   return num * 2;
// }

// const doubleIt = function (num) {
//   return num * 2;
// };

const doubleIt = (num) => num * 2;
const doubleIt2 = (x, y = 0) => x + y;
const give5 = () => 5;

const myBigFunction = () => {
  this.addEventListener("click", () => {
    alert("hello Imran");
  });
};

myBigFunction();

const result = doubleIt(50);
console.log(result);
const rr = doubleIt2(44);
console.log(rr);
console.log(give5());
