// var rightNow = new Date();
// console.log(rightNow);

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1;

// console.log(`Today is ${date}/${month}/${year}`);

// var dayNames = ["sun", "mon", "tue", "wed", "thu ", "fri", "sat"];
// for (var i = 2024; i <= 2050; i++) {
//   var date = new Date(i, 0, 1);

//   if (date.getDay() == 0) {
//     console.log(dayNames[date.getDay()], i);
//   }
// }

// for (var i = 9; i <= 14; i++) {
//   console.log(i);
// }
// for (var i = 1; i <= 30; i++) {
//   var date = new Date(2024, 7, i);

//   if (i == 14) {
//     console.log();
//   }
// }

// //task04//

// let randomNum = 7;
// let userGuess = prompt("guess a number between 1 and 10");
// if (parseInt(userGuess) === randomNum) {
//   console.log("good work!");
// } else {
//   console.log("not matched");
//}

//task05//
var today = new Date();
var august14th = new Date(2024, 7, 14);
var total = august14th - today;
var result = total / (1000 * 60 * 60 * 24);
console.log(result);
// console.log(today.getTime());
// console.log(august14th.getTime());
// console.log(today.getTime() - august14th.getTime());
// console.log(Math.abs(today.getTime() - august14th.getTime()));

//task06//

let orginalString = "hello world";
let pos = 6;
console.log(orginalString.slice(0, pos));
console.log(orginalString.slice(pos + 1));

//task07//

var number = prompt("enter a positive  number");
if (number % 3 === 0 && number % 7 === 0) {
  alert("true");
} else if (number % 3 === 0 || number % 7 === 0) {
  alert("true");
} else alert("false");

//task08//

let str = prompt("enter a string");
if (str.toLowerCase().startsWith("java")) {
  alert("the string with java");
}

//task09//

let num1 = parseInt(prompt("enter first number"));

if (num1 >= 50 && num1 <= 99) {
  alert("true");
} else {
  alert("false");
}
