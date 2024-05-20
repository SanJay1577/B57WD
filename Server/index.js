import express from "express";
import { dbConnection } from "./db.js";
import { Users } from "./models/users.js";
import { postsRouter } from "./routes/posts.js";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";

//Configuring Environmental Variables
dotenv.config();

//Setting ENV Fields
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//database connection
dbConnection(MONGO_URL);

//Initializing Express server
const app = express();

//Middlewares
app.use(express.json());

//Routes intialization
app.use("/api/posts", postsRouter);
app.use("/api/users", userRouter);

//activating and listening server
app.listen(PORT, () => {
  console.log(`
  Server started in PORT : ${PORT}
  Listening in http://localhost:${PORT}
          `);
});
