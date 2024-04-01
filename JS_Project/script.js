const API = "https://6604dda22ca9478ea17ea24d.mockapi.io/users";
const user_container = document.querySelector(".user-container");
const user_form = document.querySelector(".user-form");
let editID;
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
  appendUserCard(data);
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
  if (data) {
    location.reload();
  }
  console.log(data);
}

//DELETE - (DELETE)
async function deleteUser(id, parent) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data) {
    parent.remove();
  }
  console.log(data);
}

//Form inner html
user_form.innerHTML += `
<form>
<h2>USER MANGEMENT</h2>
<input
type="text"
required
value=""
placeholder="Enter User Name"
class = "input-text"
id="input-name"
/>
<input
type="text"
required
value=""
placeholder="Enter User Batch"
class = "input-text"
id="input-batch"
/>
<input
type="number"
required
value=""
placeholder="Enter User Number"
class = "input-text"
id="input-contact"
/>
<button type="submit" id="add-btn" class="btn">Create</button>
<button type="submit" id="udpate-btn" class="btn">Update</button>
</form>
`;
//input fields
const inp_name = document.querySelector("#input-name");
const inp_batch = document.querySelector("#input-batch");
const inp_contact = document.querySelector("#input-contact");
const udpate_btn = document.querySelector("#udpate-btn");
const add_btn = document.querySelector("#add-btn");
udpate_btn.style.display = "none";
//Dom Handling

//get user input values
function getUserInputValues() {
  return {
    name: inp_name.value,
    batch: inp_batch.value,
    contact: inp_contact.value,
  };
}

function clearForm() {
  inp_name.value = "";
  inp_batch.value = "";
  inp_contact.value = "";
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML += `
<h1>${user.name}</h2>
<p>Batch <span id="batch-value">${user.batch}</span></p>
<p>Contact <span id="contact-value">${user.contact}</span></p>
<div class="btn-group">
<button data-id=${user.id} id="edit-btn" class="btn">Edit</button>
<button data-id=${user.id} id="del-btn" class="btn">Delete</button>
</div>
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

user_form.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id == "add-btn") {
    //get user input data
    const payload = getUserInputValues();
    addNewUser(payload);
    clearForm();
  }
  if (e.target.id == "udpate-btn") {
    const payload = getUserInputValues();
    console.log(payload);
    console.log(editID);
    updateUser(editID, payload);
  }
});

function populateForm(parent) {
  inp_name.value = parent.querySelector("h1").innerText;
  inp_batch.value = parent.querySelector("#batch-value").innerText;
  inp_contact.value = parent.querySelector("#contact-value").innerText;
  udpate_btn.style.display = "block";
  add_btn.style.display = "none";
}

user_container.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const parent = e.target.parentNode.parentNode;
  if (e.target.id == "del-btn") {
    deleteUser(id, parent);
  }
  if (e.target.id == "edit-btn") {
    populateForm(parent);
    editID = id;
  }
});
//addNewUser(dummy_data);
//updateUser("6", dummy_data);
//deleteUser("6");
getAllUsers();

//Create a functions to create user Data
