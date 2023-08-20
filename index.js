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
        rendermath.innerHTML = rendermath.innerHTML + "PROVED (ENDS WITH ONE)";
    }
    else{
        document.getElementById("rendermath").style.fontFamily="Space Grotesk,sans-serif";
        rendermath.innerHTML = "Invalid Number"
    }
}

function calculating(){
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

    else {
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

var topcontainer = document.getElementById("topcontainer")

window.onscroll = function(e) {
  scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;
  if (scrollTop >= stop) {
    topNav.className = 'fixed';
    topcontainer.className = 'fixtopcontainer';
    
  } else {
    topNav.className = '';
    topcontainer.className = 'topcontainer';
  }
}

/* standard vector token: 14Jl3M4 */

