  var userName;

   function resizeme() {
        
       document.getElementById("normalImg").style.height = (document.body.clientHeight - 100) * 0.9;
      
       }

      
 
    function greet() {
  
     if (navigator.cookieEnabled)
       userName = readCookie ("acad_username");
     if (userName) {
       alert("Hello " + userName + ", I missed you.");
     document.getElementById("normalImg").src ="EngHappy.jpg";
      }
     else {
      alert ('Hello, welcome to the world of academics.');
    }
    
    }

   function touchMe () {
    if (userName) {
     alert ("I like the attention, " + userName + ". Thank you.");

    }
   else {
     userName = prompt("What is your name?", "Enter your name here.");
      if (userName) {
        alert("It is great meeting you, " +userName + ".");

       
        if(navigator.cookieEnabled) {
          
           writeCookie("acad_username", userName, 5 * 356);
         }
        else {
          alert ("Sorry. Cookies are'nt supported/enabled in your browser. I won't remember you later.");
         }
        
         }
       
      }
     document.getElementById("normalImg").src ="EngHappy.jpg";

     setTimeout("document.getElementById('normalImg').src = 'EngSad.jpg';",1*60*1000);
    }