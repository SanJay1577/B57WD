import EventEmmiter from "events";

//Creating an event

const emitter = new EventEmmiter();

function listner() {
  console.log("listner");
}

//register an event (//once)
emitter.once("even", () => {
  listner();
});

emitter.emit("even");
emitter.emit("even");
emitter.emit("even");

// function removeFunction() {
//   emitter.removeListener("even", listner);
// }
// removeFunction();

let counter = 0;
let id = setInterval(() => {
  counter = counter + 1;

  //   emitter.off("even", () => {
  //     console.log("removed listner");
  //   });

  if (counter >= 10) {
    clearInterval(id);
  }
  console.log(counter);
}, 1000);
