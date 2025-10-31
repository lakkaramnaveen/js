var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);

  {
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
}

myFunc();
