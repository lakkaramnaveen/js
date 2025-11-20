const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      console.log(element);
    });
  });

console.log(users);
