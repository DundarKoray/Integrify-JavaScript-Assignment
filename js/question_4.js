// 4a Write three JavaScript statement which provide truthy value.
var firstName = "Koray";
console.log(firstName.length === 5);

var lastName = "Dündar";
console.log(lastName.length === 6);

console.log(firstName === "Koray");

// 4b Write three JavaScript statement which provide falsy value.

console.log(firstName === "Hari");
console.log(firstName.length > 5);
console.log(lastName === "dündar");

var numbersOfKids = 4;

if (numbersOfKids >= 5) {
  console.log("You have enough kids to make a basketball team");
} else {
  console.log(
    "You don't have enough kids to make a basketball team, make one more."
  );
}
