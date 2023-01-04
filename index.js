let number = 30;
let number2 = 30;
let result;

if (number === 0 && number2 === 0) {
  result = NaN;
} else if (number === 0) {
  result = number2;
} else if (number2 === 0) {
  result = number;
} else if (number / number2 > 0) {
  result = number * number2;
} else {
  result = number / number2;
}

console.log(result);

if (number > 0 && number % 2 === 0 && number % 3 === 0 && number % 6 === 0) {
  console.log("win");
} else {
  console.log("lose");
}
