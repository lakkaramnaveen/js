class Pizza {
  constructor(pizzaType) {
    this.size = "medium";
    this.crust = "original";
    this.type = pizzaType;
  }

  bake() {
    console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
  }
}

const myPizza = new Pizza();
myPizza.bake();
