//Promises

//produce of promise
function getData(val) {
  return new Promise((resolve, reject) => {
    if (val != 0) {
      setTimeout(() => {
        resolve(`Your value is ${val}`);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("[ERROR] You have no data");
      }, 1000);
    }
  });
}

//Promise states  (three states)
// pending (processing )
// resolve -> fulfilled
// rejected

//consumer of promise
// console.log("start");
// getData(1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// console.log("end");

function courseCreation() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Created Course p[1]");
    }, 2000);
  });
}

function chooseCourse(data) {
  return new Promise((res) => {
    setTimeout(() => {
      res(`${data} for MERN  p[2]`);
    }, 3000);
  });
}

function makePayment(data) {
  return new Promise((res) => {
    setTimeout(() => {
      res(`${data} and made payment [p3]`);
    }, 2000);
  });
}
//Promise chaining ......
function PromiseChain() {
  courseCreation()
    .then((data) => {
      console.log(data);
      return chooseCourse(data);
    })
    .then((data2) => {
      console.log(data2);
      return makePayment(data2);
    })
    .then((finalData) => {
      console.log(finalData);
    });
}
//PromiseChain();

//promise all
const promise1 = new Promise((res) => {
  setTimeout(() => {
    res("Promise 1 resolved");
  }, 2000);
});

const promise2 = new Promise((res) => {
  setTimeout(() => {
    res("Promise 2 resolved");
  }, 2000);
});

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("[Error] Promise 3 rejected");
  }, 5000);
});

// When all promises are resolved it will be resolved.
//if any one is rejected will only show rejected response
// Promise.all([promise1, promise2, promise3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Fetch an api

function mockFetch(url, options) {
  return new Promise((res, rej) => {
    if (options.method === "GET") {
      res(`{"name":"sanjay"}`);
    }
    if (options.method === "POST") {
      res(`Adding data from ${url}`);
    }
    if (options.method === "PUT") {
      res(`Editing data from ${url}`);
    }
    if (options.method === "DELETE") {
      res(`Deleting data from ${url}`);
    } else {
      rej("[ERROR] Rejected your request");
    }
  });
}

// mockFetch("https://restcountries.com/v3.1/all", {
//   method: "GET",
// })
//   .then((res) => JSON.parse(res))
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

//Fetch api

fetch("https://restcountries.com/v3.1/all", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//create card() -> card -> button
//renderAllCard() ->
