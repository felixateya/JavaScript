let petDog = "Rex";
let petCat = "Pus";

console.log(petDog);
console.log(petCat);

console.log("My dog's name is", petDog);
console.log("My cat's name is", petCat);

let catSound = "miao";
let dogSound = "woof";

console.log(catSound);
console.log(dogSound);

console.log(petCat, "says", catSound);
console.log(petDog, "barks", dogSound);

catSound = "mews";
dogSound = "bark";

console.log(catSound);
console.log(dogSound);

console.log(petCat, "says", catSound);
console.log(petDog, "barks", dogSound);

let x = 2;

console.log("i have", x, "pets");

let tablets = 4;
let dosage = 2;

console.log("i take", tablets, "tablets", dosage, "times a day");

tablets = 1;
dosage = 3;

console.log("i take", tablets, "tablet", dosage, "times a day");

console.log("i take", dosage * 7, "tablets", "in a week");

console.log("i take", dosage * 30, "tablets", "times in a month");

let birthYear = 1999;
let futureYear = 2023;
let month = "december";

age = futureYear - birthYear;

if ((month = "november||december")) {
  console.log("I am", age, "years old");
} else {
  console.log("I am", age - 1, "years old");
}

// Area of a circle:
let radius = 20;
radius = radius ** 2;

const PI = 3.142;

area = PI * radius;

console.log("The area of the circle is", area);

// Budget;

document.getElementById("budget").innerText = "SALARY TRACKER";

document.getElementById("expenses").innerText = "ALL EXPENSES";
// document.getElementById("expenses").style.color = "brown"
document.getElementById("expenses").style.textDecoration = "underline"

document.getElementById("salaryRemaining").innerText = "SALARY";
// document.getElementById("salaryRemaining").style.color = "brown"
document.getElementById("salaryRemaining").style.textDecoration = "underline"

document.getElementById("submit").onclick = function () {
  var salary = document.getElementById("salary").value;

  salary = document.getElementById("salary").value;
  console.log(salary)
  document.getElementById("before").innerText =
    "Salary Before Deductions:" + " " + "Kshs" + " " + salary;
  console.log("salaryRemaining;", ":", salary);

  let expense = document.getElementById("rentInput").value;
  document.getElementById("rent").innerText =
    "Rent:" + " " + "Kshs" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterRent").innerText =
    "After Paying Rent:" + " " + "Kshs" + " " + salary;

  console.log("afterRent;", expense, ":", salary);

  expense = document.getElementById("electricInput").value;
  document.getElementById("electric").innerText =
    "Electricity Bill:" + " " + "Kshs" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterElectric").innerText =
    "After Paying for Electricity:" + " " + "Kshs" + " " + salary;

  console.log("afterElectric;", expense, ":", salary);

  expense = document.getElementById("foodInput").value;
  document.getElementById("food").innerText =
    "Food Expenses:" + " " + "Kshs" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterFood").innerText =
    "After Food Expenses:" + " " + "Kshs" + " " + salary;
  console.log("afterFood;", expense, ":", salary);

  expense = document.getElementById("waterInput").value;
  document.getElementById("water").innerText =
    "Water Bill:" + " " + "Kshs" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterWater").innerText =
    "After Paying the Water Bill:" + " " + "Kshs" + " " + salary;
  console.log("afterWater;", expense, ":", salary);

  expense = document.getElementById("wifiInput").value;
  document.getElementById("wifi").innerText =
    "Wifi Payment:" + " " + "Kshs" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterWifi").innerText =
    "After Paying for Wifi:" + " " + "Kshs" + " " + salary;
  console.log("afterWifi;", expense, ":", salary);

  expense = document.getElementById("debtInput").value;
  document.getElementById("debt").innerText =
    "Debt Payment:" + " " + "Kshs" + " " + expense;
  console.log("afterDebt;", expense, ":", salary);
  salary = salary - expense;
  document.getElementById("afterDebt").innerText =
    "After Debt Payment:" + " " + "Kshs" + " " + salary;
  console.log("afterDebt;", expense, ":", salary);

  expense = document.getElementById("titheInput").value;
  document.getElementById("tithe").innerText =
    "Tithe Payment:" + " " + "KES" + " " + expense;
  console.log("afterTithe;", expense, ":", salary);
  salary = salary - expense;
  document.getElementById("afterTithe").innerText =
  "After Tithe Payment:" + " " + "KES" + " " + salary;

  expense = document.getElementById("insuranceInput").value;
  document.getElementById("insurance").innerText =
    "Insurance Payment:" + " " + "Kshs" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterInsurance").innerText =
    "After Paying Insurance:" + " " + "Kshs" + " " + salary;
  console.log("afterInsurance;", expense, ":", salary);

  // expense = document.getElementById("savingsInput").value;
  document.getElementById("savings").innerText =
    "Savings:" + " " + "Kshs" + " " + salary;
  // salary = salary - expense;
  document.getElementById("afterSavings").innerText =
    "After Savings:" + " " + "Kshs" + " " + salary;
  console.log("afterSavings;", expense, ":", salary);
};

salary = document.getElementById("salary").value;
document.getElementById("before").innerText =
  "Salary Before Deductions:" + " " + "KES" + " " + salary;

  expense = document.getElementById("rentInput").value;
  document.getElementById("rent").innerText =
  "Rent:" + " " + "KES" + " " + expense;
    
  salary = salary - expense;
  document.getElementById("afterRent").innerText =
    "After Paying Rent:" + " " + "KES" + " " + salary;

    expense = document.getElementById("electricInput").value;
    document.getElementById("electric").innerText =
      "Electricity Bill:" + " " + "KES" + " " + expense;
    salary = salary - expense;
    document.getElementById("afterElectric").innerText =
  "After Paying Electricity Bill:" + " " + "KES" + " " + salary;
      
  expense = document.getElementById("foodInput").value;
  document.getElementById("food").innerText =
    "Food Expenses:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterFood").innerText =
  "After Food Expenses:" + " " + "KES" + " " + salary;
    
  expense = document.getElementById("waterInput").value;
  document.getElementById("water").innerText =
    "Water Bill:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterWater").innerText =
  "After Paying the Water Bill:" + " " + "KES" + " " + salary;
    
  expense = document.getElementById("wifiInput").value;
  document.getElementById("wifi").innerText =
    "WIFI Payment:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterWifi").innerText =
  "After Paying for WIFI:" + " " + "KES" + " " + salary;
    
  expense = document.getElementById("debtInput").value;
  document.getElementById("debt").innerText =
    "Debt Payment:" + " " + "KES" + " " + expense;
  console.log("afterDebt;", expense, ":", salary);
  salary = salary - expense;
  document.getElementById("afterDebt").innerText =
  "After Debt Payment:" + " " + "KES" + " " + salary;
  expense = document.getElementById("titheInput").value;
  document.getElementById("tithe").innerText =
    "Tithe Payment:" + " " + "KES" + " " + expense;
  console.log("afterTithe;", expense, ":", salary);
  salary = salary - expense;
  document.getElementById("afterTithe").innerText =
  "After Tithe Payment:" + " " + "KES" + " " + salary;
    
  expense = document.getElementById("insuranceInput").value;
  document.getElementById("insurance").innerText =
    "Insurance Payment:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterInsurance").innerText =
  "After Paying for Insurance:" + " " + "KES" + " " + salary;
    
  // expense = document.getElementById("savingsInput").value;
  document.getElementById("savings").innerText =
    "Savings:" + " " + "KES" + " " + salary;
  // salary = salary - expense
  document.getElementById("afterSavings").innerText =
    "AFter Savings:" + " " + "KES" + " " + salary;








