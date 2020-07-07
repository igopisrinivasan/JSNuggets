/*

IDENTIFYING TYPE
OF AN OBJECT 
IN JAVASCRIPT

TIME TO THINK

How will you differentiate the following
variables by it's 'type'?

var object = { name: 'js-nuggets' };
var array = [ 'js' , 'nuggets' ];
var string = 'js-nuggets';
var regExp = /js-nuggets/;

SOLUTION

Yeah, we can use the typeof operator!

typeof { name: 'js-nuggets' };
// "object"
typeof ['js' , 'nuggets' ];
// "object"
typeof 'js-nuggets';
// "string"
typeof /js-nuggets/;
// "object"

Allright, we identified the string, but how to identify
the object, array and the regular expression?!

CONT..,

Consider the following example,

var object = { namep: 'js-nuggets' };
object.tostring(); // "[object object]"

We are going to use the 'toString()' of the Object
prototype to identify the type of a variable.

Object.prototype.toString.call({ name: 'js-nuggets' });
// "[object object]"
Object.prototype.toString.call(['js'; 'nuggets' ]);
// "[object Array]"
object.prototype.toString.call('js-nuggets');
// "[object String]"
object.prototype.toString.call(/js-nuggets/);
// "[object RegExp]"




*/