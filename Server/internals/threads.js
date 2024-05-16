// process.env.UV_THREADPOOL_SIZE = 5;
import crypto from "crypto";
import fs from "fs";
import callerFunction from "sanjay_convertor";
// V8 (js - > c++) + libuv (os - access)
const processStart = Date.now();
function processFunc(num) {
  crypto.pbkdf2("abc", "bcd", 100000, 512, "sha512", () => {
    console.log(`${num}:`, Date.now() - processStart);
  });
}

// processFunc(1);
// processFunc(2);
// processFunc(3);
// processFunc(4);

function nonBlockingFunction() {
  fs.readFile("./sample.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  fs.writeFile("write.txt", "new file writted", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file written");
    }
  });

  console.log("file execution done");
}

// nonBlockingFunction();

function blockingFunction() {
  const data = fs.readFileSync("./sample.txt", "utf-8");
  console.log(data);

  fs.writeFileSync("write.txt", "new file writted");

  console.log("file execution done");
}

//lockingFunction();

callerFunction();
// function doSomething (){
// yes we can
// }

// const timer = [p1];
// const os = [server];
// const file = [osprcess];

// TextTrackList.process();

// function shouldProcess() {
//   //procees 1 : setTimeout , setInterval, setImmediate
//   //process 2 : os realted (server port)
//   //process 3:  read file (time)
//   return timer.length || os.length || file.length;
// }

// //event loop (execute in one 'tick')
// while (shouldProcess()) {
//   //1 timer if any function ready to be executed (settimeout , interval)
//   //2 os callbasks execute
//   // 3) pause and wait (until it is getting ready)
//   //4 (setImmediate)
//   //5 ) clean up operation
// }

// //exit terminal
