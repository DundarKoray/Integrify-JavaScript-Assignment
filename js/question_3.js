// 3a- Declare a variable name company and assign it to an initial value “Integrify Academy”.

var company = "Integrify Academy";
console.log(company);

// 3b - Print the length of the string  on the browser console using console.log()
console.log(company.length);

// 3c Change all the string to capital letters using toUpperCase() method
console.log(company.toUpperCase());

// 3d Change all the string to small letters using toLowerCase() method
console.log(company.toLowerCase());

// 3e Cut(slice) out the first word of the string using slice, substr() or substring() method
console.log(company.slice(0, 9));
console.log(company.substr(0, 9)); /*CANNOT TAKE NEGATIVE*/
console.log(company.substring(0, 9));

// 3f Check if the string contains a word Academy using includes() method
console.log(company.includes("Academy")); /*CASE SENSITIVE*/

// 3g Split the string into array using split() method

console.log(company.split("")); /* GIVES SEVENTEEN STRING INCLUDING THE SPACE */

// 3h Split the string Integrify Academy at the space using split() method

console.log(company.split(" ")); /* GIVES TWO STRING */

// 3i “Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon” split at the string at the comma  and change it to an array.
var companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(companies.split(", "));
console.log(companies.split(" "));

// 3j Change Integrify Academy  to Microsoft Academy using replace() method.

console.log(company.replace("Integrify Academy", "Microsoft Academy"));
console.log(company.replace("Integrify Academy", 9));
/*ASK QUESTION IT DOESNT CONVERT STRING*/

// 3k What is the index of A in ‘Integrify Academy’ string use charAt() method.
console.log(company.indexOf("I"));
console.log(company.charAt(0));

// 3l What is the character code of A in ‘Integrify Academy’ string using charCodeAt()
console.log(company.charCodeAt(0));

//3m Use indexOf to determine the position of  the first occurrence of e in Integrify Academy
console.log(company.indexOf("e"));

//3n Use lastIndexOf to determine the position of the last occurrence of e in Integrify Academy
console.log(company.lastIndexOf("e"));

//3o Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g “  Integrify Academy   ”.
var newCompany = " Integrify Academy ";
console.log(newCompany.trim());
/*ASK QUESTION HOW IT REALLY WORKS*/

//3p Use startsWith() method with the string Integrify Academy make the result true
console.log(company.startsWith("I")); /*CAPITAL SENSITIVE*/

//3q Use endsWith() method with the string Integrify Academy make the result true
console.log(company.endsWith("y"));

//3r Use  match() method to find all the a’s in Integrify Academy
console.log(company.match("a"));
/*ASK QUESTION IF WE CAN ASK TWO LETTERS?*/

//3s Use concat() and merge ‘Integrify’ and ‘Academy’ to a single string, ‘Integrify Academy’
var companyOne = "Integrify";
var companyTwo = "Academy";

console.log(companyOne.concat(" ", companyTwo));
/*ASK QUESTION ABOUT SPACING */

//3t Use repeat() method to print Integrify Academy 5 times
console.log(company.repeat(5).split(","));
/*ASK QUESTION ABOUT SPACING*/
