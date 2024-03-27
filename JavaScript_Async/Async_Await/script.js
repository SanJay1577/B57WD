//Promise function
//Make Delay
function makeDelay(delay) {
  return new Promise((res, rej) => {
    if (delay < 1000) {
      rej("[Error] cannot make delay less than a second");
    } else {
      setTimeout(() => {
        res(`Delay made for ${delay}`);
      }, delay);
    }
  });
}

// function executeSetOfOperation() {
//   return new Promise((res, rej) => {
//     res("Execute Operation");
//   });
// }
// executeSetOfOperation()
//   .then((data) => {
//     console.log("Operation1");
//     return data;
//   })
//   .then(() => {
//     console.log("Operation2");
//   })
//   .then(() => {
//     return makeDelay(2000);
//   })
//   .then(() => {
//     console.log("Operation3");
//   })
//   .then(() => console.log("Operation4"))
//   .catch((err) => console.log(err));

//async and await
async function executeSetOfOperation() {
  try {
    console.log("Operation1");
    console.log("Operation2");
    let delay = await makeDelay(3000);
    console.log(delay);
    console.log("Operation3");
    delay = await makeDelay(500);
    console.log(delay);
    console.log("Operation4");
  } catch (error) {
    console.log(error);
  }
}
//executeSetOfOperation();

//fetch in promise -> async promise

async function getAllCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
}
getAllCountries();
