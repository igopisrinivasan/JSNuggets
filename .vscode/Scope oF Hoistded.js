/*
Scope Of Hoisted Variable In Javascript

Hoisting:
  
   Variable Hoisting is a behaviour in javasript where variable declaration are moved to the top of the scope before execution.

What exactly does 'top of scope ' mean?

The hoisted variable exits in the whole function block in which it is declared.

Let us see an example ->

Example 1 
We know the variable not defined w9ill return 'undefined'.

function fn()
{
 var name;
 cionsole.log(name);
 if (true)
 {
   name = 'Hello';
 }
}

Output: undefined

Example 2 
What happens whern the varaiable is not declared before the console statement.

function fn() 
{
 console.log(name);
 if(true)
 {
   var name = 'Js-nuggets';
 }
}

output: undefined

Because of the concept odf hoisting, it does not throw error but just returns undefined.

Example 3 

function fmn() 
{
    console.log(name);
    if (true)
    {
      (function () 
      { 
        // self-invoking function 
        var name = 'followers!';
      })();

    }
}

Output: ReferenceError: name is not defined

The scope of the hoisted variable is extended only up to its function block.
    


*/