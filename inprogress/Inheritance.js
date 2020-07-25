/*
INHERITANCE 
AND PROTOTYPE 
CHAIN

WHAT IS INHERITANCE?

.In simple language, inheritance means properties
you got from your ancestors.

.Your parents borrowed some properties from their
parents and you borrowed some properties from your 
parents.

WHAT IS PROTOTYPE CHAIN?

.JavaScript tries to find it on the --proto--
object which points to its prototype constructor
function.

.Since prototype also has --proto-- object which
points to its prototype constructor
function.

.Since prototype also has --proto-- object which
points the prototype of its prototype of its constructor function,
it tries to find. This cycle continues until there
is no --proto-- property on the prototype object.


INHERITANCE WITH PROTOTYPE CHAIN

function Animal(name, energy){
 this.name = name;
 this.energy = energy;
}
Animal.prototype.eat = (amount) {
    console.log('${this.name} is eating, ');
    this.energy += amount;
}
Animal.prototype.sleep = (length) { 
  console.log('${this.name} is sleeping.');
   this.energy += length;
}
function Dog(name, energy, breed) {
   Animal.call(this, name, energy);
   this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.p-rototype.bark = function () {
    console.log('woof woof');
    this.energy -= .1;
}
const tommy = new Dog('Tommy', 2, 'labrador');
console.log(tommy);   //Dog
console.log(tommy._proto_); //Animal

.Object,create is the best way to create objects 
with no prototytpe at all. Also, you can configure
initial properties on the object using property
descriptor.

.If you want to provide this manually, you can use 
functionName.call or functionName.apply methods.

.Here we used Animal.call() to call constructor for
Animal to Dog. Dog function can access Animal
after calling it inside Dog.




 


*/