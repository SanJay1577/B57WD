const arr = ["INDIA", "CHINA", "JAPAN", "ENGLAND"];
const obj = {
  IND: "INDIA",
  CHN: "CHINA",
  JPN: "JAPAN",
  ENG: "ENGLAND",
};

//for loop
for (let i = 0; i < arr.length; i++) {
  console.log("array", arr[i]);
}
const objKeys = Object.keys(obj);
const objValues = Object.values(obj);
console.log(objKeys);
console.log(objValues);

for (let i = 0; i < objKeys.length; i++) {
  console.log("objKeys", objKeys[i]);
  console.log("objValues", obj[`${objKeys[i]}`]);
  console.log("objValues", objValues[i]);
}

//For each -> (arrays) (suitable for array)
arr.forEach((value, index, accArr) => {
  console.log(
    `Value : ${value}
index : ${index}
accArr : ${accArr}
          `
  );
});
//For each -> (objects)
objKeys.forEach((value, index, accArr) => {
  console.log(
    `Value : ${value}
        index : ${index}
        accArr : ${accArr}
                  `
  );
});

//For in (object) suitable for object
for (key in obj) {
  console.log(`
  object key : ${key}
  object vaule : ${obj[key]}
  `);
}

//For in (array)
for (idx in arr) {
  console.log(`
array idx : ${idx}
array values " ${arr[idx]}
          `);
}

//For of string (best suitable for string)
const sampleStr = "INDIACHINAJAPAN";
for (str of sampleStr) {
  console.log(str);
}
//For of arr
for (val of arr) {
  console.log(val);
}

//For of obj (only by passing objKeys)
for (keys of objKeys) {
  console.log(keys);
}
