/*
Q1-) Declare a function fullName and it print out your full name.

------------------------------
Q2-) Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

---------------------------------
Q3-) Declare a function addNumbers and it takes two two parameters and it returns sum.

-------------------------------
Q4-) An area of a rectangle is calculated as follows: area = lenght x width. Write a function which calculates areaOfRectangle.

------------------------------------
Q5-) A perimeter of a rectangle is calculated as follows: perimeter= 2x(lenght + width). Write a function which calculates perimeterOfRectangle.

---------------------------------
Q6-) A volume of a rectangular prism is calculated as follows: volume = lenght x width x height. Write a function which calculates volumeOfRectPrism.

----------------------------------------------
Q7-) Area of a circle is calculated as follows: 
	 area = π x r x r. 
Write a function which calculates areaOfCircle

-------------------------------------
Q8-) Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

-------------------------------------
Q9-) Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

--------------------------------------------
Q10-) Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 

Write a fucntion which calculates a speed of a moving object, speed.

------------------------------------------------------
Q11-) Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

--------------------------------------------------------------
Q12-) Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which converst oC to oF convertCelciusToFahrenheit.

-------------------------------------------------------------
Q13-) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obsese based the information given below.

	-The same groups apply to both men and women.
	-Underweight: BMI is less than 18.5
	-Normal weight: BMI is 18.5 to 24.9
	-Overweight: BMI is 25 to 29.9
	-Obese: BMI is 30 or more

--------------------------------------------------------
Q14-) Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

---------------
Q15-) Linear equation is calculated as follows: ax + b = c. Write a function which calculates value of a linear equation, solveLinEquation.

------------------------------------
Q16-) Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

------------------------------------
Q17-) Declare a function name printArray. It takes array as a parameter and it prints out each value of thearray.

--------------------------------------
Q18-) Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (dont’ use method).

-----------------------------------
Q19-) Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

-----------------------------------
Q20-) Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

--------------------------------------
Q21-) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

---------------------------
Q22-) Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

--------------------------------
Q23-) Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

---------------------------
Q24-) Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

---------------------------------
Q25-) Declare a function name evensAndOdds	. It takes a positive integer as parameter and it counts number of evens and odds in the number.
	
	evensAndOdds(100);
	The number of odds are 50.
	The number of evens are 51.
------------------------------------
Q26-) Write a funcition which takes any number of arguments and return the sum of the arguments
	
	sum(1,2,3) // -> 6
	sum(1,2,3,4) // -> 10
---------------------------------
Q27-) Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
	
	console.log(randomHexaNumberGenerator());
	'#ee33df'

Q28-) Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
	
	console.log(userIdGenerator());
	41XTDbE

Q29-) Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
	
	userIdGeneratedByUser()
	"kcsy2
	SMFYb
	bWmeq
	ZXOYh
	2Rgxf
	"
	userIdGeneratedByUser()
	"1GCSgPLMaBAVQZ26
	YD7eFwNQKNs7qXaT
	ycArC5yrRupyG00S
	UbGxOFI7UXSWAyKN
	dIV0SSUTgAdKwStr
	"

Q30-) Write a function name rgbColorGenerator and it generates rgb colors.
	
	rgbColorGenerator()
	rgb(125,244,255)

Q31-) Use the new Date() object to get month, date, year, hour and minute.

Q32-) Write a function name displayDateTime which display time in this format: 28/08/2018 04:08

	displayDateTime()
	28/08/2018 04:08

Q33-) Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

Q34-) Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

Q35-) Call your function isEmpty, it takes a parameter and it checks if it is empty or not

Q36-) Call your function sum, it takes any number of arguments and it returns the sum.

Q37-) Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

Q38-) Write a function called average, it takes an array parameter and returns the average the items. Check if all the array items are number types. If not give return reasonable feedback.

Q39-) Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

	console.log(modifyArray(["Avocado", "Tomato", "Potato","Mango", "Lemon","Carrot"]);
	// →["Avocado", "Tomato", "Potato","Mango", "LEMON", "Carrot"]
	console.log(modifyArray(["Google", "Facebook","Apple", "Amazon","Microsoft",  "IBM"]);
	// →["Google", "Facebook","Apple", "Amazon","MICROSOFT",  "IBM"]
	console.log(modifyArray(["Google", "Facebook","Apple", "Amazon"]);
	// →"Not Found"

*/

























/*********************************
ANSWERS
*/

/*
Q1-) Declare a function fullName and it print out your full name. 
*/

function fullName(){
	var firstName = 'Koray';
	var lastName = 'Dündar';

	return firstName + ' ' + lastName;
}

console.log(fullName());
//--------------------------------

/*
Q2-) Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
*/

function fullNameOne(firstNameOne, lastNameOne){
	return firstNameOne + ' ' + lastNameOne;
}

console.log(fullNameOne('Anna', 'Dündar')); // Anna Dündar
//------------------------------------

/*
Q3-) Declare a function addNumbers and it takes two two parameters and it returns sum.
*/

function sumSomeNumbers(numOne, numTwo){
	return numOne + numTwo;
}

console.log(sumSomeNumbers(13, 7)); //20
//--------------------------------------

/*
Q4-) An area of a rectangle is calculated as follows: area = lenght x width. Write a function which calculates areaOfRectangle.
*/

function areaOfRectangle(lenght, width){
	return lenght*width;
}

console.log(areaOfRectangle(12, 6)) //72
//-------------------------------------

/*
Q5-) A perimeter of a rectangle is calculated as follows: perimeter= 2x(lenght + width). Write a function which calculates perimeterOfRectangle.
*/

function perimeterOfRectangle(lenght, width){
	return 2*(lenght + width);
}

console.log(perimeterOfRectangle(12, 6)) //36
//----------------------------------------------

/*
Q6-) A volume of a rectangular prism is calculated as follows: volume = lenght x width x height. Write a function which calculates volumeOfRectPrism.
*/

function volumeOfRectPrism(lenght, width, height){
	return lenght * width * height;
}

console.log(volumeOfRectPrism(12, 6, 3)) //216
//--------------------------------------

/*
Q7-) Area of a circle is calculated as follows: 
area = π x r x r. Write a function which calculates areaOfCircle
*/

function areaOfCircle(r){
	let area =  Math.PI * (r**2);
	return area;
}

console.log(areaOfCircle(10)) //314.15

//-----------------------------------------
//Q8-) Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle


function circumOfCircle(r){
	return (Math.PI*r) * 2;
}
console.log(circumOfCircle(10)) // 62.83

//-------------------------------------------
//Q9-) Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.


function densityOfSubs(mass, volume){
	return mass / volume;
}

console.log(densityOfSubs(50, 10)) // 5
//-----------------------------------------

/*
Q10-) Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
*/

function kmPerHour(distance, time){
	var speed = distance / time;
	return (`The speed is ${speed}`);
}

console.log(kmPerHour(70, 2)) //35km speed per hour
console.log(kmPerHour(100,5)) //20km speed per hour
//--------------------------------------------

/*
Q11-) Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
*/

function weightOfSubst (mass){
	let weight = mass * 3.52;
	return (`The weight is ${weight}.`);
}

console.log(weightOfSubst(5000)) //17600
//-----------------------------------

/*
Q12-) Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which converst oC to oF convertCelciusToFahrenheit.
*/

function convertCelciusToFahrenheit(celcius){
	let temperatureFahrenheit = ((celcius * 9) / 5) + 32;
	return temperatureFahrenheit;
}

console.log(convertCelciusToFahrenheit(25)); //77°F
//---------------------------------------------------

/*
Q13-) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obsese based the information given below.

	-The same groups apply to both men and women.
	-Underweight: BMI is less than 18.5
	-Normal weight: BMI is 18.5 to 24.9
	-Overweight: BMI is 25 to 29.9
	-Obese: BMI is 30 or more
*/

function calculateBMI (weight, height) {
	let BMI = weight / (height**2);
	

	if(BMI >= 30){
		console.log(`Your BMI result is ${BMI}. Obese: BMI is 30 or more.`)
	}else if(BMI <30 && BMI >=25){
		console.log(`Your BMI result is ${BMI}. Overweight: BMI is 25 to 29.9`)
	}else if(BMI <25 && BMI >=18.5){
		console.log(`Your BMI result is ${BMI}. Normal: BMI is 18.5 to 24.9`)
	}else{
		console.log(`Your BMI result is ${BMI}. Underweight: BMI is less than 18.5.`)
	}

	return BMI;
}

calculateBMI(83, 1.83) 
//-------------------------

/*
Q14-) Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
*/

function checkSeason(month){

	let season = month.toLowerCase();
	
	if(season === 'june' || season === 'july' || season === 'august'){
		console.log('The season is summer.')
	}

	else if(season === 'march' || season === 'april' || season === 'may'){
		console.log('The season is spring.')
	}

	else if(season === 'december' || season === 'january' || season === 'february'){
		console.log('The season is winter.')
	}

	else if(season === 'september' || season === 'october' || season === 'november'){
		console.log('The season is autumn.')
	}

	else{
		console.log('You entered an invalid value.')
	}

	return season;
	
}

checkSeason('APril');
//---------------------------------------------

/*
Q15-) Linear equation is calculated as follows: ax + b = c. Write a function which calculates value of a linear equation, solveLinEquation.
*/

function solveLinearEquation (a, b, c){
	return ((b - c) / a);
}

console.log(solveLinearEquation (1, 2, 3))
	
//------------------------------------

/*
Q16-) Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
*/

function solveQuadEquation (a, b, c){
	// the quadratic equation can be solved by 
	// x = (-b +- sqrt(b**2 -4ac)/2a)
	// let us consider the sqare root section to delta
	// because they can have positive, negative and zero value

	let delta = (b **2) - (4 * (a * c));

	if(delta === 0) {
		let result = -b / (2 * a);
		return `the solution is ${result}`;

	} else if (delta > 0) {
		let result1 = (-b + Math.sqrt(delta)) / (2*a);
		let result2 = (-b - Math.sqrt(delta)) / (2*a);
		return `there are two solutions: ${result1} and ${result2}`;
	
	}else{
		return `the solution does not exist`;
	}

}

solveQuadEquation (3, 40, 5);
//---------------------------------

/*
Q17-) Declare a function name printArray. It takes array as a parameter and it prints out each value of thearray.
*/

function solveQuadEquation (a, b, c){
    // the quadratic equation can be solved by
    // x = (-b +- sqrt(b**2 -4ac)/2a)
    // let us consider the sqare root section to delta
    // because they can have positive, negative and zero value

    let delta = (b **2) - (4 * (a * c));

    if(delta === 0) {
        let result = -b / (2 * a);
        return `the solution is ${result}`;

    } else if (delta > 0) {
        let result1 = (-b + Math.sqrt(delta)) / (2*a);
        let result2 = (-b - Math.sqrt(delta)) / (2*a);
        return `there are two solutions: ${result1} and ${result2}`;
    
    }else{
        return `the solution does not exist`;
    }

}

solveQuadEquation (3, 40, 5);

//----------------------------------------
//Q18-) Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (dont’ use method).

const freshFruits = ['mango_1', 'pineapple_2', 'orange_3', 'apple_4'];
console.log(freshFruits) // (4) ["mango_1", "pineapple_2", "orange_3", "apple_4"]

//method A - for loop
function reverseArrayWithForLoop (array) {
	for (let i = array.length -1; i >= 0;  i--){
		console.log('I am reversed with for loop', array[i])
	}
}

reverseArrayWithForLoop(freshFruits);

//method B - while loop
function reverseArrayWithWhileLoop(array){
	let i = array.length;
	while(i > 0){
		i--;		
		console.log('I am reversed with while loop.', array[i])
	}
} 

reverseArrayWithWhileLoop(freshFruits);

//method C - do while loop
function reverseArrayWithDoWhileLoop(array){
	let i = array.length -1;
	do{
		console.log('I am reversed with do while loop.', array[i])
		i--;
	}while (i >= 0)
}

reverseArrayWithDoWhileLoop(freshFruits)

//-----------------------------------
//Q19-) Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const letters = ['a', 'b', 'c', 'd', 'e']

function capitalizeArray(array){
	for(let i = 0; i < array.length; i++){
		console.log(array[i].toUpperCase());
	}
}
capitalizeArray(letters)

//--------------------------
//Q20-) Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const vehicles = ['bus', 'boat', 'train', 'car']
console.log(vehicles) // (4) ["bus", "boat", "train", "car"]
function addItem (array, item){
	array.push(item);
	console.log(array)
}

addItem(vehicles, 'bike') // (5) ["bus", "boat", "train", "car", "bike"]

//-----------------------------
// Q21-) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const shoppingBasket = ['egg', 'bread', 'butter', 'tomato', 'milk', 'ice-cream'];
console.log(shoppingBasket) // (6) ["egg", "bread", "butter", "tomato", "milk", "ice-cream"]

function removeItem (array, index){
	array.splice(index, 1)
	console.log(array)
}

//let's say we wanna remove tomato (3) from the array

removeItem(shoppingBasket, 3) // (5) ["egg", "bread", "butter", "milk", "ice-cream"]

//-------------------------------------
//Q22-) Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumber(number){
	let sum = 0;
	for(let i = 0; i < number ; i++){
		sum = sum + i;
	}
	return sum;
}

console.log(sumOfNumber(5)) // 10 (1+2+3+4)
