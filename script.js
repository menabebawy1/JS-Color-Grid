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
    col.style.backgroundColor = "white";
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
    col.style.backgroundColor = "white";
    row.appendChild(col);
  }

  numCols++;
}

function removeR() {
  if (numRows === 0) {
    alert("You need to add a row!");
  } else {
    table.deleteRow(numRows - 1);
    numRows--;
    // console.log(`rows: ${numRows}`);
  }
}

function removeC() {
  if (numCols === 0) {
    alert("You need to add a column!");
  } else {
    let row = document.querySelectorAll("tr");
    for (let i = 0; i < numRows; i++) {
      row[i].removeChild(row[i].lastChild);
    }
    numCols--;
    // console.log(`col: ${numCols}`);
  }
}

// selected() begin
function selected() {
  let colors = ["Red", "Green", "Blue", "Yellow"];
  let selected = document.getElementById("selectedID").value;
  if (colors.find((element) => element === selected) !== undefined) {
    colorSelected = selected;
  }
  table.addEventListener("click", (event) => {
    if (event.target.matches("td")) {
      event.target.style.backgroundColor = document.getElementById(
        "selectedID"
      ).value;
    }
  });
}
// selected() end

function fill() {
  let colors = ["Red", "Green", "Blue", "Yellow"];
  let selected = document.getElementById("selectedID").value;
  if (colors.find((element) => element === selected) !== undefined) {
    colorSelected = selected;
  }
  for (let i = 0; i < table.childNodes.length; i++) {
    for (let j = 0; j < table.childNodes[i].childNodes.length; j++) {
      table.childNodes[i].childNodes[j].style.backgroundColor = colorSelected;
    }
  }
}

function fillU() {
  let colors = ["Red", "Green", "Blue", "Yellow"];
  let selected = document.getElementById("selectedID").value;
  if (colors.find((element) => element === selected) !== undefined) {
    colorSelected = selected;
  }
    for (let i = 0; i < table.childNodes.length; i++) {
      for (let j = 0; j < table.childNodes[i].childNodes.length; j++) {
        if ((table.childNodes[i].childNodes[j].style.backgroundColor) === "white"){
          table.childNodes[i].childNodes[j].style.backgroundColor = colorSelected;
        }
      }
    }
  }


//clearAll() begin
function clearAll() {
  for (let i = 0; i < table.childNodes.length; i++) {
    for (let j = 0; j < table.childNodes[i].childNodes.length; j++) {
      table.childNodes[i].childNodes[j].style.backgroundColor = "white";
    }
  }
}
//clearAll() end
