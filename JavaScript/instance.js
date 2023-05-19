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

document.getElementById("salaryRemaining").innerText = "SALARY";

document.getElementById("submit").onclick = function () {
  var salary = document.getElementById("salary").value;

  salary = document.getElementById("salary").value;
  document.getElementById("before").innerText =
    "SALARY BEFORE DEDUCTIONS:" + " " + "KES" + " " + salary;
  console.log("salaryRemaining;", ":", salary);

  let expense = document.getElementById("rentInput").value;
  document.getElementById("rent").innerText =
    "RENT:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterRent").innerText =
    "AFTER PAYING RENT:" + " " + "KES" + " " + salary;

  console.log("afterRent;", expense, ":", salary);

  expense = document.getElementById("electricInput").value;
  document.getElementById("electric").innerText =
    "ELECTRICITY BILL:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterElectric").innerText =
    "AFTER PAYING ELECTRICITY BILL:" + " " + "KES" + " " + salary;

  console.log("afterElectric;", expense, ":", salary);

  expense = document.getElementById("foodInput").value;
  document.getElementById("food").innerText =
    "FOOD EXPENSES:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterFood").innerText =
    "AFTER FOOD EXPENSES:" + " " + "KES" + " " + salary;
  console.log("afterFood;", expense, ":", salary);

  expense = document.getElementById("waterInput").value;
  document.getElementById("water").innerText =
    "WATER BILL:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterWater").innerText =
    "AFTER PAYING THE WATER BILL:" + " " + "KES" + " " + salary;
  console.log("afterWater;", expense, ":", salary);

  expense = document.getElementById("wifiInput").value;
  document.getElementById("wifi").innerText =
    "WIFI PAYMENT:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterWifi").innerText =
    "AFTER PAYING FOR WIFI:" + " " + "KES" + " " + salary;
  console.log("afterWifi;", expense, ":", salary);

  expense = document.getElementById("debtInput").value;
  document.getElementById("debt").innerText =
    "DEBT PAYMENT:" + " " + "KES" + " " + expense;
  console.log("afterDebt;", expense, ":", salary);
  salary = salary - expense;
  document.getElementById("afterDebt").innerText =
    "AFTER DEBT PAYMENT:" + " " + "KES" + " " + salary;
  console.log("afterDebt;", expense, ":", salary);

  expense = document.getElementById("insuranceInput").value;
  document.getElementById("insurance").innerText =
    "INSURANCE PAYMENT:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterInsurance").innerText =
    "AFTER PAYING INSURANCE:" + " " + "KES" + " " + salary;
  console.log("afterInsurance;", expense, ":", salary);

  expense = document.getElementById("savingsInput").value;
  document.getElementById("savings").innerText =
    "SAVINGS:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterSavings").innerText =
    "AFTER SAVINGS:" + " " + "KES" + " " + salary;
  console.log("afterSavings;", expense, ":", salary);
};

salary = document.getElementById("salary").value;
document.getElementById("before").innerText =
  "SALARY BEFORE DEDUCTIONS:" + " " + "KES" + " " + salary;

  expense = document.getElementById("rentInput").value;
  document.getElementById("rent").innerText =
  "RENT:" + " " + "KES" + " " + expense;
    
  salary = salary - expense;
  document.getElementById("afterRent").innerText =
    "AFTER PAYING RENT:" + " " + "KES" + " " + salary;

    expense = document.getElementById("electricInput").value;
    document.getElementById("electric").innerText =
      "ELECTRICITY BILL:" + " " + "KES" + " " + expense;
    salary = salary - expense;
    document.getElementById("afterElectric").innerText =
  "AFTER PAYING ELECTRICITY BILL:" + " " + "KES" + " " + salary;
      
  expense = document.getElementById("foodInput").value;
  document.getElementById("food").innerText =
    "FOOD EXPENSES:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterFood").innerText =
  "AFTER FOOD EXPENSES:" + " " + "KES" + " " + salary;
    
  expense = document.getElementById("waterInput").value;
  document.getElementById("water").innerText =
    "WATER BILL:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterWater").innerText =
  "AFTER PAYING THE WATER BILL:" + " " + "KES" + " " + salary;
    
  expense = document.getElementById("wifiInput").value;
  document.getElementById("wifi").innerText =
    "WIFI PAYMENT:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterWifi").innerText =
  "AFTER PAYING FOR WIFI:" + " " + "KES" + " " + salary;
    
  expense = document.getElementById("debtInput").value;
  document.getElementById("debt").innerText =
    "DEBT PAYMENT:" + " " + "KES" + " " + expense;
  console.log("afterDebt;", expense, ":", salary);
  salary = salary - expense;
  document.getElementById("afterDebt").innerText =
  "AFTER DEBT PAYMENT:" + " " + "KES" + " " + salary;
    
  expense = document.getElementById("insuranceInput").value;
  document.getElementById("insurance").innerText =
    "INSURANCE PAYMENT:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterInsurance").innerText =
  "AFTER PAYING INSURANCE:" + " " + "KES" + " " + salary;
    
  expense = document.getElementById("savingsInput").value;
  document.getElementById("savings").innerText =
    "SAVINGS:" + " " + "KES" + " " + expense;
  salary = salary - expense;
  document.getElementById("afterSavings").innerText =
    "AFTER SAVINGS:" + " " + "KES" + " " + salary;