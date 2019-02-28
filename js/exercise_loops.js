//you couldn't solve a question?... add the color #f30e5c
//you solved the question but still have a question #fffa67

/************************* 
 LOOP QUESTIONS
*/

// Q1-) Iterate 0 to 10 using for loop, do the same using while and do while loop. #fffa67

// Q2-) Iterate 10 to 0 using for loop, do the same using while and do while loop.

// Q-) Write a loop that makes seven calls to console.log to output the following triangle:
/*  
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

// Q-) Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.

// Q3-) Iterate the array from above question using a for loop and print out the items.

// Q4-) Use for loop to iterate from 0 to 100 and print only even numbers

// Q5-) Use for loop to iterate from 0 to 100 and print only odd numbers

// QEXTRA-) Use for loop to iterate from 0 to 100 and if else condition, even numbers says "I am even number" and odd says "I am odd number. sum even nums and sum odd nums

// Q6-) Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.  The sum all numbers is 5050.

// Q7-) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. The sum of all evens is 2550. And the sum of all odds is 2500. #f30e5c

//----------------------------



/*
Summary: I gotta really understand how loops are really working.
I need behind the scene.
*/







//-------------------------


/*******************************
 LOOP ANSWERS
*/

// Q1-) Iterate 0 to 10 using for loop, do the same using while and do while loop.

//method A - for loop
for(let i = 0; i <=10; i++){
    console.log(i)
}

//method B - while loop
let i = 0;
while(i <=10){
    console.log(i) // from 0 to 10
    i++;
}

// #fffa67 above, if you swap places between i++ and console.log(i), it gives us 11 WHY???

//method C - do while loop
let b = 0;
do{
    console.log(b);
    b++;
}while (b <= 10) 
//-------------------------------------------------------

// Q2-) Iterate 10 to 0 using for loop, do the same using while and do while loop.

//method A - for loop
for(let i = 10; i>=0; i--){
    console.log(i)
}

//method B - while loop
let a = 10;
while(a>=0){
    console.log(a)
    a--
}

//method C - do while loop 
let d = 10;
do{
    console.log(d);
    d--;
}while(d>=0)
//---------------------------------

// Q3-) Iterate the array from above question using a for loop and print out the items.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

for(let i = 0; i <= itCompanies.length; i++){
     console.log(itCompanies[i])
}

//------------------------------------
// Q4-) Use for loop to iterate from 0 to 100 and print only even numbers

for(let i = 0; i <= 100; i=i + 2) {
    console.log(i)
}


// Q5-) Use for loop to iterate from 0 to 100 and print only odd numbers

for(let i =1; i<=100; i= i + 2){
    console.log(i)
}

// QEXTRA-) Use for loop to iterate from 0 to 100 and if else condition, even numbers says "I am even number" and odd says "I am odd number"

for(let i = 0; i<=50; i++){
    if(i % 2 ===0){
        console.log(`${i} I am even number`)
    }else {
        console.log(`${i} I am odd number`)
    }
}

// QEXTRA-) Use for loop to iterate from 0 to 100 and if else condition, even numbers says "I am even number" and odd says "I am odd number. sum even nums and sum odd nums
let oddNumbers = 0;
let evenNumbers = 0;

for (let i = 0; i <= 100; i = i + 1) {
  if (i % 2 === 0) {
    evenNumbers = evenNumbers + i; 
    console.log ('I am proud even', i);
  } else {
    
    oddNumbers = oddNumbers + i;
    console.log ('I am proud odd', i);
  }
}
console.log(oddNumbers)
console.log(evenNumbers)
console.log(evenNumbers + oddNumbers)

// Q6-) Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.  The sum all numbers is 5050.

let sum = 0;
for (let i = 0; i <=100; i++){
    sum = sum + i;
    console.log(i);
}

console.log(`The sum of all the number is ${sum}`);

// Q7-) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. The sum of all evens is 2550. And the sum of all odds is 2500.

let sumEvens = 0;
let sumOdds = 0;

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        sumEvens = sumEvens + i;

    }
    
    else{
        sumOdds = sumOdds + i;
    }

    console.log(`The sum of all evens is ${sumEvens}. The sum of all odds is ${sumOdds}`)
}

