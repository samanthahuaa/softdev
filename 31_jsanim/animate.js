<<<<<<< HEAD
// retrieve node in DOM via ID
var c = document.getElementById("playground")
var dotButton = document.getElementById("buttonCircle")
var stopButton = document.getElementById("buttonStop")

// instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d")

// only fill style in this animation is cyan so we can just define it here
=======
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

var ctx = c.getContext("2d");

>>>>>>> db331fea9813b7b0dcc77e3d3590a1b2932fffdc
ctx.fillStyle = "cyan"

var requestID;

var clear = (e) => {
    ctx.clearRect(0, 0, 500, 500);
}

<<<<<<< HEAD
// init global state var
=======
>>>>>>> db331fea9813b7b0dcc77e3d3590a1b2932fffdc
var radius = 0;
var growing = true;

var drawDot = () => {
<<<<<<< HEAD
    // clear the screen so we can overlay a new frame
    clear()

    // draws the circle
=======
    if (requestID == null) {
        return
    }
    clear()
>>>>>>> db331fea9813b7b0dcc77e3d3590a1b2932fffdc
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.arc(250,250, radius, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()
<<<<<<< HEAD
    window.cancelAnimationFrame(requestID)

    // need to update the requestID so the stop function can know which request to cancel
    requestID = window.requestAnimationFrame(drawDot)

    // radius increases if the circle is growing vice versa
=======
    console.log(radius)
    requestID = window.requestAnimationFrame(drawDot)

>>>>>>> db331fea9813b7b0dcc77e3d3590a1b2932fffdc
    if (growing == true) {
        radius++
    } else {
        radius--
    }

<<<<<<< HEAD
    // switching point from growing to shrinking and vice versa
    if (radius == 250 || radius == 0) {
        growing = !growing
    }

=======
    if (radius == 250 || radius == 0) {
        growing = !growing
    }
    
>>>>>>> db331fea9813b7b0dcc77e3d3590a1b2932fffdc
}

var stopIt = function() {
    console.log("stopIt invoked...")
    console.log(requestID)
<<<<<<< HEAD

    // use the global var to know which request to cancel
=======
>>>>>>> db331fea9813b7b0dcc77e3d3590a1b2932fffdc
    window.cancelAnimationFrame(requestID)
}

dotButton.addEventListener("click", drawDot)
<<<<<<< HEAD
stopButton.addEventListener("click", stopIt)
=======
stopButton.addEventListener("click", stopIt)
>>>>>>> db331fea9813b7b0dcc77e3d3590a1b2932fffdc
