//CONDITIONAL STATEMENTS: IF - ELSE

/* TASK: TRAFFIC LIGHTS
- RED
-AMBER
-GREEN
*/

// let stop = "red";
// let wait = "amber";
// let go = "green";

// if (stop == "blue") {
//   console.log("STOP");
// } else if (wait == "yellow") {
//   console.log("WAIT");
// } else if (go == "red") {
//   console.log("GO");
// } else {
//   console.log("ERROR");
// }

/*TASK 2: CHECK AGE - DETERMINE INCOME
0 - 17 ==> allowance
18 - 22 ==> stipend
23 - 65 ==> salary
Above 65 ==> pension
*/

document.getElementById("submit").onclick = function clicker() {
  age = document.getElementById("age").value;
  income = document.getElementById("salary").value;

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

// const D = new Date();

// document.getElementById("dateOf").innerText = D.toUTCString();

// var msec = Date.parse(D);

// document.getElementById("milli").innerText = msec;

// document.getElementById("msec").innerText = D.getMilliseconds();

// document.getElementById("year").innerText = D.getFullYear();
// document.getElementById("month").innerText = D.getMonth();

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let month = months[9];
// document.getElementById("monthName").innerText = month;
// document.getElementById("date").innerText = D.getDate();
// document.getElementById("hours").innerText = D.getHours();
// document.getElementById("mins").innerText = D.getMinutes();

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let day = days[D.getDay()];

// document.getElementById("day").innerHTML = day;

// document.getElementById("fullDate").innerText =
//   D.getFullYear() +
//   ":" +
//   month +
//   ":" +
//   D.getDate() +
//   ":" +
//   D.getHours() +
//   ":" +
//   D.getMinutes() +
//   ":" +
//   D.getSeconds();

// TASK 4:
/*
promocode = KARIBU then discount = 25%
only applicable if purchase is above 20,000
for purchases above 50,000 additional discount = 2%
for purchases above 100,000 additional discount = 5%

promocode = Nairobi then discount = 15%
applicable if purchase is above 10,000
*/

// document.getElementById("generate").onclick = function () {
//   var purchase = parseFloat(document.getElementById("purchase").value);
//   var promocode = document.getElementById("promocode").value;
//   var discount = 0;

//   if (promocode == "KARIBU" && purchase >= 20000) {
//     discount = 0.25;
//     if (promocode == "KARIBU" && purchase >= 50000) {
//       discount += 0.02;
//     } else if (promocode == "KARIBU" && purchase >= 100000) {
//       discount += 0.05;
//     }
//   } else if (promocode == "NAIROBI" && purchase >= 10000) {
//     discount = 0.15;
//     if (promocode == "NAIROBI" && purchase >= 50000) {
//       discount += 0.02;
//     } else if (promocode == "NAIROBI" && purchase >= 100000) {
//       discount += 0.05;
//     }
//     var amountPaid = purchase * (1 - discount);
//     document.getElementById("amountPaid").innerText =
//       "amount after discount:" + " " + amountPaid;
//   } else if (purchase < 20000 && promocode == "KARIBU") {
//     document.getElementById("amountPaid").innerText =
//       "amount to be paid:" + " " + purchase;
//   } else if (purchase < 10000 && promocode == "NAIROBI") {
//     document.getElementById("amountPaid").innerText =
//       "amount to be paid:" + " " + purchase;
//   } else if (!promocode) {
//     document.getElementById("amountPaid").innerText =
//       "amount to be paid:" + " " + purchase;
//   } else {
//     // invalid promo code entered, display error message and original purchase amount
//     document.getElementById("amountPaid").innerText = "Invalid promo code!!!!!";
//   }
// };
