// Team guac no salsa :: Samantha Hua, Vansh Saboo
// SoftDev pd0
// K28 -- Getting more comfortable with the dev console and the DOM
// 2023-04-05w
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
var addFact = function() {
  var list = document.getElementById("thelist"); //the ol has the id thelist. this var allows us to reference it
  var newitem = document.createElement("li"); 
  newitem.innerHTML = "7! = " + fact(7); // changes the values between the tags for the li we just created
  list.appendChild(newitem); // adds the new element to the existing ol
};

var addFib = function() {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = "F_7 = " + fib(7);
  list.appendChild(newitem);
};

var addGCD = function() {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = "GCD of 280 and 49 is " + gcd(280, 49);
  list.appendChild(newitem);
};

// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  // body
  return retVal;
};

// we experimented with arrow function syntax and more notes on it can be found in notes.txt

const fact = (x) => {
  // body code is the same as it was in 28_jsdom

  if (x < 2) {
    return 1 // base case
  }
  return x*fact(x-1)
}

const fib = (x) => {
  if (x < 2) {
    return x // base case
  }
  return fib(x-1)+fib(x-2)
}

// because gcd has two parameters, we have (a, b)
const gcd = (a, b) => {
  if(b == 0){
    return a
  }
  return gcd(b, a % b)
}

// BUTTONS

// create variables to reference HTML elements
var fibButton = document.getElementById("fib")
var facButton = document.getElementById("fac")
var gcdButton = document.getElementById("gcd")

// add event listeners to the buttons so the correct function runs when clicked
fibButton.addEventListener('click', addFib())
facButton.addEventListener('click', addFact())
gcdButton.addEventListener('click', addGCD())