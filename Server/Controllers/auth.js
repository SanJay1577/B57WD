import jwt from "jsonwebtoken";

export function generateAuthtoken(id) {
  return jwt.sign({ id }, process.env.SECRET_KEY);
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.SECRET_KEY);
}
