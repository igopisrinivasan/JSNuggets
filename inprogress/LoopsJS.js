/*
DIFFERENT WAYS TO EXIT JAVASCRIPT LOOPS

BREAK KEYWORD 

let vowels=['a','e','i','o','u',];
for(const vowel of vowels)
{
  console.log(vowel);
  if(vowel==='i')
  {
    break;
  } 
}

// console output - a  e i
  
 As it can be seen when the vowel equals 'i' the condition satisfies, the brak statement is next,
 for of loop stops with that.

SOME METHOD

let vowels=['a','e','i','o','u'];
vowels.some(vowel =>
{
  console.log(vowel);
  return vowel==='i';
});
//console output - a e i

The sopme method is an array method
that lets ypu check if atleast one opf the elements of
the given array staisfies the given condition and
exits the loop.

EVERY METHOD

let numbers = [2, 10, 12, 7, 16, 14];
numbers.every(number => {
  console.log(number);
  return (number % 2 === 0);
});
// console output - 2 10 12 7

The every method is another array method which can be
used to exit an array.It functions in exactly the
opposite way of some method.

In the above code the condition is to check if "every"
element is an even number, when the condition fails
the loop is exited.



*/