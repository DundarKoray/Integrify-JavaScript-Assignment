// QUESTIONS

/*
1-Explain the difference between forEach, map, filter, and reduce.

2-Use forEach to console.log each country in the countries array.

3-Use forEach to console.log each name in the names array.

4-Use forEach to console.log each number in the numbers array.

5-Use map to create a new array by changing each country to uppercase in the countries array;

6-Use map to create a new array by changing each number to square in the numbers array

7-Use map to change to each name to uppercase in the names array

8-Use filter to filter out countries containing land. 

9-Use filter to filter out countries having six character.

10-Use filter to filter out countries containing six letters in the counntry array.

11-Use filter to filter out country start with 'E';

12-Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

13-Use reduce to sum all the numbers in the numbers array.

14-Use reduce to concatinate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries  #f30e5c

15-Explain the difference between some and every

16-Use some to check if some names' length greater than seven in names array

17-Use every to check if all the countries contain the word land

18-Explain the difference between find and findIndex.

19-Use find to find the first country containing only six letters in the countries array

20-Use findIndex to find the position of the first country containing only six letters in the countries array

21-Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')). #f30e5c

22-Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

23-Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

24-Declare a getLastTenCountries function which takes the last ten countries and r

25-Find out with which letter are there many countries
 */

/* 
const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
*/

// ANSWERS
//--------------------------------
//2-Use forEach to console.log each country in the countries array.

 const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

 countries.forEach(function(e){
     console.log(e)
 })

 //same as above
 countries.forEach(country =>{
    console.log(country)
 })

//-----------------------------------
//3-Use forEach to console.log each name in the names array.

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

names.forEach(name => {
    console.log(name)
})

//-----------------------------------
//4-Use forEach to console.log each number in the numbers array.

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newNumbers.forEach(number =>{
    console.log(number)
})

//-----------------------------------
//5-Use map to create a new array by changing each country to uppercase in the countries array;

const newCountries = countries.map(country =>{
    return country.toUpperCase();
})

console.log(newCountries); // (6) ["ESTONIA", "FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

//-----------------------------------
//6-Use map to create a new array by changing each number to square in the numbers array

const squareNewNumbers = newNumbers.map(number =>{
    return number * number;
})

console.log(squareNewNumbers); // (10) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//-----------------------------------
//7-Use map to change to each name to uppercase in the names array

const upperCaseNames = names.map(name=>{
    return name.toUpperCase();
})

console.log(upperCaseNames); // (4) ["ASABENEH", "MATHIAS", "ELIAS", "BROOK"]

//-----------------------------------
//8-Use filter to filter out countries containing 'land'.

const maat = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Candyland', 'Egoland'];
const landCountries = maat.filter(country =>{
    return country.match(/l/gi);

})

console.log(landCountries);


//-----------------------------------
//9-Use filter to filter out countries having six character.

const countriesWithSixCharacters = maat.filter(maa =>{
    return maa.length === 6;
})

console.log(countriesWithSixCharacters); // (2) ["Sweden", "Norway"]

//------------------------------------
//10-Use filter to filter out countries containing six letters in the country array.

//------------------------------------
//11-Use filter to filter out country start with 'E';

const countriesStartWithE = maat.filter(maa =>{
    return maa.slice(0, 1) === 'E';
})

console.log(countriesStartWithE); // (2) ["Estonia", "Egoland"]

//-------------------------------------
//12-Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const mixedArray = [1, 'Koray', 30, 'is', undefined, 9, 'an', 7, 'awesome', true, 'web developer'];

function getStringLists (array) {
   let result = array.filter(e => {
       return typeof(e) === 'string';
   })

   return result.slice(0, result.length).reduce((accum, curr) => 
   accum +' '+ curr);
}

console.log(getStringLists(mixedArray))

//-------------------------------------
//13-Use reduce to sum all the numbers in the numbers array.

//const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumAll = newNumbers.reduce((total, numbers) =>{
    return total + numbers
})

console.log(sumAll)

//-------------------------------------
//14-Use reduce to concatinate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// const maat = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Candyland', 'Egoland'];

let countriesParagraph = 
countries.slice(0, countries.length - 1).reduce((accum, curr) => 
accum + ", " + curr) + " and Iceland are north European countries.";

console.log(countriesParagraph)

//------------------------------------
//15-Explain the difference between some and every

console.log('some return true if even one of things are true where every return true if all of them are true')

//-----------------------------------
//16-Use some to check if some names' length greater than seven in names array
const niimit = ['Aleksi', 'Matias', 'Antti', 'Jani', 'Kristiina'];

const namesBiggerThanSeven = niimit.some((name) => {
    return name.length > 7;
})

console.log(namesBiggerThanSeven)

//------------------------------------
//17-Use every to check if all the countries contain the word land

const newMaat = ['Legoland', 'Egoland', 'Candyland', 'Beerland', 'Sadland', 'Suomi']
const checkNewMaat = newMaat.every((maa) =>{
    return maa.includes('land')
})

console.log(checkNewMaat); //false because there is suomi

//------------------------------------
//18-Explain the difference between find and findIndex.

console.log('find()gives you the value of the array where findIndex give the index. They both return the first element which satisfies the condition.')

//------------------------------------
//19-Use find to find the first country containing only six letters in the countries arrayExplain the difference between find and findIndex.

const europeanUnion = ['Germany', 'Italy', 'Netherland', 'France', 'Sweden', 'Finland'];

const firstCountryWith6Letters = europeanUnion.find( eu =>{
    return eu.length === 6;
}) 

console.log(firstCountryWith6Letters)


//------------------------------------
//20-Use findIndex to find the position of the first country containing only six letters in the countries array

const firstCountryWith6Letters2 = europeanUnion.findIndex( eu =>{
    return eu.length === 6;
}) 

console.log(firstCountryWith6Letters2)

//------------------------------------
//21-Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const countriesIncludeIst = ['Pakistan', 'Ozbekistan', 'Afghanistan', 'Turkmenistan', 'Norway', 'IceLand'];

const categorizeCountries = function(array, pattern) {
    let searchQuerry = new RegExp(pattern);
    let result = array.filter(country => country.match(searchQuerry))

    return result;
}

console.log(categorizeCountries(countriesIncludeIst, /ist/));
//(4) ["Pakistan", "Ozbekistan", "Afghanistan", "Turkmenistan"]
