const { domain } = require("process")

/*

SKIP VALUES IN 
DSETRUCTING
IN JAVASCRIPT

WHAT IS DESTRUCTING?

The destructing assignments is a way to unpack
the values from array or properties from objects,
into distinct variables.

const [banana, cherry, apple] = fruits;
console.log("fruits for diet", cherry, apple);

for say, here we need only cherry and apple
variable's values only, but banana is unwanted
assignment variable, we can skip variable.


// Unwanted variable aassign,ent banana
const[banana, cherry, apple] = fruits;

Let see how to do that ->

HOW TO SKIP USELESS VARIABLE 
ASSIGNMENT?

We can use blanks to skip over unwanted values,
This is a way to avoid useless variable assignments
for values that are not needed while 
destructing.

console.log("fruits for Diet", cherry, apple);

Instead using blank space we could use block
comments over there for better readability of code.

where to use/

const url = 'www. jsnuggets.com/logo.png';
const array = url.split('.');
// ['www' *jsnuggets', 'com/log', 'png' ]
const [/* www /, domain, /, path /, type] = array;
console.log(domain, type); // 'jsnuggets', 'png'





*/