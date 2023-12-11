"use strict";

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +"5");


let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);


let incr = 10,
    decr = 10;

++incr;  
--decr;

console.log(incr);
console.log(decr);



Префиксная форма:

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++);
console.log(decr--);

Возвращает значение 10/10

Постфиксная форма:

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

Возвращает значение 11/9

console.log(2*4 == 8);

console.log(2*4 === "8");


const isChecked = true,
    isClose = true;

console.log(isChecked && isClose);


const isChecked = true,
    isClose = false;

console.log(isChecked && isClose);



const isChecked = true,
    isClose = false;

console.log(isChecked || isClose);



const isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);


console.log(2 + 2 * 2 != 8);

console.log(2 + 2 * 2 !== 8);






