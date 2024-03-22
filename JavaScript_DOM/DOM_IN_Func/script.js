const res_div = document.querySelector("#result-div");

function alertMsg(msg) {
  // doesn't return anything
  //but just gives an alert message in the browser
  // and blocks the next code
  alert(msg);
}

function promptMsg(que) {
  //promt return the user writen data or default value
  //if cancel returns null
  const resultMsg = prompt(que);
  if (!resultMsg) {
    res_div.innerText = "User cancelled the operation";
    return;
  }
  res_div.innerText = resultMsg;
}
//promptMsg("Hi what is your name?");

function confirmMsg(checkMsg) {
  //If okay returns a boolean value of true
  //if cancel returns a boolean value of false.
  const resultMsg = confirm(checkMsg);
  if (!resultMsg) {
    res_div.innerText = "User not willing to proceed";
  } else {
    res_div.innerText = "User Approved";
  }
}

const getBtn = document.querySelector("#get-btn");
getBtn.addEventListener("click", () => {
  const userName = document.querySelector(".inp-box").value;
  const batch = document.querySelector(".inp-box1").value;
  const age = document.querySelector(".inp-box2").value;
  const userData = {
    userName,
    batch,
    age,
  };
  console.log(userData);
});

// //mouse events (mousedown, mouseleave, mouseup)
// document.addEventListener("mouseover", (e) => {
//   console.log("mouse hovered", e);
// });

// //key events (keypress, keydown, keyup)
// document.addEventListener("keydown", (e) => {
//   console.log("key trggerd = ", e.key);
// });

// //form events ("submit", "input" , "change")
// const myForm = document.querySelector("form");
// myForm.addEventListener("change", (e) => {
//   e.preventDefault();
//   console.log(e.target);
// });

// //window events("load", "resize")
// window.addEventListener("resize", (e) => {
//   console.log("window resized", e);
// });

//Setimeout and setInterval
let timeoutCount = 1; //3
function TimeoutFunc() {
  const id = setTimeout(() => {
    res_div.innerHTML = timeoutCount; //2
    timeoutCount++;
    TimeoutFunc();
    if (timeoutCount > 10) {
      clearTimeout(id);
      res_div.innerHTML = "Time out over";
    }
  }, 1000);
}

let intervalCount = 1;
function IntervalFunc() {
  const id = setInterval(() => {
    res_div.innerText = intervalCount;
    intervalCount++;
    if (intervalCount > 10) {
      clearInterval(id);
      res_div.innerText = "Interval Over";
    }
  }, 1000);
}

// const value = eval("5+6*5");
// console.log(value);

//setTimeout (funchandler, timeout in ms)

// const timeoutId = setTimeout(() => {
//   console.log("after timeout");
// }, 1000);
// console.log(timeoutId);
//clearTimeout(timeoutId) //timeout wil be remove
//setInterval (funchandler, interval in ms)
// const intervelId = setInterval(() => {
//   console.log("event done in interval");
// }, 1000);
// console.log(intervelId);
// clearInterval(intervelId); interval will be removed

//Logic for pagination
// dynamically change the slice data

const dummyData = [
  { name: "sanjay1" },
  { name: "prahsnth" },
  { name: "prachi" },
  { name: "vennila" },
  { name: "selvam" },
  { name: "sanjay2" },
  { name: "prahsnth" },
  { name: "prachi" },
  { name: "vennila" },
  { name: "selvam" },
  { name: "sanjay3" },
  { name: "prahsnth" },
  { name: "prachi" },
  { name: "vennila" },
  { name: "selvam" },
];

console.log(dummyData);

function createCard(data) {
  data.slice(10, 15).map((val) => {
    document.body.innerHTML += `
    <h1>Name : ${val.name}</h1>
    `;
  });
}

createCard(dummyData);
//memeory task for calculator
const memoryBTN = document.createElement("button");
memoryBTN.setAttribute("id", "mplus");
memoryBTN.innerText = "M";

const memoryClearBTN = document.createElement("button");
memoryClearBTN.setAttribute("id", "mclear");
memoryClearBTN.innerText = "MC";

const memoryplus = document.createElement("button");
memoryplus.setAttribute("id", "mplus");
memoryplus.innerText = "M+";
document.body.append(memoryBTN, memoryClearBTN, memoryplus);

memoryBTN.addEventListener("click", () => {
  localStorage.setItem("memory", 40);
});
memoryplus.addEventListener("click", () => {
  const value = localStorage.getItem("memory");
  console.log(value);
});
memoryClearBTN.addEventListener("click", () => {
  localStorage.removeItem("memory");
});

//form
const task_form = document.getElementById("task-form");

task_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const namevalue = document.querySelector(".n-name").value;
  const batchvalue = document.querySelector(".n-batch").value;
  const task_table = document.getElementById("task-table");
  const row = task_table.insertRow();
  const col1 = row.insertCell(0);
  const col2 = row.insertCell(1);
  col1.innerText = namevalue;
  col2.innerText = batchvalue;
  task_form.reset();
});
