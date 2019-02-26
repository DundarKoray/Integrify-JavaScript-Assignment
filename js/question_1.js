//1a

var firstName = "Koray";
var lastName = "Dündar";
var marialStatus = "Married";
var country = "Turkey";
var age = 29;

// 1b put them in a single line

var firstName = "Koray",
  lastName = "Dündar",
  marialStatus = "Married",
  country = "Turkey",
  age = 29;

// 1c //

var myAge = 29;
var yourAge = 28;

console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);

//calculate the sum of all multiples of 3 and 5 bwtween 1 -1000
var sum = 0;
for (var i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum = sum + i;
  }
}

console.log(sum);
