console.log("1.1" + "1.1"); // '1.11.1'
console.log(+"1.1" + +"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
const coffees = ["French Roast", "Colombian", "Kona"];
console.log(coffees);
const fish = ["Lion", , "Angel"];
console.log(fish);

const myList = ["home", , "school"];
console.log(myList.length, myList);

const myList1 = [, "home", , "school"];
console.log(myList1.length, myList1);

const myList2 = ["home", , "school", ,];
console.log(myList2.length, myList2);

const myList3 = ["home", "school", +"hospital"];
console.log(myList3);
