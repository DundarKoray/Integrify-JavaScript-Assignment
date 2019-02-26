/* Logical Operator
       &&, || and ! are JavaScript logical operators. 
	Which are true or which are false ?

a.    4 > 3 && 10 < 12   both true
b.    4 > 3 && 10 > 12   false
c.    4 > 3 || 10 < 12   true    ????????????????
d.    4 > 3 || 10 > 12   false   ??????????????+
e.    !(4 > 3)  false
f.    !(4 < 3)  true
g.    !(false)  true
h.    !(4 > 3 && 10 < 12)   false
i.    !(4 > 3 && 10 > 12)   true
j.    !(4 ===’4’)        true

*/

//a.    4 > 3 && 10 < 12   both true
console.log(4 > 3 && 10 < 12); //true

//b.    4 > 3 && 10 > 12   false
console.log(4 > 3 && 10 > 12); //false

//c.    4 > 3 || 10 < 12   true    ????????????????
console.log(4 > 3 || 10 < 12); //true

//d.    4 > 3 || 10 > 12   false   ??????????????+
console.log(4 > 3 || 10 > 12); // true  ????????????

//e.    !(4 > 3)  false
console.log(!(4 > 3)); // false

//f.    !(4 < 3)  true
console.log(!(4 < 3)); // true

//g.    !(false)  true
console.log(!false); // true

//h.    !(4 > 3 && 10 < 12)   false
console.log(!(4 > 3 && 10 < 12)); //false

//i.    !(4 > 3 && 10 > 12)   true
console.log(!(4 > 3 && 10 > 12)); //true;

//j.    !(4 ===’4’)        true
console.log(!(4 === "4")); //true;
