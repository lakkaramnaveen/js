"use strict";
const name = () => {
  try {
    const name = "Nani";
    name = "joe";
  } catch (error) {
    console.warn(error);
  }
};

name();
