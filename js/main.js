const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const jsonUserData = (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  console.log(jsonUserData);
};

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });
