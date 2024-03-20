// Hoisting
// // console.log(a); //undefined
// // var a = 15;
// // a = 25;
// // console.log(a); // 15

//10 line (decalration)
// console.log(a + 15);
// console.log("working good");
// //200 line (variable usage)
// var a;
// //678 -> initialization
// a = 25;

//Array and Object iterations
//array
let arr = ["sanjay", 1, true, { pos: "Mentor", value: 5 }, [2, 5]]; //index starts from 0
console.log(arr[3]);
//objects (JSON- javascript object notation)

//key and value
let obj = {
  name: "sanjay",
  value: 1,
  isMember: true,
  posArr: ["sanjay", 1, true],
  demObj: {
    pos: "mentor",
    id: 5,
  },
};
//dot opertions
console.log(obj.demObj.pos);

//Map opertions
console.log(obj["isMember"]);

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name.common);
  }
};
const dummyJson = {
  name: "sanjay",
};

const strJson = JSON.stringify(dummyJson);
console.log(dummyJson); //{name : "sanjay"}
console.log(strJson); //"{name: 'sanjay'}"
const convJson = JSON.parse(strJson);
console.log(convJson); //{name : "sanjay"}
//Object.keys and Object.values // sort == check => true
// const obj1 = { name: "sanjay", age: 1 };
// const obj2 = { age: 1, name: "sanjay" };
// console.log(obj1 === obj2); //true
