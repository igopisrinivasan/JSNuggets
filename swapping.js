/*
  SWAPPING TWO 
  WORDS OF A STRING 
  IN JAVASCRIPT
 
  HOW WOULD YOU SOLVE THIS?
   
   How to swap the first name and the last name in a 
   string?
    
   For example, consider the name 'chandler Bing', can
   you convert it into the following format using a 
   single line of codein javascript?
     
   Bing,  Chandler.

   THE SOLUTION 

      Yes, we can use string replace() method to achieve this!
      Each word in the string can be matched using the '\w+'
      pattern matcher.

      The regular expression will be:
           '/(\w+)\s(\w+)/' .
   
    In regex '\w+' is used inside a parenthesis, this
    because the replace method allows accesing the string
    matching the pattern inside the paranthesis
    separately.
    
    const name = 'chandler Bing';
    const swppedName = name.replace(/(\W+)\S(\W+)/,
      (matchedstring, p1, p2) => {
          return '${p2}, ${p1}';
     {);
     console.log(swappedName); // Bing, Chandler        

CONT..
 
 The parameters p1 and p2 contain the value of the
 string matching the pattern inside the paranthesis.

  p1 - 'Chandler'; p2 - 'Bing'

  The callback method in replace(), has the following
  
  syntax:
    
    (matched_substring, p1, p2, , ... pn,
        offset, whole_string) => {
        return statement;
     
    };
    
    The parameters p1,p2, ...pn; corresponds the  regex
    patterns used inside the parenthesis. n  is the number 
    of parenthesized patterns in the regular expression.
    
    THE ONE LINEAR SOLUTION
     
       The stru





*/