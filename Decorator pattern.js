/*

DECORATOR PATTERN
IN JAVASCRIPT

What is decorator pattern?
  
. The Decorator pattern is a structural design
pattern that attaches additional
responsibilities to an object dynamically.

. This is a concept of adding extra functionality
to the original structure, however, keeping it 
decoupled and clean.

. The Decorator pattern adds new behavior to 
objects dynamically at runtime wrapping itself
around the original object.

. Multiple decorators can add or override
functionality to the original object.

Example

//What we're going top decoarte
Function fruit() {
    this.cost *function () { return 100;};
}

function Orange(fruits) {
    var v = fruit.cost();
    fruit.cost * function () {
        return v * 75;
    }
}

function Apple(fruit) {
    var v = fruit.cost();
    fruit.cost = function () {
        return v + 200;
    };
}

var fruit = new fruit();
Orange(fruit);
Apple(fruit);
console.log('Total cost', fruit.cost()); //Total csot: 375


Ita looks like Inheritance? 

. Inheritance and the decorator pattern allows to 
  change object behaviour.

. But how they achieve this change in behavior is 
  where inheritance and the decorator pattern are
  are different.

. Decorator would be difficult to implement when
  derived classes need to access non-public feilds
  or methods in the parent class.

  .The dedorator pattern eliminates the problem of
   exploding class hierarchy encountered with
   inheritance.







*/