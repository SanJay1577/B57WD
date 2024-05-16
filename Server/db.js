import mongoose from "mongoose";

export function dbConnection(MONGO_URL) {
  try {
    mongoose.connect(MONGO_URL);
    console.log("Database Connected Sucessfully");
  } catch (error) {
    console.log("MonogoDb Connection Error");
  }
}
