////Higher order functions
// function whih returns another function
function higherOderFunc(fn) {
  return fn;
}
function returFunc() {
  console.log("I'm returned by another function");
}
const returns = higherOderFunc(returFunc);
//console.log(returns);
//returns();

////////////CallBacks//////////
//Guvi Enrollement

//Course Selection
//student Enrollment
//Payment
//Batch Allocation
//Course Access

function courseSelection(cb) {
  //cb = ()=>{}
  console.log("selection of course done {p1}");
  cb();
}
function studentEnrollment(cb) {
  setTimeout(() => {
    console.log("student enrolled successfully {p2}");
    cb();
  }, 2000);
}
function paymentProcess(cb) {
  setTimeout(() => {
    console.log("payment completed successfully {p3}");
    cb();
  }, 1000);
}
function accessToCourse() {
  console.log("Course access Granted {p4}");
}
//call back Hell (inversion of control) pyramid of DOOM
function guviEnrollment() {
  courseSelection(() => {
    studentEnrollment(() => {
      paymentProcess(() => {
        accessToCourse(() => {
          courseSelection(() => {
            studentEnrollment(() => {
              paymentProcess(() => {
                accessToCourse(() => {
                  courseSelection(() => {
                    studentEnrollment(() => {
                      paymentProcess(() => {
                        accessToCourse();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

//guviEnrollment();

var a = 15;
console.log("first");

setTimeout(() => {
  console.log("timeout1");
});
console.log("second");
console.log("second");
console.log("second");
console.log("second");
console.log("second");
console.log("second");
console.log("second");
console.log("second");
console.log("second");
console.log("second");
console.log("second");
