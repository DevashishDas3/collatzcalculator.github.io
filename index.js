const input = document.getElementById('testnumber');
var tracker = 0;
var myNumber = 0;
document.getElementById("submit").onclick = function calculating(){
    myNumber = document.getElementById("testnumber").value;
    rendermath.innerHTML = " "
    if (myNumber > 0) {
        while (myNumber !== 1) {
            tracker = tracker + 1;
            if(tracker == 1){
                document.getElementById("rendermath").style.fontFamily="Space Grotesk,sans-serif";
                rendermath.innerHTML = rendermath.innerHTML + myNumber + "<br>";
            }
            else if (myNumber % 2 === 0) {                                     
                myNumber = myNumber / 2; 
                document.getElementById("rendermath").style.fontFamily="Space Grotesk,sans-serif";
                rendermath.innerHTML = rendermath.innerHTML + " ---> (Divide By 2) "+ myNumber + "<br>";
            } 
            else if (myNumber % 2 !== 0) {
                myNumber = (myNumber * 3) + 1;
                document.getElementById("rendermath").style.fontFamily="Space Grotesk,sans-serif";
                rendermath.innerHTML = rendermath.innerHTML + " ---> (Multiply By Three Add One) "+ myNumber + "<br>";
            }
        }
        /* alert(fits collatz conjecture) */
        rendermath.innerHTML = rendermath.innerHTML + "PROVED (ENDS WITH ONE)";
    }
    else{
        document.getElementById("rendermath").style.fontFamily="Space Grotesk,sans-serif";
        rendermath.innerHTML = "Invalid Number"
    }
}

function calculating(){
const input = document.getElementById('testnumber');
var tracker = 0;
var myNumber = 0;
    myNumber = document.getElementById("testnumber").value;
    rendermath.innerHTML = " "
    if (myNumber > 0) {
        while (myNumber !== 1) {
            tracker = tracker + 1;
            if(tracker == 1){
                document.getElementById("rendermath").style.fontFamily="Space Grotesk,sans-serif";
                rendermath.innerHTML = rendermath.innerHTML + myNumber + "<br>";
            }
            else if (myNumber % 2 === 0) {                                     
                myNumber = myNumber / 2; 
                document.getElementById("rendermath").style.fontFamily="Space Grotesk,sans-serif";
                rendermath.innerHTML = rendermath.innerHTML + " ---> (Divide By 2) "+ myNumber + "<br>";
            } 
            else if (myNumber % 2 !== 0) {
                myNumber = (myNumber * 3) + 1;
                document.getElementById("rendermath").style.fontFamily="Space Grotesk,sans-serif";
                rendermath.innerHTML = rendermath.innerHTML + " ---> (Multiply By Three Add One) "+ myNumber + "<br>";
            }
        }
       /* alert(fits collatz conjecture) */
        rendermath.innerHTML = rendermath.innerHTML + "PROVED (ENDS WITH ONE)";
    }
    else{
        document.getElementById("rendermath").style.fontFamily="Space Grotesk,sans-serif";
        rendermath.innerHTML = "Invalid Number";
    }
}



input.addEventListener('keyup', (e) =>{
    if (e.keyCode === 13){
        calculating();
    }
})

var topNav = document.getElementById("topNav"),
  stop = topNav.offsetTop,
  docBody = document.documentElement || document.body.parentNode || document.body,
  hasOffset = window.pageYOffset !== undefined,
  scrollTop;

window.onscroll = function(e) {
  scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;
  if (scrollTop >= stop) {
    topNav.className = 'fixed';
  } else {
    topNav.className = '';
  }
}
/*
window.onscroll = function(e) {
  scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;
  if (scrollTop >= stop) {
    conjecthead.className = 'wa';
  } else {
    conjecthead.className = '';
  }
}
*/


/*
const input = document.getElementById('testnumber');
var tracker = 0;
var myNumber = 0;
document.getElementById("submit").onclick = function calculating(){
     document.getElementById("rendermath");
     rendermath.innerHTML = "Hello World";
}
*/

/*
const input = document.getElementById('testnumber');
var tracker = 0;
var myNumber = 0;
document.getElementById("submit").onclick = function calculating(){
    var tracker = 0;
    var myNumber = 0;
    myNumber = document.getElementById("testnumber").value;
        if (myNumber > 0) {
            while (myNumber !== 1) {
                tracker = tracker + 1;
                if(tracker == 1){
                    document.getElementById("rendermath");
                    rendermath.innerHTML = myNumber + "<br>";
                }
                else if (myNumber % 2 === 0) {                                     
                    myNumber = myNumber / 2; 
                    document.getElementById("rendermath");
                    rendermath.innerHTML = " ---> (Divide By 2) "+ myNumber + "<br>";
                } 
                else if (myNumber % 2 !== 0) {
                    myNumber = (myNumber * 3) + 1;
                    document.getElementById("rendermath");
                    rendermath.innerHTML = " ---> (Multiply By Three Add One) "+ myNumber + "<br>";
                }
            }
            alert("Fits Collatz Conjecture")
            rendermath.innerHTML = "<br>" + "PROVED (ENDS WITH ONE)";
        }
        else{
            document.getElementById("rendermath");
            rendermath.innerHTML = "Invalid Number" + "<br>" + tracker;
        }
    }


    function calculating(){
        var tracker = 0;
        var myNumber = 0;
        myNumber = document.getElementById("testnumber").value;
            if (myNumber > 0) {
                while (myNumber !== 1) {
                    tracker = tracker + 1;
                    if(tracker == 1){
                        document.getElementById("rendermath");
                        rendermath.innerHTML = myNumber + "<br>";
                    }
                    else if (myNumber % 2 === 0) {                                     
                        myNumber = myNumber / 2; 
                        document.getElementById("rendermath");
                        rendermath.innerHTML = " ---> (Divide By 2) "+ myNumber + "<br>";
                    } 
                    else if (myNumber % 2 !== 0) {
                        myNumber = (myNumber * 3) + 1;
                        document.getElementById("rendermath");
                        rendermath.innerHTML = " ---> (Multiply By Three Add One) "+ myNumber + "<br>";
                    }
                }
                alert("Fits Collatz Conjecture")
                rendermath.innerHTML = "<br>" + "PROVED (ENDS WITH ONE)";
            }
            else{
                document.getElementById("rendermath");
                rendermath.innerHTML = "Invalid Number" + "<br>" + tracker;
            }
        }
*/

/*
const input = document.getElementById('testnumber');
var tracker = 0;
var myNumber = 0;
document.getElementById("submit").onclick = function calculating(){
    var tracker = 0;
    var myNumber = 0;
    myNumber = document.getElementById("testnumber").value;
        if (myNumber > 0) {
            while (myNumber !== 1) {
                tracker = tracker + 1;
                if(tracker == 1){
                    document.write('<p class = "jscss" style = "text-align: center">' + myNumber + "<br>"+ '</p>');
                }
                else if (myNumber % 2 === 0) {                                     
                    myNumber = myNumber / 2; 
                    document.write('<p class = "jscss" style = "text-align: center">' + " ---> (Divide By 2) "+ myNumber + "<br>" + '</p>');
                } 
                else if (myNumber % 2 !== 0) {
                    myNumber = (myNumber * 3) + 1;
                    document.write('<p class = "jscss" style = "text-align: center">' + " ---> (Multiply By Three Add One) "+ myNumber + "<br>" + '</p>');
                }
            }
            alert("Fits Collatz Conjecture")
            document.write('<p style = "text-align: center">'+ "PROVED (ENDS WITH ONE)" + '</p>');
        }
        else{
            document.write("Invalid Number")
        }
    }


function calculating(){
    var tracker = 0;
    var myNumber = 0;
    myNumber = document.getElementById("testnumber").value;
        if (myNumber > 0) {
            while (myNumber !== 1) {
                tracker = tracker + 1;
                if(tracker == 1){
                    document.write('<p class = "jscss" style = "text-align: center">' + myNumber + "<br>"+ '</p>');
                }
                else if (myNumber % 2 === 0) {                                     
                    myNumber = myNumber / 2; 
                    document.write('<p class = "jscss" style = "text-align: center">' + " ---> (Divide By 2) "+ myNumber + "<br>" + '</p>');
                } 
                else if (myNumber % 2 !== 0) {
                    myNumber = (myNumber * 3) + 1;
                    document.write('<p class = "jscss" style = "text-align: center">' + " ---> (Multiply By Three Add One) "+ myNumber + "<br>" + '</p>');
                }
            }
            alert("Fits Collatz Conjecture")
            document.write('<p style = "text-align: center">'+ "PROVED (ENDS WITH ONE)" + '</p>');
        }
        else{
            document.write("Invalid Number")
        }
    }

input.addEventListener('keyup', (e) =>{
    if (e.keyCode === 13){
        calculating();
    }
})
*/


/*
document.getElementById("myElement").style.fontFamily="Impact,Charcoal,sans-serif";
myElement.innerHTML = "Hello";
*/

/*
var tracker = 0;
var myNumber = 0;
document.getElementById("submit").onclick = function() {
    myNumber = document.getElementById("testnumber").value;
    if (myNumber > 0) {
        while (myNumber !== 1) {
            tracker = tracker + 1;
            if(tracker == 1){
                document.write('<p class = "jscss" style = "text-align: center">' + myNumber + "<br>"+ '</p>');
            }
            else if (myNumber % 2 === 0) {                                     
                myNumber = myNumber / 2; 
                document.write('<p class = "jscss" style = "text-align: center">' + " ---> (Divide By 2) "+ myNumber + "<br>" + '</p>');
            } 
            else if (myNumber % 2 !== 0) {
                myNumber = (myNumber * 3) + 1;
                document.write('<p class = "jscss" style = "text-align: center">' + " ---> (Multiply By Three Add One) "+ myNumber + "<br>" + '<p>');
            }
        }
        alert("Fits Collatz Conjecture")
        document.write('<span style="font-family:Space Grotesk, Space Grotesk"><br> PROVED (ENDS WITH ONE) <span>')
    }
    else{
        document.write("Invalid Number")
    }
}

*/


/*
&& Number.isInteger(myNumber))




    if (myNumber > 0) {
        while (myNumber !== 1) {
            if (myNumber % 2 === 0) {                                      
                myNumber = myNumber / 2; 
            } 
            else if (n % 2 !== 0) {
                myNumber = (myNumber * 3) + 1;
            }
            console.log(myNumber)
        }
    }
*/


