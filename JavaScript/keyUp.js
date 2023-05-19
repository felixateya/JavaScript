document.getElementById("searchInput").onkeyup = function () {
  var searchInput = document.getElementById("searchInput").value;
  document.getElementById("searchOutput").innerText = searchInput;
};

document.getElementById("submit").onclick = function () {
  var CarBrand = document.getElementById("CarBrand").value;
  document.getElementById("output1").innerText = CarBrand;
};
document.getElementById("fastfoods").onchange = function () {
  var fastfoods = document.getElementById("fastfoods").value;
  document.getElementById("outputTwo").innerText = fastfoods;
};

function displayFunction() {
  console.log("I'm happy!");

  let statement = "Learning functions";
  console.log(statement);
}

displayFunction();
// document.getElementById("button").onclick = displayFunction;

// create a function that takes two variables and multiplies them

function multiplyFunction() {
  let a = 20;
  let b = 45;

  let c = a * b;

  document.getElementById("outputuno").innerText = c;
}


// display the output on the UI
multiplyFunction();



// create a function that concatenates two strings from input



// display the out put on the UI
document.getElementById("concatenateBtn").onclick = function () {
  a = document.getElementById("string1").value;
  b = document.getElementById("string2").value;
  c = a + " " + b;
  document.getElementById("result").innerText = c;
};

// converting kilometers to meters
function toMeters() {
  let km = document.getElementById("inputKm").value;

  let rate = 1000;
  let meters = km * rate;

  document.getElementById("resultMeters").innerText = meters;
}

document.getElementById("calculate").onclick = toMeters;

// coverting from degrees celcius to farenheit

function toFarenheit() {
  let deg = document.getElementById("inputTemp").value;

  let celcius = 33.8;
  let farenheit = deg * celcius;

  document.getElementById("resultTemp").innerText = farenheit;
}

document.getElementById("conversion").onclick = toFarenheit;

