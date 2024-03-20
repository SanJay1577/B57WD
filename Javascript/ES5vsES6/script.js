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

//Array destructuring...
//["ele", "ele2"]
const studArr = ["subash", "sanjai", ["aravind", "prahsall"]];
console.log("--------normal structure---------");
console.log(studArr);
console.log(studArr[0]);
console.log(studArr[1]);
console.log("--------de structure---------");
const [name1, , [name3, name4]] = studArr;
//[name1, ,name3] = ["subash", "sanjai", ["aravind", "prahsall"]]
//name1 = subash
// , , = sanjai
//[name3, name4] = ["aravind", "prahsall"]
console.log(name1);
console.log(name3);
console.log(name4);
//task
const men_Arr = [1, 3, 5, 6, ["Sanjay", 25], 9];
const [, , , , [menName, menAge]] = men_Arr;
//mentorName and MentorAge
console.log("task---------", menName, menAge);
//Object destructuring
const data = {
  firstName: "sanjay",
  lastname: "guvi",
  pos: "mentor",
  loc: "chennai",
  company: {
    loc: "chennai",
    country: "India",
    state: "Tamil Nandu",
  },
};
console.log("....normal structure");
console.log(data);
console.log(data.firstName, data.lastname);
const {
  firstName,
  pos,
  lastname: lName,
  company: { loc, state: comState, country },
} = data;

console.log(firstName); //sanjay
console.log(pos); //mentor
console.log(lName); // guvi (renamed)
console.log(loc); //chennai
console.log(comState); //tamil nadu (nested, renamed)
console.log(country); // INDIA

//property shorthand
let batch = "FSD55WD2";
let Time = "8.00 AM";

const schedule = {
  topic: "ES6 JS",
  batch,
  time: Time,
};
console.log(schedule);

// Template literals
const greet = "how are your";
const yourSelf = "I am mentor in guvi";
const totalGreetMsg = "Hi " + greet + " " + yourSelf;
const templateStr = `Hi 
${greet} 
${yourSelf}
`;
console.log(totalGreetMsg);
console.log(templateStr);
