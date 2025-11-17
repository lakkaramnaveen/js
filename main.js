const myObject = {
  name: "Nani",
  hobbies: ["music", "photography"],
  logName: function () {
    console.log(this.name);
  },
};

const myArray = ["est", "sleep", "code"];

localStorage.setItem("myLocalStore", JSON.stringify(myObject));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(myLocalData.length);
