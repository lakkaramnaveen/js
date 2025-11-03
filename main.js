"use strict";
const name = () => {
  try {
    throw new customError("this is a custom eeeor");
    // throw new nameError("hi1");
  } catch (error) {
    console.error(error);
  }
};

name();

// custom error

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name} : ${this.message}`;
}

// function nameError(message) {
//   console.log("nani");
// }
