// Resize events in Javascript and adding timeout function
/*
This kind of event can become processor intensive as it will fire 
while the window is resizing too (for every pixel of change!). Generally 
it will be paired with debounce functionality, such as a timeout 
function like the following:
*/
window.addEventListener("resize", throttleResize);

var resizeTimeout;
function throttleResize() {
  if (!resizeTimeout) { // ignore if already running
    resizeTimeout = setTimeout( ()=>{
      resizeTimeout = null;
      handleResize();
      }, 60) //delay time
  }
}

function handleResize() {
  // code to run on resize
}