// Objects
// key-value pairs
const myObj = { name: "Nai" };
const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};
console.log(anotherObj.action());
