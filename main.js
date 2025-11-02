const band = {
  vocals: "Sid",
  guitar: "ar rahman",
  bass: "nani",
  drums: "aaaaa",
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(`on ${job}, it's ${band[job]}`);
}
