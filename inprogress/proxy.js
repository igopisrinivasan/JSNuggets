/*
 PROXY
 IN JAVA SCRIPT

 PROXY:
 A proxy object wraps another object and intercepts 
 operetion like reading/writing properties and some
 fundamtal operetions.

 SYNTAX:

  const proxy = new Proxy(target, hyandler);

  DESCRIPTION:

    proxy is created with two parametrs 

    . Target: Original object which you want
      to proxy.

    . Handler: Object that defines which
      operation to intercept and redefine 
      the intercepted operation.

     Example!
     
       const target = {
         name:"JsNuggets",
         place: "Chennai"    
       };
       const handler = {};
       const proxy = new Proxy(target, handler);
       console.log(proxy.name);
       // JsNuggets
       console.log(proxy.place);
       // Chennai
       
       If the handler object is empty, then the proxy
       behaves just like the original target object.

       To customize Proxy we should define functions in
       handler.

    Get Handler Method:

    get() method intercept when there is an attempt to
    read the properties of target object.

    EXAMPLE!

     const person = {
       name: "Jack",
       place: "chennai"
     };
     const handler = {
         get: function(target, prop) {
             return prop in target ? target[prop]
             : "Invalid prop"
         
         }
        };
     const newPerson = new Proxy(person, handler);
     console.log(newPerson.name);
     // Jack
     console.log(newPerson.age);
     // Invalid prop  
     
     Set Handler Method:
     set() method interecept when there is an attempt to
     write a property to target object.

     EXAMPLE!

      const person = {
          name: "Jack",
      };
      const handler = {
          set: function(target, prop, value) {
              if (prop === 'age') {
                  if (value < 100) {
                    target[prop] = value;
                  } else {
                      throw new RangeError("Invalid age")
                  } 
              }
          }
      };
      const newPerson = new Proxy(person, handler);
      newPerson.age = 25;
      console.log(newPerson,age); // 25
      newPerson.age = 110; // Throws on Expection.



      






*/