

const requestJoke = async (firstName, lastName) => {
  const response = await fetch(
    `http://api.chucknorris.io/jokes/random?firstName=${firstName}&lastName=${lastName}`
  );
  const jsonresponse = await response.json();
  console.log(jsonresponse.value);
};

requestJoke("nani", "chuck");
