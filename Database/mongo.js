//DB server
//list of DB -> show dbs
//access or create certain db
// --> use <dbName>
// list all collections
//--> show collections
//drop this db
///---> db.dropDatabase(); -> { ok: 1, dropped: 'interview' }

//collections
// db.createCollection("posts")
//
//inserting posts data

db.posts.insertMany([
  {
    companyName: "Amazon",
    role: "SDE",
    package: 10,
    experience: 1,
    location: "chennai",
  },
  {
    companyName: "Flipkart",
    role: "System Architect",
    package: 20,
    experience: 5,
    location: "bangalore",
  },
  {
    companyName: "PayPal",
    role: "Full Stack",
    package: 15,
    experience: 3,
    location: "chennai",
  },
  {
    companyName: "Myntra",
    role: "SDE",
    package: 12,
    experience: 2,
    location: "Hyderabad",
  },
]);
// creating collection using insert command
db.referal.insertMany([
  {
    name: "sanjay",
    company: "Amazon",
    designation: "Lead",
  },
  {
    name: "praveen",
    company: "Amazon",
    designation: "FDE",
  },
  {
    name: "shanthini",
    company: "Flipkart",
    designation: "Developer",
  },
  {
    name: "Thirumaran",
    company: "Myntra",
    designation: "SDE",
  },
  {
    name: "Selvan",
    company: "Paypal",
    designation: "SDE",
  },
  {
    name: "Josco",
    company: "Flipkart",
    designation: "FSD",
  },
]);

//Find the documents available in the collections
//db.collectioname.find();
db.posts.find();
db.referal.find();
//_id : objectId(unique objectId) //mongodb

//unique data
db.referal.find({ _id: ObjectId("6639a9f4178a30fc4c2dcbe4") });
//getting only one document that is first
db.referal.findOne({ company: "Amazon" });
//getting all the filtered data alone
db.referal.find({ company: "Amazon" });
