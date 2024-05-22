import { verifyToken } from "../Controllers/auth.js";
import { getUserById } from "../Controllers/users.js";

export async function isAuthenticated(req, res, next) {
  if (req.headers["x-auth-token"]) {
    try {
      let token = await req.headers["x-auth-token"];
      let decode;
      try {
        decode = verifyToken(token);
      } catch (error) {
        return res.status(400).json({ error: "Invalid Token" });
      }
      req.user = await getUserById(decode.id);
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  } else {
    return res.status(400).json({ error: "Invalid Authorization" });
  }
}
