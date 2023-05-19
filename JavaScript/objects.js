const Person = {
  firstName: "Mathew",
  secondName: "Njoroge",
  age: 23,
  gender: "Male"
}

console.log (Person.firstName);
console.log (Person.secondName);
console.log (Person.age);
console.log (Person.gender);



Person.firstName = "John";
document.getElementById("firstName").innerText = Person.firstName;
document.getElementById("secondName").innerText = Person.secondName;
document.getElementById("age").innerText = Person.age;
document.getElementById("gender").innerText = Person.gender;

