const getDataFrom = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };

  return requestObj;
};

const buildReqUrl = (requestData) => {
  return `http://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

const processJoke = async () => {
  const requestData = getDataFrom();
  const requstUrl = buildReqUrl(requestData);
  await requestJoke(requstUrl);
  console.log("finished!");
};

processJoke();
