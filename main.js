class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(topping) {
    this.toppings.push(topping);
  }

  bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${
        this.crust
      } crust pizza with ${this.getToppings()} topppings`
    );
  }
}

const myPizza = new Pizza("chicken", "small");
myPizza.setCrust("thin");
myPizza.setToppings("pineapple");
myPizza.bake();
