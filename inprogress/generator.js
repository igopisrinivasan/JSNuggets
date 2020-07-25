/*

GENERATORS 
in JAVASCRIPT 

PART-1

GENERATORS:

Generators, are a function which an be
stopped in a mid-way and continued from
where it is stopped.

In short, generators are appeared to be 
functions but it behaves like iterators.

// Generator function syntax
 function* name() {
     yield statement;
 }

 Keyword 'yield':

  Generator Function, can have a keyword yield. It 
  is an opertor with which generator can pause
  itself. whenever generator encounters the 
  keyword yeld it returns the value specified
  after it.
  
  Generator.prototpe.next():

   Genertor function has a next() method. Every 
   invocation of next() yeilds an object.

   This method returns an object with two 
   properties, done and value.


   when a generetor functon has nothing left to
   yield, done propertyu os set to true and value
   will be undefined.

   INFINITE DATA STREAMS 
    It is possible to create generaotors that never 
    ends.

    EXAMPLE!

    function * generatorFunction() {
      var num = !;
      while(num > 0) {
          yeild num;
          num = num + 1;
      }
      
    }
 var numbers = generetorFunction();
  console.log(numbers.next());
  // {"value": 1, "done": false}
  console.log(numbers.next());
  // {"value":2, "done":false}

  




*/ 