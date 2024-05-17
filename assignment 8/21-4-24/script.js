let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let evenNumber = numbers.filter((num) => num % 2 === 0);

console.log(evenNumber);

let str = prompt("enter a string");
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);

let num = parseInt(prompt("enter a number"));
let isPrime = "the num you enter is prime";
if (num <= 1) {
isPrime = "the num you enter is not prime";
} else {
for (let i = 2; i < num; i++) {
if (num % i === 0) {
isPrime = "the num you enter is not prime";
break;
}
}
}
console.log(isPrime);

var message = [24, 53, 78, 91, 12];
var highest = 0;

for (let i = 0; i < message.length; i++) {
if (message[i] > highest) {
highest = message[i];
}
}
console.log("the largest number is  highest");

var input = prompt("enter any name");
var newName = ""
var match = "no"
for (let i = input.length - 1; i >= 0; i--) {
 newName += input[i];
if (newName === input) {
    match = "yes"
    alert(`the word ${input} you enter is pallendrom word`)
    break
}
}if(match === "no"){
        alert(`the word ${input} you enter is not pallendrom word`);

}
var vowel  = prompt("enter any word for  check vowels letter ")
for (let i = 0; i < vowel.length; i++) {
    if (vowel[i] === "a" || vowel[i] === "e" || vowel[i] === "i" || vowel[i] === "o" || vowel[i] === "u") {
        console.log(vowel[i] + " is vowel")
    }else{
        console.log(vowel[i] + " is consonant")
    }

}
var factorial = +prompt("enter any number for finding factorial " )
var factSum = 1
for (let i = 1; i <=factorial; i++) {
   factSum = factSum * i
}document.write(`the factorial of ${factorial} is ${factSum}`);
var num1 = +prompt("enter any num")
var total = num1 + num1
console.log(total );
var reverseInteger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = reverseInteger.length-1; i >= 0; i--) {
  document.write(`${reverseInteger[i]},`);
}
// var pattern = 5
// for (let i = 1; i <= pattern; i++) {
//     document.write(`<br>`);
//   for (let j = 1; j <= i; j++) {
//     document.write(`*`);
//   }
    
// }