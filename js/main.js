const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const jsonUserData = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const response = await jsonUserData.json();

  console.log(response);

  return response;
};

myCoolFunction();
