/*

REASONS TO 
PREFER MAP
OVER OBJECT 
IN JAVASCRIPT

What is a Map?

.Map is one of the most frequently used data
structures.

.It kepps key-value pairs that can easily be acessed 
by their keys.

Example,

const map = {};
map['key1'] = 'value1';
map['key2'] = 'value2';
map['key3'] = 'value3';

// check if map contains key

if (map['key1']) {
    console.log('Map contains key1');
}

// get value with specific key
console.log(map['key']);

Reasons to prefer map over objects in 
JavaScript
 
. MORE KEY TYPES

 Object can only have symbols or strings.
 Map can have any type of values as a key; objects,
 functions, or primitives


 . DIRECT ITERATION

 Object must be iterated by getting the keys and iterating over them

 Map can be iterated directly.

 for (let [key, value] of map) {}
 // Map iteration

 for(let key of object.keys(plainObjMap)) {
    const value = plainObjMap[key];
 } // Object Iteration

 . KEY ORDER

 Object keys are not guaranteed to be in any specific
 order before ECMAScript 2015.

 Map guarantees that the keys appear in the order of
 insertion.
 
. NO KEY OVERRIDING

Object already contains some keys on creation
because pf its prototype

Map does not contain any keys on creation.


const map = new Map();
map.set('toString' , 3); // No problem for map

const plainObjMap = new Map();
plainObjMap['toString'] = 3; // Error

Note: Since ECMAScript 2015, Accidental key overriding
can be avoided by using Object.create(null) to create
object.

. BETTER SIZE DETERMINATION

Object size has to be determined in hard way and it
takes 0(n) steps.

Map can provide size property and it takes 0(1)
time.


. BETTER PERFORMANCE

Maps are optimized for frequent addition and removal 
of enrtries.

Moreover, the number of entries of a map can be
retrived in constant time.

It is not necessary to convert any key into a string,
which can save a lot of time.

 






*/ 