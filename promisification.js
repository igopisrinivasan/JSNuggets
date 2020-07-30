/*
 
 PROMISIFIACTION IN JAVASCRIPT
 
 PROMISIFIACTION 
 
 "Promisifiaction" is a long word for a simple transformation.It's the conversion of a function that
 accepts a callback into a function that returns a promise.Such transformation are often required in 
 real-life, as many functions and libraries are callback-based.But promises are more convenient, so 
 it makes sense to promisify them.


callback function

function loadScript(src, callback)
{
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error('Script load error for ${src}));
   
  document.head.append(script);
}

// usage:

 loadScript('path/script.js', (err, script) => {...})

PROMISIFY

The new loadScriptPromise(src) function achieves the same result, but it accepts
only src (no callback) and returns a promise.

promise function 

let loadScriptProise = function (src)
{

  return new promise ((resolve, reject) => 
  {
    loadScript(src, (err, script) =>
    {
     else resolve(script);
    });
  })

}

// usage:
loadScriptPromise('path/script.js').then(...)

Let's proimosify it 

Now loadScriptpromise fits well in promise- based code.

As we can see, it delegates all the work to the original loadScript, providing its own callback that translates to
promise resolve/reject.

In practice we'll probabaly need to promisify many functions,so it makes sense, so it makes sense to use 
a helper. We'll call it promisify(f): it accepts a to-promisfy function f and returns a wrapper function.

That wrapper does the same as in the code above: returns a promise and passes the call to the original f ,
tracking the result in a custom callback.

function promisify(f)
{
 return function (... args)
 {
  // return a wrapper-function
  return new promise(resolve, reject) =>
  {
   function callback(err, result)
   {
    // our custom callback for f
     if (err)
     {
      reject(err);
     }
     else
     {
      resolve(result);
     }

  }

  args.push(callback);

  // append our custom callback
  // to the end of f arguments 

  f.call(this, ...args);
   // call the original function

  });
 });
});


// usage:
let loadsScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);



 
 */