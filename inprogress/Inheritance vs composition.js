/*

INHERITANCE 
VS COMPOSITION
IN JAVASCRIPT

What is Inheritance?

.In simpe language, inheritance means 
properties you got from your ancestors.

.Your parents borrowed some properties from
their parents and you borrowed some properties 
from your parents.


What is Composition?

.Composition is about creating small functions
and creating bigger and more complete
functions with them.

.Think of a function as a brick, composition is 
how you would make those bricks work together 
to build a wall or a  house.

Implementing Inheritance

class person {
    eat() {
        console.log('I am eating');
    }
    breathe() {
        console.log('I am breathing');
    } 
    swim() {
        consoel.log('I am swimming');
    }
}        
class Magician extends person {
    trick() {
      console.log('I am doing a trick');
    }
}

let liv = new Magician();
let harry = new Magician();
live.eat();  // output: "I am eating"
live. swim(); // output: "I am swimming"
liv.trick(); // output: "I am doing a trick"
harry.eat(); //output: "I am eating"
harry.swim(); // output: "I am swimming"
harry.trick(); // output: "I am doing a trick"

IMPLEMENTING  COMPOSITION

const eat = function () {
    return {
        eat: () => { console.log(' I am eating'); }
    }
}
const swim = function ( ) {
    return {
        swim: () => {console.log('I am swimming');}
    }
}
const trick = function () {
    return {
     trick: () => { console.log('I am doing  a trick'); }
    }
}
const superMagician = () => {
    return object.assign(
    {},
    eat(),
    trick()
  );
}
const noviceMagician = () => {
    return Object.assign(
    {},
    eat();
    swim()
   );
}       

    


*/