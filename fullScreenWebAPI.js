/* FullScreen mode can be achieved in a web page using  the API Provided on that HTML element.
A  HTML element like an video can be viewed in fullscreen mode by using requestFullscreen() method.

Fullscreen API works on standard HTML elements.

It doesn't work on <dialog> element and elements inside iFrame  where Iframe doesn't have allowfullscreen attribute set
*/

/* Request Fullscreen
     requestFullscreen() accepts a single parameter and returns a promise.
      
     { navigationUI: 'auto','hide','show'}

     "hide"
     The browser's navigation interface willl be hiddeen "show"
     The browser will present page navigation controls and possibly
     The browser will choose which of the above settings to apply.This is the default value
     
     <video id="video" width="320" height="240" control>
      <source src="src-video" type="video/mp4"/>
     </video> 

     document
          .getElementById("video")
          .requsetFullscreen()
          .catch((err) => console.log("couldn't open in fullscreen mode"));
   
          EXIT FULLSCREEN
           
              Exit from fullscreen mode is achieved using exitFulcreen()
              method on document opbject document.exitFullscreen()
               
              Docment objecct has two event handlers changes in fullscreen.
              
              document.onfullscreenchange - emits events, that represents
              transition between fullscreen mode or not.
              
              document.onfullscreenerror - Error handler for fullscreen
              error event
              
              
            

    
