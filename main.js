class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "original";
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}

class SpecialityPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "The works";
  }

  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
  }
}

const mySpecialty = new SpecialityPizza("medium");
mySpecialty.slice();
