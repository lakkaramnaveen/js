import playGuitar from "./guitar.js";
import { shredding as shred, plucking } from "./guitar.js";
import User from "./user.js";

const me = new User("email@gmail.com", "nani");
console.log(me);
console.log(me.greeting());

console.log(playGuitar());
console.log(shred());
console.log(plucking);
