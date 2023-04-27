// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  // e.stopPropagation();
};


//Q: Does the order in which the event listeners are attached matter?
//A: It does not because it does not change the relationship between parent and child elements or booleans.

//Predict, then test...
//Q: What effect does the boolean arg have in each?
// A: makes the function called in the event listener run first
//   (Leave exactly 1 version uncommented to test...)

for (var x=0; x < tds.length; x++) {
  // tds[x].addEventListener('click', clicky, true);
  tds[x].addEventListener('click', clicky, false);
}

for (x=0; x < trs.length; x++) {
  // trs[x].addEventListener('click', clicky, true);
  trs[x].addEventListener('click', clicky, false);
}

table.addEventListener('click', clicky, true);
// table.addEventListener('click', clicky, false);

// When they are all false, the order is cell, row, table
// whatever is true will go first and the rest of the function calls will go in order of child to parent
// stopPropagtion will only show the first thing. the first thing is dependent on the order of child to parent and also what is true/false
