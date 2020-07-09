/*

POLYMORPHISM
IN JAVASCRIPT

POLYMORPHISM

. Polymorphism is one of the principles of
  Object-Oriented Programming (OOP)

. It is used to share or override any behavior of 
  objects with the specifications provided objects.

. It takes the inheritance as a key to achieving
  this
  
. Javascript is an interpreted language but not a 
  compiled language. So method overloading is not
  posisible  

. But Dynamic (run-time) polymorphism is the 
  polymorphism exited at run-time. So method 
  overriding is possible.

EXAMPLE 

class JsNuggets {
  displayContent() {
    console .log('Content posted');
  }
}
class Instagram extends JsNuggets {
  displayContent() {
    console.log('Content posted on Instagram');
  }
}
class Whatsapp extends JsNuggets {
  displayContent() {
    console.log('Content posted in Whatsapp');
  }
}
const obj = [new Instagram(), new Whatsapp()];
obj.forEachfunction (msg) {
  msg.displayContent();
});

output:
// Content posted in Instagram
// Content posted in Whatsapp




*/ 