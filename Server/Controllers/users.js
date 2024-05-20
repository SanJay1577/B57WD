import { Users } from "../models/users.js";

export function getUserByEmail(req) {
  return Users.findOne({
    email: req.body.email,
  });
}

export function addNewUser(req, hashedPassword) {
  return new Users({
    ...req.body,
    password: hashedPassword,
  }).save();
}
