// second parameter of fetch

const joke = {
  id: "NJBl3TnrHlb",
  joke: "The other day, my wife asked me to pass her lipsti… her a glue stick. She still isn't talking to me.",
};
const postData = async (joke) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joke),
  });
  const jsonresponse = await response.json();
  console.log(jsonresponse);
};

postData(joke);
