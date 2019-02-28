/*************
 STRING QUESTIONS
*/

//Q1-) Declare a variable name company and assign it to an initial value "Coding Academy".

//Q2-) Print the string on the browser console using console.log()

//Q3-) Print the length of the string on the browser console using console.log()

//Q4-) Change all the string to capital letters using toUpperCase() method

//Q5-) Change all the string to lowercase letters using toLowerCase() method

//Q6-) Cut(slice) out the first word of the string using slice, substr() or substring() method

//Q7-) Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//Q8-) Check if the string contains a word Academy using includes() method

//Q9-) Split the string into array using split() method

//Q10-) Split the string Coding Academy at the space using split() method

//Q11-) "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" split the string at the comma and change it to an array.

//Q12-) Change Coding Academy to Microsoft Academy using replace() method.

//Q13-) What is character at index 10 in "Coding Academy" string use charAt() method.

//Q14-) What is the character code of A in 'Coding Academy' string using charCodeAt()

//Q15-) Use indexOf to determine the position of the first occurrence of c in Coding Academy

//Q16-) Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.

//Q17-) Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//Q18-) Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//Q19-) Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//Q20-) Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g " Coding Academy ".

//Q21-) Use startsWith() method with the string Coding Academy make the result true

//Q22-) Use endsWith() method with the string Coding Academy make the result true

//Q23-) Use match() method to find all the c’s in Coding Academy

//Q24-) Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//Q25-) Use concat() and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'

//Q26-) Use repeat() method to print Coding Academy 5 times

//Q27-) Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

//REGULAR EXPRESSION----????

//------------------------------























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
