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
db.referal.insertOne({
  name: "Abdul",
  company: "Netflix",
  designation: "Architect",
});
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

//cursor methods
db.referal.find().toArray();

db.referal.find().forEach((ref) => {
  print("Ref-Name: ", ref.name);
});

//aggregater methods
//sorting
//ascending
db.posts.find().sort({ experience: 1 });
//descending
db.posts.find().sort({ experience: -1 });
//limiting
db.posts.find().sort({ experience: -1 }).limit(2);
//offset
db.posts.find().sort({ experience: -1 }).limit(2).skip(2);
//count
db.posts.find().count();
//greater than
db.posts.find({ experience: { $gt: 2 } });
//greater than or equal
db.posts.find({ experience: { $gte: 2 } });
//lesser than
db.posts.find({ experience: { $lt: 3 } });
//lesser than or equal
db.posts.find({ experience: { $lte: 3 } });
//in between
db.posts.find({ experience: { $gt: 1, $lt: 5 } });
//not
db.posts.find({ experience: { $not: { $gt: 1, $lt: 5 } } });
//or
db.posts.find({ $or: [{ experience: { $lt: 5 } }, { package: { $gt: 20 } }] });
//and
db.posts.find({ $and: [{ experience: 2 }, { package: 12 }] });

//Aggregation lookup

db.posts.aggregate([
  {
    $lookup: {
      from: "referal",
      localField: "companyName",
      foreignField: "company",
      as: "Related Referals",
    },
  },
]);
//Aggregate group
db.posts.insertOne({
  companyName: "Myntra",
  role: "SDE",
  package: 31,
  experience: 10,
  location: "bangalore",
});
//group and matahc aggregations
db.posts.aggregate([
  { $match: { role: "SDE" } },
  { $group: { _id: "$companyName", totalPackages: { $sum: "$package" } } },
]);

//Crud approach
db.posts.updateOne(
  { _id: ObjectId("663afd94a0eca5dc9809aa6d") },
  { $set: { package: 21 } }
);
//updateMany
db.posts.deleteOne({ _id: ObjectId("663afd94a0eca5dc9809aa6d") });
//deleteMany

//Aggregate operations

db.referal
  .aggregate([
    {
      $group: {
        _id: "$name",
        duplicate: { $addToSet: "$_id" },
        totalCount: { $sum: 1 },
      },
    },
    {
      $match: {
        totalCount: { $gt: 1 },
      },
    },
  ])
  .forEach((doc) => {
    doc.duplicate.shift();
    db.referal.deleteMany({ _id: { $in: doc.duplicate } });
  });
