const decryptMessage = require("../configurations/decrypt");
let separator = "é&=6=)";

module.exports = (req, res, next) => {
  const timeNow = new Date().getTime();
  let secretMessage = req.headers.authorization;
  secretMessage = decryptMessage(secretMessage).split(separator);

  const userAgent = secretMessage[0] === req.get("User-Agent");
  const hostname = secretMessage[1] === req.headers.origin;
  const timeDifference = timeNow - parseInt(secretMessage[2]) < 7200000;
  const random6 = secretMessage[3].length === 6;

  if (userAgent && hostname && timeDifference && random6) {
    next();
  } else res.status(404).json({ message: "QUi etes vous ?" });
};
