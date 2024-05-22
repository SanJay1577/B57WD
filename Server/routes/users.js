import express from "express";
import bcrypt from "bcrypt";
import { addNewUser, getUserByEmail } from "../Controllers/users.js";
import { generateAuthtoken } from "../Controllers/auth.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    // check if the user is available in DB
    // return an errror response
    let user = await getUserByEmail(req);
    if (user) {
      return res.status(400).json({
        error: "Email already exist",
      });
    }
    // encrypting your password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //save and register new user in DB
    // return success message with user details
    user = await addNewUser(req, hashedPassword);
    //generate auth token
    const token = generateAuthtoken(user._id);
    return res.status(201).json({
      message: "User Registered Successfuly",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    // User email available in Db
    const user = await getUserByEmail(req);
    // not available returning bad request
    if (!user) {
      return res.status(404).json({
        error: "Invalid Credentials",
      });
    }
    // password decryption and validation
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isValidPassword) {
      return res.status(400).json({
        error: "Invalid Credentials",
      });
    }
    //generate auth token
    const token = generateAuthtoken(user._id);
    //sending user information with success message
    return res.status(200).json({
      message: "Successfully Loggedin",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});
export const userRouter = router;
