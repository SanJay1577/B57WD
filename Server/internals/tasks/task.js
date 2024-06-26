//task
// read a file that is given in command prompt
// access those json values

const [, , filepath] = process.argv;
import fs from "fs";
import path from "path";
console.log(__dirname); //current directory
let dirName = path.join(__dirname, "timestaps");

let configFile;

function checkFile(file) {
  if (file) {
    const format = file.split(".");
    const requiredIndex = format.length - 1;
    if (format[requiredIndex] == "json") {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

function loadFile(file) {
  const checker = checkFile(file);
  if (!checker) {
    console.log("[Error] Please provide proper file path");
  } else {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log("Error occured reading a file");
      } else {
        configFile = formatToJson(data);
        console.log(configFile);
        console.log(configFile.port);
      }
    });
  }
}

function formatToJson(strData) {
  const jsonData = JSON.parse(strData);
  return jsonData;
}

//loadFile(filepath);
fs.readdir("./tasks", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.map((file) => {
      fs.readFile(`./tasks/${file}`, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    });
  }
});
