//adding content to elements
document.getElementById("h1").innerText = "Welcome to JavaScript";
document.getElementById("paragraph").innerText = "This is gonna be so much fun";
document.getElementById("image").src = "/images/Screenshot.png";
document.createElement("p");

//image styling
document.getElementById("image").style.width = "70%";
document.getElementById("image").style.height = "90%";
document.getElementById("image").style.borderRadius = "20px";
(document.getElementById("image").style.margin = "10%"), "20%";

//Adding styling to elements
document.getElementById("h1").style.color = "red";
document.getElementById("h1").style.fontSize = "36px";

document.getElementById("paragraph").style.color = "blue";
document.getElementById("paragraph").style.fontSize = "30px";

// Using variables
var firstName = "Felix";
var secondName = "Mulaa";
var lastName = "Ateya";

//variable operations
var fullName = firstName + " " + secondName + " " + lastName;

document.getElementById("firstName").innerText = firstName;
document.getElementById("secondName").innerText = secondName;
document.getElementById("lastName").innerText = lastName;
document.getElementById("fullName").innerText = fullName;

//styling variables
document.getElementById("firstName").style.color = "aqua";
document.getElementById("secondName").style.color = "lightblue";
document.getElementById("lastName").style.color = "blue";

//JavaScript Statements

//addition of number and strings
let a = 20;
let b = 50;

let c = a;
console.log(a + b);

//multiplication
a = 20;
b = 50;

console.log(a * b);

//division
a = 20;
b = 50;

console.log(a / b);

//subtraction
a = 20;
b = 50;

console.log(a - b);

//functions

let sum = a + b;
product = a * b;

document.getElementById("examples").onclick = function () {
  a = 20;
  b = 50;

  let sum1 = a + " " + b;
  product = a * b;

  console.log(sum1);
  console.log(product);
  console.log("enjoying functions");
};

//OPERATORS;
//addition (+);
// string + string = string;
let string1 = "Hello";
let string2 = "world";

let concatenate = string1 + " " + string2;
console.log(concatenate);

//string + number = string;
string1 = 10;
string2 = "sheep";

let conatenate2 = string1 + " " + string2;
console.log(conatenate2);

//number + number = sum;
let number1 = 300;
let number2 = 700;

let sum2 = number1 + number2;
console.log(sum2);

//equality operator(==) checks for equality of value;
let subject3 = 500;
let subject4 = 500;

console.log(subject3 == subject4);

//equality operator(===) checks for equality of value and type;
let subject5 = 500;
let subject6 = "500";

console.log(subject5 === subject6);

// Greater than (>)
let subject7 = 2;
let subject8 = 6;
console.log(subject7 > subject8);

// Greater than or Equal to (>=)
console.log(subject7 >= subject8);

// Less than (<)
console.log(subject7 < subject8);

// Less than or Equal to (<=)
console.log(subject7 <= subject8);

// AND (&&)
console.log(subject7 < 10 && subject8 == 6);

// OR (||)
console.log(subject7 > 10 || subject8 == 5);


console.log(subject7 += subject8);

console.log((subject7 -= subject8));


let d = 12;
console.log(d)
let e = 14;

console.log(e > d && e > 10) 

// DATA TYPES;
// boolean
// number
// undefined
// null
// bigint
// symbol
// object
// string


document.getElementById("h1").innerText = "Hello World";
document.getElementById("paragraph").innerText = "Javascript 101";
document.getElementById("firstName").innerText = "Caleb";
document.getElementById("secondName").innerText = "Type your second name here";
document.getElementById("lastName").innerText = "type tour last name here";
document.getElementById("fullName").innerText = "type your full name here";
