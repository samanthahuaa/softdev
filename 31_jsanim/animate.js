var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

var ctx = c.getContext("2d");

ctx.fillStyle = "cyan"

var requestID;

var clear = (e) => {
    ctx.clearRect(0, 0, 500, 500);
}

var radius = 0;
var growing = true;

var drawDot = () => {
    if (requestID == null) {
        return
    }
    clear()
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.arc(250,250, radius, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()
    console.log(radius)
    requestID = window.requestAnimationFrame(drawDot)

    if (growing == true) {
        radius++
    } else {
        radius--
    }

    if (radius == 250 || radius == 0) {
        growing = !growing
    }
    
}

var stopIt = function() {
    console.log("stopIt invoked...")
    console.log(requestID)
    window.cancelAnimationFrame(requestID)
}

dotButton.addEventListener("click", drawDot)
stopButton.addEventListener("click", stopIt)