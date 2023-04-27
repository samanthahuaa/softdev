// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  // It stops the bubbling effect. The function is run once
  // e.stopPropagation();
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
// A: makes the function called in the event listener run first
//   (Leave exactly 1 version uncommented to test...)

// table.addEventListener('click', clicky, true); // table, cell, row
table.addEventListener('click', clicky, false); // cell, row, table

// Q: When user clicks on a cell, in what order will the pop-ups appear?
// A: table, cell, row