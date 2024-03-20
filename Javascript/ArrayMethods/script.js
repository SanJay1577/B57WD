//Methods in array
const arr = [1, 23, 54, 6, 7, 9, 32];
console.log("----push method------");
//push
console.log("Org arr", arr);
arr.push(59);
console.log("Push arr", arr);

//pop
console.log("Org arr", arr);
arr.pop();
console.log("POP arr", arr);

//unshift(59)
console.log("Org arr", arr);
arr.unshift(59);
console.log("unshift arr", arr);

//shift()
console.log("Org arr", arr);
arr.shift();
console.log("shift arr", arr);

//sorting
console.log("org arr", arr);
arr.sort((a, b) => a - b);
console.log("sorted arr", arr);
arr.reverse();
console.log("dec sorted", arr);

//slice
console.log("org arr", arr);
//slice(startIndex, endIndex);
//startIndex included
//endIndex- exclued
const newArr = arr.slice(2, 4);
console.log("Org arr", arr);
console.log("sliced arr", newArr);

//splice
//splice(start, deleteCount, item1, item2..)
//return (deleted items)
console.log("org arr", arr);
const splicedArr = arr.splice(1, 2, "item1", 2, "item2");
console.log("After splice", arr);
console.log("spliced from org", splicedArr);

//MRF (MAP, Filter, Reduce)
//Map returns a new array fopr given conditions
//and loop through original array

console.log("------------MAP--------------");
const mrf_arr = [1, 3, 4, 5, 7, 8, 9];
console.log("mrf arry", mrf_arr);

const mapped_Arr = mrf_arr.map((value, index, accArr) => {
  console.log(`
Value : ${value}
Index : ${index}
accArr: ${accArr}
`);
  return value * 2;
});
console.log("mrf array", mrf_arr);
console.log("Mapped array", mapped_Arr);

// mrf_arr.map((value, index, accArr) => {});
//Polyfills
Array.prototype.guviMap = function (fn) {
  let new_Arr = [];
  for (let i = 0; i < this.length; i++) {
    new_Arr.push(fn(this[i], i, this));
  }
  return new_Arr;
};

console.log("-------Guvi Map-------");

const guviMapped = mrf_arr.guviMap((value, index, accArr) => {
  console.log(`
        Value : ${value}
        Index : ${index}
        accArr: ${accArr}
        `);
  return value * 2;
});
console.log("mrf guvi array", mrf_arr);
console.log("Guvi array", guviMapped);

//Filter
console.log("--------Filter----------");
const filter_Arr = mrf_arr.filter((val, index, accArr) => {
  console.log(`
        Value : ${val}
        Index : ${index}
        accArr: ${accArr}
        `);
  return val != 4; //boolean
});
console.log(mrf_arr);
console.log(filter_Arr);

//polyfill for filter

Array.prototype.guviFilter = function (fn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

console.log("-------Guvi filter-----");
const guviFilter_Arr = mrf_arr.guviFilter((val, index, accArr) => {
  console.log(`
        Value : ${val}
        Index : ${index}
        accArr: ${accArr}
        `);
  return val != 4; //boolean
});
console.log(mrf_arr);
console.log(guviFilter_Arr);

console.log("-----reduce----");
// [1m 2m 3m 4m 5m] = number, storage, [], {}
// var acc //variable for a storage
const reducedvalue = mrf_arr.reduce(
  (acc, val, index, accArr) => {
    console.log(`
  Value : ${val}
  Index : ${index}
  accArr: ${accArr}
  `);
    acc.value = acc.value + val;
    acc.length = index + 1;
    return acc;
  },
  { value: 0, length: 0 }
);

console.log(mrf_arr);
console.log(reducedvalue);

//Chaining of MRF
const dummyArr = [1, 2, 3];
const res = dummyArr
  .map((val) => val + 3)
  .filter((val) => val != 4)
  .reduce((acc, val) => {
    return (acc += val);
  }, 0);
console.log(res);

const batch = [
  {
    studname: "rajesh",
    marks: 67,
  },
  {
    studname: "sandhya",
    marks: 52,
  },
  {
    studname: "Menon",
    marks: 23,
  },
  {
    studname: "Shankar",
    marks: 17,
  },
];
// function should process
// add intermarks (10 marks for all students)
//filter out passed students (passMarks: 35)
//Average marks of passed students in batch()
//avg = Totalofpassedmark/totalpassedstudents

function getaveragePercentage(studArr, internalMarks) {
  const result = studArr
    .map((val) => val.marks + internalMarks)
    .filter((val) => val >= 35)
    .reduce(
      (acc, val, index) => {
        acc.totalMarks = acc.totalMarks + val;
        acc.totalPassedStudents = index + 1;
        acc.avgMarks = acc.totalMarks / acc.totalPassedStudents;
        return acc;
      },
      { totalMarks: 0, totalPassedStudents: 0, avgMarks: 0 }
    );
  console.log(result.avgMarks.toFixed(2));
}

getaveragePercentage(batch, 15);
