// Objects
// key-value pairs
const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrrroom!!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
//inheritence
console.log(truck);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "whoooh!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);

tesla.engine = function () {
  return "Shhhhhhhhhh........";
};

console.log(tesla.engine());
