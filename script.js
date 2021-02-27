let numRows = 0;
let numCols = 0;
let colorSelected;
let table = document.getElementById("grid");

function addR() {
  //add a TR
  let col;
  let row = document.createElement("TR");
  table.appendChild(row);

  //Inside the TR, add the number of columns as TD's
  if (numCols === 0) {
    //When we don't have any columns yet, just adding 1 square/row will increase the number of columns
    numCols++;
  }

  for (let i = 0; i < numCols; i++) {
    col = document.createElement("TD");
    row.appendChild(col);
  }

  numRows++;
}

function addC() {
  //Add an extra TD to every TR that you have
  let col;
  let row;

  if (numRows === 0) {
    //When we don't have any rows yet, just adding 1 square/column will increase the number of rows
    numRows++;
    let extra = document.createElement("TR");
    table.appendChild(extra);
  }

  for (let i = 0; i < numRows; i++) {
    row = document.querySelectorAll("tr")[i];
    col = document.createElement("TD");
    row.appendChild(col);
  }

  numCols++;
}

function removeR() {
  let row = table.rows.length - 1; //gets the index of the last row

  //edge case if there are none to remove
  if (numCols <= 0 || numRows <= 0) {
    alert("You need to add a row or column!");
  } else {
    document.getElementById("grid").deleteRow(row);
    numRows -= 1;
  }
  
}

function removeC() {
  let col = document.getElementById("grid").rows[0].cells.length - 1;
  
  //edge case if there are none to remove
  if (numCols <= 0 || numRows <= 0) {
    alert("You need to add a row or column!");
  } else {
    for (let i = 0; i < grid.rows.length; i++) {
      grid.rows[i].deleteCell(col);
      numRows -= 1;
    }
  }
  
}

function selected() {
  colorSelected = document.getElementByID("selectedID").value;
  console.log(colorSelected);
}

function fill() {
  alert("Clicked Fill All");
}

//READ: I left the simple implementation for this all the way at the bottom of the file
//If you prfer to do it on your own, carry on, otherwise enjoy the freebie
function clearAll() {}

function fillU() {
  alert("Clicked Fill All Uncolored");
}

/*
table.innerHTML = '';
numRows = 0;
numCols = 0;
*/
