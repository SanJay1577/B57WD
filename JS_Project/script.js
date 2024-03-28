const API = "https://6604dda22ca9478ea17ea24d.mockapi.io/users";
const user_container = document.querySelector(".user-container");
//API Request Handlers to Handle CRUD OPERATION
//API HANDLERS
//GET - (READ)
async function getAllUsers() {
  const res = await fetch(API, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
  renderAllUserData(data);
}

//POST - (CREATE)
async function addNewUser(newData) {
  const res = await fetch(API, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data);
}

//PUT - (UPDATE)
async function updateUser(id, updatedUser) {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
}

//DELETE - (DELETE)
async function deleteUser(id) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
}

//Dom Handling
function createUserCard(user) {
  const card = document.createElement("div", { class: "card" });
  card.innerHTML += `
<h1>${user.name}</h2>
<p>Batch <span>${user.batch}</span></p>
<p>Contact <span>${user.contact}</span></p>
`;
  return card;
}

function appendUserCard(user) {
  const appendedData = createUserCard(user);
  user_container.append(appendedData);
}

function renderAllUserData(users) {
  users.map((user) => {
    appendUserCard(user);
  });
}
//Handlers invokations
const dummy_data = {
  name: "name7",
  batch: "batch 7",
  contact: 765645272,
};

//addNewUser(dummy_data);
//updateUser("6", dummy_data);
//deleteUser("6");
getAllUsers();

//Create a functions to create user Data
