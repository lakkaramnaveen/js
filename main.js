//
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// add event listener

const doSomething = () => {
  alert("doing something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "Clicked";
});
