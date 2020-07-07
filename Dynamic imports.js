/*

DYNAMIC IMPORTS 
IN JAVASCRIPT

DYNAMIC IMPORTS

. The standard import syntax is static and will always 
  result in all code in the imported module being
  evaluated at load time. In situations where you wish to
  load a module condinally or on demand, you can use a 
  dynamic import instead.

. To dynamically import a module, the import keyword may
be called as a function. when used this way, it returns 
a promise.

import('/modules/my-module.js')
.then((module) => {
    // Do something with the module.
});

. This form also supports the await keyword.

 let module = await import(/ /modules/my-module.js');


 Note: Dynamic Imports ES 2020 (ES 11) feature is fully supported
 by Chrome 63*, firefox 67*, Safari 11.l1* and Nodejs 13.2.0 (By
    importing either commonJS or ES module files)

WHEN TO USE DYNAMIC IMPORT 
.Loading code om demand

button.addEventListener('click' , event => {
    import('./dialogBox.js')
    .then(dialogBox => {
        dialogBox.open();
    })
    .catcherror => { / Error handling / })

});

.Conditional loading of modules

if (isLegacyPlatform()) {
    import(...)
    .then(...);
  
}

. Computed module specifiers

import('messages_${getLocate()}.js')
.then(...);

WHY WE NEED TO USE DYNAMIC IMPORT

. When importing statically, it significantly slows the 
  loading of your code and there is a low likelihood that
  you will need the code you are importing, or you will
  not need it until a leter time.
  
. When importing statically, it significantly increases your 
  program's memory usage and there is a low
  likelihood that you will need the code you are 
  importing.
  
. When the module you are importing does not exist at load
  time.

. When the import specifier string neds to be constructed
  dynamically. (Static import only supports static 
  specifiers)

.When the module being imported has side effects, and you
do not want those side effects unless some condituion is 
true. (It is recommended not to have any side effects in 
a module, but you sometimes cannot control this in your 
module dependencies)  

*/
 