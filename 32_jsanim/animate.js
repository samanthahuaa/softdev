// access canvas and buttons via DOM (update HTML source to align)
var c = document.getElementById("playground");
var dotButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

// instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d")

// only fill style in this animation is cyan so we can just define it here
ctx.fillStyle = "cyan"

var requestID;

var clear = () => {
    // e.preventDefault()
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
    if (growing) {
        radius++
    } else {
        radius--
    }

    // switching point from growing to shrinking and vice versa
    if (radius == 250 || radius == 0) {
        growing = !growing
    }
}



// For the Animaniac?
var stopIt = function() {
    console.log("stopIt invoked...")
    console.log(requestID)

    // use the global var to know which request to cancel
    window.cancelAnimationFrame(requestID)
}
 

var dvdLogoSetup = function(){
    clear()

    window.cancelAnimationFrame(requestID);

    // The image is 600 x 400, so we want to preserve the dimensions
    var rectWidth = 60; 
    var rectHeight = 40;

    // coordinates are for the top left corner of the rectangle/image
    var rectX = Math.floor(Math.random() * (500 - rectWidth));
    var rectY = Math.floor(Math.random() * (500 - rectHeight));

    var xVel = 1;
    var yVel = 1;
    
    // load up img
    var logo = new Image();
    logo.src = "logo_dvd.jpg"; 

    var dvdLogo = function(){
        // clear canvas
        ctx.clearRect(0, 0, c.width, c.height);
        
        // uncomment line below if you want rectangle instead of image
        // ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);

        // if it's on a side of the canvas, change direction (x or y depending on which side)
        if(rectX == 0 || rectX + rectWidth == 500){
            xVel *= -1; 
        }
        
        if(rectY == 0 || rectY + rectHeight == 500){
            yVel *= -1;
        }

        // change coords of rect/img based on velocity
        rectX += xVel;
        rectY += yVel;

        // want to rerun dvdLogo NOT dvdLogoSetup bc we just want to keep moving the rect/img
        requestID = window.requestAnimationFrame(dvdLogo);
    }
    dvdLogo(); 

}

// event listeners
dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
dvdButton.addEventListener("click", dvdLogoSetup); 