var personalTimerWeb = (function(document){

   var pt;

   function start() {
     myTimer = setInterval(myClock, 1000);
     var c = 5;

     function myClock() {
       document.getElementById("demo").innerHTML = --c;
       if (c == 0) {
         clearInterval(pt);
         alert("Reached zero");
       }
     }
   }

   function end() {
       clearInterval(pt)
   }

   return {start:start, end:end};
 })(document);
