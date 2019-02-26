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

// Q12-) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// Q13-) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

// Q14-) Filter out companies which have more than one 'o' without the filter method

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

// Q5-) Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5

let mixedDataTypes = ['lemon', true, 29, undefined, null, 'false'];
//-------------------------------------------------

//Q6-) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Q7-) Print the array using console.log()
console.log(itCompanies);






