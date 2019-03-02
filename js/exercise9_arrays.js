//you couldn't solve a question: #f30e5c
//you have a question: #fffa67
//you have sold the question: #30e3ca

/******************* 
  ARRAYS QUESTIONS
*/

// Q1-) Declare an empty array;

// Q2-) Declare an array with more than 5 number of items

// Q3-) Find the length of your array

// Q4-) Get the first item, the middle item and the last item of the array

// Q5-) Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5

// Q6-) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.

// Q7-) Print the array using console.log()

// Q8-) Print the number of companies in the array

// Q9-) Print the first company, middle and last company

// Q10-) Print out each company

// Q11-) Change companies to uppercase and print them out

// Q12-) #f30e5c Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// Q13-) #fffa67 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

// Q14-) #f30e5c Filter out companies which have more than one 'o' without the filter method

// Q15-) Sort the array using sort() method

// Q16-) Reverse the array without reverse method 

// Q17-) Reverse the array using reverse() method

// Q18-) Slice out the first 3 companies from the array

// Q19-) Slice out the last 3 companies from the array

// Q20-) Slice out the middle IT company or companies from the array

// Q21-) Remove the first IT company from the array

// Q22-) Remove the middle IT company or companies from the array

// Q23-) Remove the last IT company from the array

// Q24-) Remove all IT companies

//-------------------------------






































/*******************
 ARRAY ANSWERS
*/

// Q1-) Declare an empty array
let emptyArray = [];
console.log(emptyArray.length) // 0
//--------------------------------------------------------------

// Q2-) Declare an array with more than 5 number of items
let carBrands = ['Mercedes', 'Honda', 'Mazda', 'Toyota', 'Nissan', 'Renault', 'Suzuki'];
let carBrand = ['Mercedes', 'Honda', 'Mazda', 'Toyota', 'Nissan', 'Renault', 'Suzuki', 'Ferrari'];


// Q3-) Find the length of your array
console.log(carBrands.length) // 7
console.log(carBrand.length) // 8


// Q4-) Get the first item, the middle item and the last item of the array
//method A
console.log(carBrands[0], carBrands[Math.floor(carBrands.length/2)], carBrands[carBrands.length - 1]) // Mercedes Toyota Suzuki
console.log(carBrand[0], carBrand[(carBrand.length/2)], carBrand[((carBrand.length/2) - 1)], carBrand[carBrand.length-1]) // Mercedes, Nissan, Toyota, Ferrari

//method B
let firstCar = carBrands[0];
let middleCar = carBrands[Math.floor(carBrands.length/2)]; //Array number is odd 7, half of it is 3,5, floor it to 3.
let lastCar = carBrands[carBrands.length-1];

console.log(`${firstCar} ${middleCar} ${lastCar}`) // Mercedes Toyota Suzuki
//---------------------------------------------------

// Q5-)#fffa67 Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5

let mixedDataTypes = ['lemon', true, 29, undefined, null, 'false'];

//-------------------------------------------------

//Q6-) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Q7-) Print the array using console.log()
console.log(itCompanies) // ['Facebook', 'Google', 'Microsoft',....]

// Q8-) Print the number of companies in the array
console.log(itCompanies.length); // 7

// Q9-) Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length/2)], itCompanies[itCompanies.length-1]); // Facebook(first-item) Apple(middle-item) Amazon(last)

// Q10-) Print out each company

//method A
console.log(itCompanies[0]); // Facebook
console.log(itCompanies[1]); // Google
console.log(itCompanies[2]); // Microsoft
console.log(itCompanies[3]); // Apple
console.log(itCompanies[4]); // IBM
console.log(itCompanies[5]); // Oracle
console.log(itCompanies[6]); // Amazon

//method B  WHY SPLIT METHOD IS NOT WORKING????


//method C
for (i = 0; i < itCompanies.length; i++){
  console.log(itCompanies[i])
}

// Q11-) Change companies to uppercase and print them out
for (i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase())
}

// Q12-) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itCompanies.slice(0,6)} and ${itCompanies.slice(-1)} are big IT companies`)

// Q13-) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
//let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

var company = ['One Plus', 'Google'];

if(itCompanies.includes(company[1])){
  console.log(`the company you have entered, exists in itCompanies array.`);
}else {
  console.log(`the company you have entered, does not exist in itCompanies array.`);
}

//!!! what happens if I wanna include the whole company.

// Q14-) Filter out companies which have more than one 'o' without the filter method #f30e5c
const companies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

for (let i = 0; i < companies.length; i++) {
  if (companies[i].indexOf('o') != companies[i].lastIndexOf('o')) {
    console.log(companies[i]);
  }
  console.log('index of result', companies[i].indexOf('o'));
  console.log('last index of result', companies[i].lastIndexOf('o'));
}

//------------------------

// Q15-) Sort the array using sort() method
console.log(itCompanies.sort()) // it sorts alphabetical order

// Q16-) Reverse the array without reverse method 

for (i = itCompanies.length; i >= 0; i--){
  console.log(itCompanies[i])
}

// Q17-) Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Q18-) Slice out the first 3 companies from the array
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies)

let sliceOutCompaniesFirstThree = itCompanies.slice(0, 3)
console.log(sliceOutCompaniesFirstThree) //Facebook Google Microsoft

// Q19-) Slice out the last 3 companies from the array
let sliceOutCompaniesLastThree = itCompanies.slice(itCompanies.length-3, itCompanies.length)
console.log(sliceOutCompaniesLastThree)  // IBM Oracle Amazon

// Q20-) Slice out the middle IT company or companies from the array
let sliceOutCompaniesMiddle = itCompanies[Math.floor(itCompanies.length/2)];
console.log(sliceOutCompaniesMiddle) //Apple

// Q21-) Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies) // (6) ["Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Q22-) Remove the middle IT company or companies from the array

//Now I have 6 items in array. There are 2 middles.
itCompanies.splice(2, 2); //first num is "FROM WHERE" and the second is "HOW MANY"
console.log(itCompanies) // (4) ["Google", "Microsoft", "Oracle", "Amazon"]

// Q23-) Remove the last IT company from the array
//method A
itCompanies.pop();
console.log(itCompanies) // (3) ["Google", "Microsoft", "Oracle"]

//method B
let NewItCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(NewItCompanies) // (7) ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let deleteLastItem = NewItCompanies.splice(-1, 1);
console.log(NewItCompanies) // (6) ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"]

// Q24-) Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies) // []

//  TEST FOR REMOVING AN ITEM FROM MIDDLE
let veryVeryNewItCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'DJI', 'OnePlus', 'Panasonic', 'Sony', 'LG', 'Logitech', 'Asus'];
console.log(veryVeryNewItCompanies) // 14 items in the array, it has 2 middle items which are Amazon and DJI
veryVeryNewItCompanies.splice(6, 2); // here is my logic if the total item number is even.  x= array.lenght / 2 - 1. enter the number x and 2.  splice(x, 2) 
console.log(veryVeryNewItCompanies)