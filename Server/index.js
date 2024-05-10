import express from "express";

//Setting PORT
const PORT = 8080;

let interviewData = [
  {
    _id: 1,
    companyName: "Amazon",
    role: "SDE",
    package: 10,
    experience: 1,
    location: "chennai",
  },
  {
    _id: 2,
    companyName: "Flipkart",
    role: "System Architect",
    package: 20,
    experience: 5,
    location: "bangalore",
  },
  {
    _id: 3,
    companyName: "PayPal",
    role: "Full Stack",
    package: 15,
    experience: 3,
    location: "chennai",
  },
  {
    _id: 4,
    companyName: "Myntra",
    role: "SDE",
    package: 12,
    experience: 2,
    location: "Hyderabad",
  },
];

//Initializing Express server
const app = express();
app.use(express.json());
//Request to listent
app.get("/", (req, res) => {
  res.send(`<h1>Hi</h1>`);
});

app.get("/query", (req, res) => {
  //http://localhost:8080/query?lan=eng&id=xvf543&apikey=hasgdhjagsa
  const data = req.query;
  console.log(data);
  res.send("query response");
});

app.get("/param/:id/:token", (req, res) => {
  //http://localhost:8080/param/123/tragvujhafuyat7867821as.jkjhasjha
  const params = req.params;
  console.log(params);
  res.send("params send");
});

//application api layers

//getting datasets
app.get("/all/interview", (req, res) => {
  const _id = req.query.id;
  if (_id) {
    const reqData = interviewData.filter((data) => data._id == _id);
    return res.json(reqData);
  }
  return res.json(interviewData);
});

//add new datasets
app.post("/add/interview", (req, res) => {
  const newInterview = { ...req.body, _id: interviewData.length + 1 };
  interviewData.push(newInterview);
  return res.json(interviewData);
});

app.put("/edit/interview/:id", (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  let editableData = interviewData.find((data) => data._id == _id);
  editableData = { _id: editableData._id, ...req.body };
  interviewData[editableData._id - 1] = editableData;
  return res.json(interviewData);
});

app.delete("/delete/interview/:id", (req, res) => {
  const _id = req.params.id;
  let newset = interviewData.filter((data) => data._id != _id);
  interviewData = [...newset];
  return res.json(interviewData);
});

app.get("/setTime", (req, res) => {
  const data = new Date();
  const timestamp = data.toUTCString();
  console.log(timestamp);
  return res.send(timestamp);
});

//activating and listening server
app.listen(PORT, () => {
  console.log(`
  Server started in PORT : ${PORT}
  Listening in http://localhost:${PORT}
          `);
});
