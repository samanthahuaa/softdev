// retrieve node in DOM via ID
var c = document.getElementById("playground")
var dotButton = document.getElementById("buttonCircle")
var stopButton = document.getElementById("buttonStop")

// instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d")

// only fill style in this animation is cyan so we can just define it here
ctx.fillStyle = "cyan"

var requestID;

var clear = (e) => {
    ctx.clearRect(0, 0, 500, 500);
}

// init global state var
var radius = 0;
var growing = true;

var drawDot = () => {
    // clear the screen so we can overlay a new frame
    clear()

    // draws the circle
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.arc(250,250, radius, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()
    window.cancelAnimationFrame(requestID)

    // need to update the requestID so the stop function can know which request to cancel
    requestID = window.requestAnimationFrame(drawDot)

    // radius increases if the circle is growing vice versa
    if (growing == true) {
        radius++
    } else {
        radius--
    }

    // switching point from growing to shrinking and vice versa
    if (radius == 250 || radius == 0) {
        growing = !growing
    }

}

var stopIt = function() {
    console.log("stopIt invoked...")
    console.log(requestID)

    // use the global var to know which request to cancel
    window.cancelAnimationFrame(requestID)
}

dotButton.addEventListener("click", drawDot)
stopButton.addEventListener("click", stopIt)
