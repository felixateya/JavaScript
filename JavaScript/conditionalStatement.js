//CONDITIONAL STATEMENTS: IF - ELSE

/* TASK: TRAFFIC LIGHTS
- RED
-AMBER
-GREEN
*/

let stop = "red";
let wait = "amber";
console.log("🚀 ~ file: conditionalStatement.js:11 ~ wait:", wait)
let go = "green";

if (stop == "blue") {
  console.log("STOP");
} else if (wait == "yellow") {
  console.log("WAIT");
} else if (go == "red") {
  console.log("GO");
} else {
  console.log("ERROR");
}

/*TASK 2: CHECK AGE - DETERMINE INCOME
0 - 17 ==> allowance
18 - 22 ==> stipend
23 - 65 ==> salary
Above 65 ==> pension
*/

document.getElementById("submit").onclick = function clicker() {
  age = document.getElementById("age").value;
  // console.log("🚀 ~ file: conditionalStatement.js:32 ~ clicker ~ age:", age)
  income = document.getElementById("salary").value;
  // console.log("🚀 ~ file: conditionalStatement.js:33 ~ clicker ~ income:", income)

  if (age > 0 && age <= 17) {
    document.getElementById("display").innerText =
      "allowance is:" + "  " + income;
  } else if (age >= 18 && age <= 22) {
    document.getElementById("display").innerText = "stipend is:" + " " + income;
  } else if (age >= 23 && age <= 65) {
    document.getElementById("display").innerText = "salary is:" + " " + income;
  } else {
    document.getElementById("display").innerText = "pension is:" + " " + income;
  }
};

// dates

const D = new Date();

document.getElementById("dateOf").innerText = D.toUTCString();

var msec = Date.parse(D);

document.getElementById("milli").innerText = msec;

document.getElementById("msec").innerText = D.getMilliseconds();

document.getElementById("year").innerText = D.getFullYear();
document.getElementById("month").innerText = D.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[5];
document.getElementById("monthName").innerText = month;
document.getElementById("date").innerText = D.getDate();
document.getElementById("hours").innerText = D.getHours();
document.getElementById("mins").innerText = D.getMinutes();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[D.getDay()];

document.getElementById("day").innerHTML = day;

document.getElementById("fullDate").innerText =
  D.getFullYear() +
  ":" +
  month +
  ":" +
  D.getDate() +
  ":" +
  D.getHours() +
  ":" +
  D.getMinutes() +
  ":" +
  D.getSeconds();





  // HTML element where the date will be displayed
var dateDisplay = document.getElementById("date-display");

// Function to update the date display
function updateDateDisplay() {
  var currentDate = new Date();
  var seconds = currentDate.getSeconds();
  var milliseconds = currentDate.getMilliseconds()
  var minutes = currentDate.getMinutes();
  var hours = currentDate.getHours();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // January is month 0
  var year = currentDate.getFullYear();

  // Format the date and time
  var formattedDate = year + "-" + month + "-" + day;
  var formattedTime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

  // Update the display
  dateDisplay.innerText = formattedTime;
}

// Update the date display immediately
updateDateDisplay();

// Update the date display every second
setInterval(updateDateDisplay, 80);

// END OF DATES

// let dateDisplay = document.getElementById("date-display")

// function updateTimeDisplay() {
//   let todayDate = new Date();
//   let hours = todayDate.getHours();
//   let minutes = todayDate.getMinutes();
//   var seconds = todayDate.getSeconds();

//   let timeNow =  hours + ":" + minutes + ":" + seconds;

//   dateDisplay.innerText = timeNow;
// }

// updateTimeDisplay()

// setInterval(updateTimeDisplay, 1000)
// TASK 3:
/*
promocode = KARIBU then discount = 25%
only applicable if purchase is above 20,000
for purchases above 50,000 additional discount = 2%
for purchases above 100,000 additional discount = 5%

promocode = Nairobi then discount = 15%
applicable if purchase is above 10,000
*/

document.getElementById("generate").onclick = function () {
  var purchase = document.getElementById("purchase").value;
  console.log(purchase)
  var promocode = document.getElementById("promocode").value;
  var discount = 0;
  console.log(discount)

  if (promocode == "KARIBU" && purchase >= 20000) {
    discount = 0.25;
    if (promocode == "KARIBU" && purchase >= 50000 && purchase<100000) {
      discount += 0.02;
    } else if (promocode == "KARIBU" && purchase >= 100000) {
      discount += 0.05;
    }

    var amountPaid = purchase * (1 - discount);
    console.log(amountPaid)
    
    document.getElementById("amountPaid").innerText =
      "amount after discount:" + " " + amountPaid;
  } else if (promocode == "NAIROBI" && purchase >= 10000) {
    discount = 0.15;
    if (promocode == "NAIROBI" && purchase >= 50000 && purchase<100000) {
      discount += 0.02;
    } else if (promocode == "NAIROBI" && purchase >= 100000) {
      discount += 0.05;
    }
    var amountPaid = purchase * (1 - discount);
    console.log(amountPaid)
    
    document.getElementById("amountPaid").innerText =
      "amount after discount:" + " " + amountPaid;
  } else if (purchase < 20000 && promocode == "KARIBU") {
    document.getElementById("amountPaid").innerText =
      "amount to be paid:" + " " + purchase;
  } else if (purchase < 10000 && promocode == "NAIROBI") {
    document.getElementById("amountPaid").innerText =
      "amount to be paid:" + " " + purchase;
  } else if (!promocode) {
    document.getElementById("amountPaid").innerText =
      "amount to be paid:" + " " + purchase;
  } else {
    // invalid promo code entered, display error message and original purchase amount
    document.getElementById("amountPaid").innerText = "Invalid promo code!!!!!";
  }
};


