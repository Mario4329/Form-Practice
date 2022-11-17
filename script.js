"use strict";
// Elements

const form = document.getElementById("form");

// // let firstName = document.querySelector("firstName");
// let lastName = document.querySelector("lastName");
// let email = document.querySelector("emailAddress");
// let phoneNum = document.querySelector("phone");

// // const submit = document.querySelector("submit-btn");

let userData = [];

const addUserData = (ev) => {
  ev.preventDefault();
  let userInput = {
    firstName: document.getElementById("input-fname").value,
    lastName: document.getElementById("input-lname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone-numb").value,
  };

  if (
    userInput.firstName &&
    userInput.lastName &&
    userInput.email &&
    userInput.phone
  ) {
    userData.push(userInput);
    document.forms[0].reset();
  } else {
    window.alert("Please fill all fields");
    location.reload();
  }
  // console.warn("added", { userData });
  // let pre = document.querySelector("#msg pre");
  // pre.textContent = "\n" + JSON.stringify(userData, "\t", 2);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit-btn").addEventListener("click", addUserData);
});

console.log(userData);
console.log(typeof firstName);
