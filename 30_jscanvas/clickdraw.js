// retrieve node in DOM via ID
var c = document.getElementById("slate");

// instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

// init global state var
var mode = "rect";

var toggleMode = (e) => {
    console.log("toggling...");
    if(mode == "rect"){
        mode = "circle"
    }
    else{
        mode = "rect";
    }
    bToggler.innerHTML = mode
}

var drawRect = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(mouseX, mouseY, 30, 70);

    console.log("mouseclick registered at ", mouseX, mouseY);
}

var drawCircle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

var draw = (e) => {
    if(mode == "rect"){
        return drawRect(e);
    }
    else if(mode == "circle"){
        return drawCircle(e);
    }
}

var wipeCanvas = function(){
    ctx.clearRect(0, 0, 600, 600);
}

c.addEventListener("click", draw);

var bToggler = document.getElementById("buttonToggle");
// if you want the button to start as rect and not rect|circ then uncomment the line below
// bToggler.innerHTML = mode
bToggler.addEventListener("click", toggleMode);
var clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);
