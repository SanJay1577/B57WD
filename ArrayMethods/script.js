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
