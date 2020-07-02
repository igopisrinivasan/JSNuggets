/* 
I18n & L10n
Internationalizational & Localization

The ListFormat object is useful for formatting list into
language-sensitive.

Example!

const cities = ['Chennai', 'Bangalore', 'Hyderabad'];
const formatter = new Intl.ListFormat('en', { style: 'long',
   type: 'conjuction' });
 
 console.log(formatter.formata(cities));
 // expected output: "chennai, Bangalore, and Hyderabad"

 console formatter2 = new Intl.ListFormat('en', { style: 'short',
   type: 'disjunction' });
   
 console.log(formatter2.formata(cities));
 // expected output: "chennai, Bangalore, or Hyderabad
 
 TYPE:
   The format of output message. possible values are,
   conjunction: This type stands for "and" - based lists
   (eg., A,B and C).
   Disjunction:This type stands for "or"- based lists
   (eg., A,B or C).
   Units:This type stands for list of values with units
   (eg., 5kg, 10kg).

Style:
    
     The length of output meesage. possible values are,
     Long: (eg, A,B and C).
     Short: (eg., A,B and C).
     Narrow: (eg., A B C).

     When style is Short or Narrow, Unit is the only Type allowed.

     DisplayName:
      
       The DisplayName object is useful for consistent translation of 
       language, region and script display names.
       

Example:
  
  const languagesInHindi







*/