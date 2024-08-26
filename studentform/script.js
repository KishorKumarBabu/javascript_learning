var nam = document.getElementById("nam");
var ag = document.getElementById("ag");
var cour = document.getElementById("cour");
var gen = document.querySelector('input[name="gender"]');
var data = document.getElementById("data");
var overlay = document.querySelector(".popup-overlay");
var popup = document.querySelector(".popup2");
function stform() {
  var innam = nam.value;
  var inag = ag.value;
  var ingen = document.querySelector('input[name="gender"]:checked');
  var incour = cour.value;
  var indata = data.value;
  if (
    innam === "" ||
    inag === "" ||
    ingen === null ||
    incour === "" ||
    indata === ""
  ) {
    alert(" please check the field");
    return;
  }
  var genderValue = ingen.value;
  let newRow = document.createElement("tr");

  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");
  let cell3 = document.createElement("td");
  let cell4 = document.createElement("td");
  let cell5 = document.createElement("td");
  let cell6 = document.createElement("td");
  cell1.textContent = innam;
  cell2.textContent = inag;
  cell3.textContent = incour;
  cell4.textContent = genderValue;
  cell5.textContent = indata;
  var del = document.createElement("button");
  del.textContent = "delete";
  del.onclick = function () {
    dele(newRow);
  };
  del.style.backgroundColor = "red";
  cell6.appendChild(del);
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);
  newRow.appendChild(cell5);
  newRow.appendChild(cell6);
  document.getElementById("two").appendChild(newRow);
  nam.value = "";
  ag.value = "";
  let genderRadios = document.querySelectorAll('input[name="gender"]');
  genderRadios.forEach((radio) => {
    radio.checked = false;
  });
  cour.value = "";
  data.value = "";
}
function dele(row) {
  newRow=row
  popup.style.display = "Block";
  overlay.style.display = "Block";
}
function ok() {
  newRow.remove();
  popup.style.display = "none";
  overlay.style.display = "none";
}
function clearform() {
  nam.value = "";
  ag.value = "";
  let genderRadios = document.querySelectorAll('input[name="gender"]');
  genderRadios.forEach((radio) => {
    radio.checked = false;
  });
  cour.value = "";
  data.value = "";
}
