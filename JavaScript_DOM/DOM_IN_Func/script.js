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
