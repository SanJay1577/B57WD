import fs from "fs";
import os from "os";
//calculator function
const [, , oper, n1, n2] = process.argv;

function calculate(operation, num1, num2) {
  switch (operation) {
    case "mul":
      console.log("Multipy", num1 * num2);
      return;
    case "add":
      console.log("Add", parseInt(num1) + parseInt(num2));
      return;
    case "sub":
      console.log("Sub", num1 - num2);
      return;
  }
}
calculate(oper, n1, n2);

fs.readFile("./demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR : ", err);
  } else {
    console.log(data);
  }
});

const content = "Hey I'm writted by nodejs file system";

fs.writeFile("./newfile.txt", content, (err) => {
  if (err) {
    console.log("ERROR : ", err);
  } else {
    console.log("File writted sucessfully");
  }
});

const appednContent = "\n Hey I'm the second line of cool text";
fs.appendFile("./cool.txt", appednContent, (err) => {
  if (err) {
    console.log("ERROR : ", err);
  } else {
    console.log("File Updated sucessfully");
  }
});

fs.unlink("./remove.txt", (err) => {
  if (err) {
    console.log("ERROR : ", err);
  } else {
    console.log("File removed sucessfully");
  }
});

//Os access
console.log("Total Memory :", os.totalmem());
console.log("Version :", os.version());
console.log("Free Memory :", os.freemem());
console.log("CPU stats", os.cpus());
