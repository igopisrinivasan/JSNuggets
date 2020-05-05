
//Type Coercion:
//  It is the process of converting value from one type to another (number to string, object to boolean, etc).

//Number => String
const number = 123;
console.log(typeof number); // number
const numberToString = String(number);
console.log(typeof numberToString); // string


//Object => Boolean
const object = {};
console.log(Boolean(object)); // true
const anotherObject = {name: 'I2i'};
console.log(Boolean(anotherObject)); // true


/*Types of Coercion:
    ● Explicit Coercion
    ● Implicit Coercion
Explicit Coercion (Type Casting): When developer intentionally converts the type using code, it is known as Explicit Coercion (Type Casting).*/

console.log(Number('123')); // 12

/*Implicit Coercion:
    Since Js is ‘weakly-typed language’, values can also be converted between different types automatically.It is known as Implicit Coercion*/
console.log(123 + ''); // “123”

/*In this case when a number is concatenated with string, it is automatically converted to string.*/



