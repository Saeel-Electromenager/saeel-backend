const jwt = require("jsonwebtoken");

require("dotenv").config();
const RANDOM_TOKEN_SECRET = process.env.RANDOM_TOKEN_SECRET;

module.exports = (req, res, next) => {
  try {
    console.log("--------------");
    req.auth = { idUser: req.headers.authorization.split(" ")[0] };
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, RANDOM_TOKEN_SECRET);
    const idUser = decodedToken.idUser;
    if (!idUser || idUser != req.auth.idUser) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    console.log("--------------");
    console.log("??");
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
