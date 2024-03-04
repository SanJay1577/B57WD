// var let and const
// re declaration and re initialization
// is possible
var a = 15;
var a = 25;
console.log(a);

// let
let b = 13;
// let b = 15; // not possible (re declaration)
b = 15; // re initilizatio is possible
console.log(b);

// const
const c = 30;
//const c = 25; // not possible (re declaration)
//c = 35; // re initilizatio is not possible
console.log(c);

// block scope (let and const)
if (true) {
  var x = "sanjay";
  console.log("inblock", x);
}
console.log("outblock", x);
//  (let,const -cannot access outside block)
// (var can be accessed outside the block)
if (true) {
  let xyz = 30;
  //console.log(zyx); // not (inner to outer_
  if (true) {
    let zyx = 15;
    console.log("Inner block", xyz); //(outer to inner)
  }
}
function scopeFunc() {
  let func_var = 36;
  //consolne.log(func_var); // inner to outer(error)
  if (true) {
    //     let func_var = 36;
    console.log(func_var); //outer to inner (possible)
  }
}
scopeFunc();
//Shadowing property
if (true) {
  const shadow_var = "sanjay";
  if (true) {
    const shadow_var = "subash";
    console.log("sub block", shadow_var);
  }
  console.log("san block", shadow_var);
}

//spread and rest operator
//spread operator
const col_arr = ["mango", 5, "chocolate", "milk"];
console.log(col_arr);
console.log(...col_arr);

const batch1 = ["sanjay", "ragul"];
const batch2 = ["keni", "raja"];
const batch3 = ["prahal", "Subash"];
const allStudents = [...batch1, ...batch2, ...batch3];
console.log(allStudents);

//Rest operator
function getAllData(data1, data2, ...data3) {
  //"pars"
  console.log(data1); //san
  console.log(data2); // sam
  console.log("remaining all", data3);
}
getAllData("san", "sam", "pras", "raj", "sub");

const per1 = { name: "person", age: 25 };
const per2 = { age: 25, name: "person" };

function checkTwoObjects(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  console.log(key1.sort());
  console.log(key2.sort());
}
checkTwoObjects(per1, per2);
