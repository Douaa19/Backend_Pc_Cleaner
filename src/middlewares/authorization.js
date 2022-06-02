require("dotenv").config();
const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    res.status(401).json({ error: "No token found!" });
  } else {
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
      if (err) {
        res.json(err.message);
      } else {
        req.user = {
          id: user.id,
          role: user.role.name,
          username: user.username,
          email: user.email,
        };
        next();
      }
    });
  }
};

module.exports = {
  authorization,
};
