// Team guac no salsa :: Samantha Hua, Vansh Saboo
// SoftDev pd0
// K28 -- Getting more comfortable with the dev console and the DOM
// 2023-04-05w
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO"); // seen immediately in the console

var i = "hello"; // value is returned when only the variable is inputted
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
// you can access their fields with o["{name of field}"] (like a dictionary)
var o = { 'name' : 'Thluffy',
          age : 1024,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var addFact = function() {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = "7! = " + fact(7);
  list.appendChild(newitem);
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


// Removes element at n-th index
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove(); 
};


// Items 2 through 7 are always overlaid blue
// Red has a priority over black, blue has a priority over red
// This function makes all of the elements in the list red by default
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

// According to the list (0-indexed), even indexed elements are made red, and odd indexed elements are made blue
// In the HTML depiction (1-indexed), the odds are made red and the evens are made blue
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

function fact(x) {
    if (x < 2) {
        return 1 // base case
    }
    return x*fact(x-1)
}


function fib(x) {
    if (x < 2) {
        return x // base case
    }
    return fib(x-1)+fib(x-2)
}

function gcd(a, b){
  if(b == 0){
    return a
  }
  return gcd(b, a % b)
}


// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  // body
  return retVal;
};


addFact()
addFib()
addGCD()