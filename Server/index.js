import express from "express";
import { dbConnection } from "./db.js";
import { postsRouter } from "./routes/posts.js";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/users.js";
import { isAuthenticated } from "./Middlewares/auth.js";

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
app.use(cors());

//Routes intialization
app.use("/api/posts", isAuthenticated, postsRouter);
app.use("/api/users", userRouter);

//activating and listening server
app.listen(PORT, () => {
  console.log(`
  Server started in PORT : ${PORT}
  Listening in http://localhost:${PORT}
          `);
});
