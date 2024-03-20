//OOPS
//Factory functions
// return an objects
function createToy(name, dia, type, color, wrapper) {
  return {
    name,
    dia,
    type,
    color,
    wrapper,
    buildToy: function () {
      console.log(`
    Start Manufacturing ${name}
    Head is builing for ${dia} diameter
    Body type is build for ${type} Body
    Color of the toy is assigened to be ${color}
    packing the toy in ${wrapper}
   `);
    },
    info: function () {
      console.log(`I'm, ${name}, I was build in createtoy method`);
    },
  };
}

const toy1 = createToy("Toy1", "50cm", "Cone", "red", "box");
const toy2 = createToy("TOY2", "60CM", "Sqaure", "blue", "Cone");

console.log(toy1);
console.log(toy2);
toy1.buildToy();
toy1.info();
toy2.buildToy();
toy2.info();

//This keyword
const Obj = {
  land: "Property Land in GrandFather",
  getLand: function () {
    console.log(this.land);
  },
  innerObj: {
    land: "Property owned by father",
    getLand: function () {
      console.log(this.land);
    },
    //Tagets only the global object
    getDetails: () => {
      console.log("Inner Obj1", this);
    },
    //Target Immediate Parent
    getDeatailsin() {
      const arrowFunc = () => {
        console.log("Inner Obj2", this);
      };
      arrowFunc();
    },
  },
};

console.log(Obj);
Obj.getLand();
Obj.innerObj.getLand();
console.log("Global window", this);
Obj.innerObj.getDetails();
Obj.innerObj.getDeatailsin();

//constructor functions
// Create an object {}
function Product(name, price, type) {
  //{} creates an object {product_name : "HP53" }
  this.product_name = name;
  this.product_price = price;
  this.product_type = type;
  this.getDetails = function () {
    console.log(`
    Product Name : ${this.product_name}
    Product Price : ${this.product_price}
    Product type : ${this.product_type}
    `);
  };
}

Product.prototype.getPName = function () {
  console.log("Product Name : ", this.product_name);
};

const HpLaptop = new Product("HP53", 50000, "Electronics");
console.log(HpLaptop);
HpLaptop.getDetails();
HpLaptop.getPName();

//Class in JS
//4 Pillars
//Encapsulation (data, method)
//Inheritance
//Abstraction
//PolyMorphism

class Guvi {
  //Encapsulation
  constructor(batch, topic, mentor, time, task) {
    // {}
    //Polymorphism
    this.batch = `FSD${batch}WD2`;
    this.topic = topic;
    this.mentor = mentor;
    this.time = time;
    this.task = task;
  }
  //Abstraction
  getTaskPercentage() {
    let taskpercentage = (this.task * 100) / 67;
    console.log("Task percentage ", taskpercentage.toFixed(2));
  }
  getBatchDetails() {
    console.log("The batch info is", this.batch);
  }
  getTodayTopic() {
    console.log("The Topic info is", this.topic);
  }
  getOverALlDetails() {
    console.log(`
       Batch : ${this.batch}
       Topic :  ${this.topic}
       Mentor : ${this.mentor}
    `);
  }
}

const todaySession = new Guvi(57, "OOPS", "Sanjay", "8.10", 60);
console.log(todaySession);
todaySession.getTaskPercentage();

//Inheritance
class Student extends Guvi {
  constructor(batch, topic, mentor, time, task, name, course) {
    super(batch, topic, mentor, time, task);
    this.student_name = name;
    this._student_course = course;
  }
  //getter method
  get student_course() {
    return this._student_course;
  }
  //setter method
  set student_course(newCourse) {
    if (newCourse.length <= 0 || newCourse.length > 10) {
      console.log("ERROR setting course");
    } else {
      this._student_course = newCourse;
    }
  }
  getStudentInfo() {
    console.log(`
    StudentName : ${this.student_name}
    StudentCourse : ${this._student_course}
    `);
  }
}

const cubert = new Student(57, "OOPS", "Sanjay", "8.10", 60, "Cubert", "MERN");
console.log(cubert);
cubert.getStudentInfo();
cubert.getTodayTopic();

console.log(cubert.student_course);
cubert.student_course = "FSD";
console.log(cubert.student_course);
