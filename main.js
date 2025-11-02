const band = {
  vocals: "Sid",
  guitar: "ar rahman",
  bass: "nani",
  drums: "aaaaa",
};

band.keyboard = "player";

delete band.drums;
for (let job in band) {
  console.log(`on ${job}, it's ${band[job]}`);
}
