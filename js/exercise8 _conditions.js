/*************
 Conditional
*/

/**********************************************************************'
Q1-) Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if        not 18 give feedback to wait for the years he supposed to wait for.

Output:
Enter your age: 30
You are old enough to drive. 

Output:
Enter your age:15
You are left with 3 years to drive.

------------------------------------------------- 	
Q2-) Compare the values of myAge and yourAge using if … else. Based on the comparison log   to console who is older (me or you).      Use prompt(“Enter your age:”) to get the age as input.

Output:
Enter your age: 30
You are 5 years older than me. 

-----------------------------------------------
Q3-) If a is greater than b return a is greater than b else a is less than b

Output:
let a = 4;
let b = 3;
4 is greater than 3

-------------------------------------------------
Q4-) Write a code which give grade students according to theirs scores:

80-100, A
70-89, B
60-69, C
50-59, D
0 -49, F

---------------------------------------------------------
Q5-) Check if the season is Autumn, Winter, Spring or Summer. If the user input is:

September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

*********************************************************************/





/*

I HAVE DONE Q1, Q2, Q3
I HAVE NOT DONE Q4, Q5, Q6

*/















/**********ANSWERS*****************
Q1-) Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if        not 18 give feedback to wait for the years he supposed to wait for.
*/
var userAge = prompt('Enter your age');


if (userAge >= 18) {
  console.log(`You are old enough to drive. You have been eligible to drive already for ${userAge - 18} year.`);
}else if ( userAge == "") {
  alert('You must enter an age');
}else {
console.log(`You need to wait ${18 - userAge} years in order to drive.`);
}

/*
Output:
Enter your age:15
You are left with 3 years to drive.
***************************************/

/*
Q2-) Compare the values of myAge and yourAge using if … else. Based on the comparison log   to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
*/

var friendAge = prompt('What is your age?');
var myAge = 29;

if (friendAge > myAge) {
  console.log('You are ' + (friendAge-myAge)+ ' years older than me.' )
} else {
  console.log('You are ' + (myAge - friendAge) + ' years younger than me.')
}

/*
Output:
Enter your age: 30
You are 5 years older than me. 
***************************************/

/*
Q3-) If a is greater than b return a is greater than b else a is less than b
*/

let a = 9;
let b = 10;

if(a > b){
  console.log(`${a} is greater than ${b}.`);
}else {
  console.log(`${b} is greater than ${a}.`);
}


/*
Output:
let a = 4;
let b = 3;
4 is greater than 3
******************************************/

/*
Q4-) Write a code which give grade students according to theirs scores:

80-100, A
70-79, B
60-69, C
50-59, D
0 -49, F

*/

var studentsExamResult = prompt('What is the students score out of 100');


switch(true){
  case studentsExamResult >=80 && studentsExamResult <=100:
  alert("You get an A.");
  break;

  case studentsExamResult >=70 && studentsExamResult <80:
  alert("You get a B.");
  break; 

  case studentsExamResult >=60 && studentsExamResult <70:
  alert("You get a C.")
  break;

  case studentsExamResult >=50 && studentsExamResult <60:
  alert("You get a D.")
  break;

  case studentsExamResult >0 && studentsExamResult <50:
  alert("You get a F.")
  break;

  case studentsExamResult == "":
  alert("You must enter a number.")
  break;
}

/***********************************
Q5-) Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
*/

/*
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
var userInput = prompt("What month would you like to travel?");
var firstLetter = userInput.slice(0, 1).toLocaleUpperCase();
var restOfTheLetters = userInput.slice(1, userInput.length).toLocaleLowerCase();
var fullName = firstLetter + restOfTheLetters;

switch(true) {
  case fullName === 'September' || fullName === 'October' || fullName === 'November':
  console.log('Best time to travel in Autumn, 57 rooms are available.') 
  break;

  case fullName === 'December' || fullName === 'January' || fullName === 'February':
  console.log('Best time to travel in Winter, 45 rooms are available.') 
  break;

  case fullName === 'March' || fullName === 'April' || fullName === 'May':
  console.log('Best time to travel in Spring, 29 rooms are available.') 
  break;

  case fullName === 'June' || fullName === 'July' || fullName === 'August':
  console.log('Best time to travel in Summer, only 5 rooms are available.') 
  break;
}
