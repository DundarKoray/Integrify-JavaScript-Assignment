//you couldn't solve a question?... add the color #f30e5c
//you solved the question but still have a question #fffa67

/************************* 
 LOOP QUESTIONS
*/

// Q1-) Iterate 0 to 10 using for loop, do the same using while and do while loop. #fffa67

// Q2-) Iterate 10 to 0 using for loop, do the same using while and do while loop.

// Q3-) Iterate the array from above question using a for loop and print out the items.

// Q4-) Use for loop to iterate from 0 to 100 and print only even numbers

// Q5-) Use for loop to iterate from 0 to 100 and print only odd numbers

// Q6-) Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

// Q7-) The sum all numbers is 5050.

// Q8-) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// Q9-) The sum of all evens is 2550. And the sum of all odds is 2500.

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
let evenNumbers = 0;
let oddNumbers = 0;

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        evenNumbers = evenNumbers + i;
        //same as above... evenNumber += i;

        console.log('I am even number')
    }else{
        oddNumbers = oddNumbers + i;
        //same as above... oddNumber += i;

        console.log('I am odd number')
    }
}





