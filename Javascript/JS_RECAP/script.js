// ES -> ECMA SCRIPT VERSION
//Arrow functions, anonymous functions
//IIFE, let and const, Spread and RESTMRF-6
//DEStructring
//Hoisting

const logger = (logLevel, ...Message) =>
  console.log(`[${logLevel}] ${Message}`);

function getData() {
  if (true) {
    let abc = "sanjay";
    console.log("outermost", abc);
    if (true) {
      console.log("outer", abc);
      if (true) {
        //         let abc = "sanjay";
      }
    }
  }
}

getData();

//Arrow function
//Legacy function
function func_name(param) {
  //console.log(param);
  //we need to use return keyword
  return param;
}
//arrow func
// no need of explicit return keyword for single line
const arr_func = (param) => param;

const arr_return = arr_func("hey there arrow");
console.log(arr_return);

const normal_return = func_name("hey there normal");
console.log(normal_return);

//This Keyword
const myObj = {
  data: "mydata",
  version: "myversion",
  innerObject: {
    version: "Inner object",
    myObjMethod: () => {
      //this holds the immediate parent object
      //If it is a arrow function it targets the global object
      console.log(this);
    },
  },
};
myObj.innerObject.myObjMethod();

//Template literals
const GREET = "Welcome To GUVI";
const H1Element = `<h1>${GREET}</h1>`;
console.log(H1Element);
document.body.innerHTML += H1Element;

//Spread and Rest Parameters
//spread -> collection to individual
//rest -> individual to collection
const arryOFColection = ["sanjay", "parashal", "vinoth"];
console.log(arryOFColection);
//After spread
console.log(...arryOFColection);
//Rest operator
function getALLInfo(...all) {
  //   console.log("person :", p1);
  //   console.log("person :", p2);
  //   console.log("person :", p3);
  //   console.log("person :", p4);
  console.log(all); //collection of all params
}

getALLInfo("sanjay", "prashal", "raja", "vennila");

//logger function

function getUserInfo(user) {
  logger("DEBUG", "starting user function");

  if (user) {
    logger("INFO", "Processing user info ", user.name, user.batch);

    if (!user.age) {
      console.log("[WARNING]  data missing");
    }
  } else {
    console.log("[Error] no user");
  }
}

const data = {
  name: "Sanjay",
  batch: "FSD57",
};
getUserInfo(data);

const arr = ["sanjay", "aravind", "prashal"];
//DE structure of ARR

const [p1, p2, p3] = arr;
console.log(p1);
console.log(p2);
console.log(p3);

//Object DEStructring
const obj = {
  name1: "sanjay",
  name2: "aravind",
  name3: "prashal",
};

const { name1, name2: newName } = obj;
console.log(name1);
console.log(newName);

//Property short hand
//variable
const personAuth = {
  username: "sanjay",
  password: "xjasuyaq761289901",
};
const company = "guvi";

const userStructure = {
  userlocation: "chennai",
  position: "mentor",
  company,
  personAuth,
};

console.log(userStructure.company);
console.log(userStructure.personAuth);

class user {
  constructor(name, age) {
    // {}
    this.name_ = name;
    this.age_ = age;
  }
  getUserName() {
    console.log("Name :", this.name_);
  }
}

const person1 = new user("Sanjay", 25);
console.log(person1);
person1.getUserName();
