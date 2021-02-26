let numRows = 0;
let numCols = 0;
let colorSelected;

function addR(){
  alert("Clicked Add Row")
}

function addC(){
  alert("Clicked Add Col")
}

function removeR(){
  alert("Clicked Remove Row")
}

function removeC(){
  alert("Clicked Remove Col")
}


function selected(){
  colorSelected = document.getElementByID("selectedID").value;
  console.log(colorSelected);
}

function fill(){
  alert("Clicked Fill All")
}

function clearAll(){
  alert("Clicked Clear All")
}

function fillU(){
  alert("Clicked Fill All Uncolored")
}
