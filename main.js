class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;

  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  hereYouGO() {
    console.log(
      `here's your order - ${this.crust} ${this.#sauce} sauce ${
        this.#size
      } pizza.`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGO();
console.log(myPizza.#sauce);
