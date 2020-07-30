/*
MIXIN  IN JAVA SCRIPT

MIXIN :
 
   A mixin is an object oriented programming term,a clas which contains helper method for other classes.
   Mixin is an JS object with useful methods, which can be easily merged with the prototype of any class.

USAGE:
   
   In Js a class can extend only one other class.Js doesn't support multiple inheritance.
   But sometimes we require to extend more than one,to overcome this we can use Mixin
   which helps to copy methods to the prototype of another class.

Let's see an example...

EXAMPLE!

// Area Calculating Mixin */
let areaCalculator = 
{
  calculateArea()  
  {
   console.log(this.length * this.breadth);
  }
};

// usage:
Class Rectangle 
{
  constructor(length, breath) 
  {
   this.length = length;
   this.breadth = breadth;
  }
}

// copy the methods 
Objcet.assign(Rectangle.protototype, areaCalculator);

// now Rectangle class can use calculateArea 
new Rectangle(5, 6).calculateArea(); // 30

EVENTMIXIN!
Now let's make a Mixin for real time usage.

// Event Mixin

let eventMixin =
{
  addEvent(eventName, handler) 
  {
    this.event[eventName] = [];
    this.event[eventName].push(handler);
  },

  trigger(eventName,...args)
  {
   this.eventp[eventName]
     .forEach(handler => handler.apply(this,args));
  }

};

//We have created an eventMixin. Let's use it..

//EXAMPLE!

class Menu
{
  choose(value)
  {
    this.trigger("select", value);
  }
}

// copy the methods

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.addEvent("selct", value => console.log('Value selected: ${value}));

menu.choose("123");

// Value selected: 123

We have used the eventMixin objects addEvent and trigger methods to trigger 
the event using menu object.



    
*/
