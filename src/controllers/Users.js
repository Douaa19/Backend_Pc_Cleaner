require("dotenv").config();
const { User } = require("../models");
const jwt = require("jsonwebtoken");

// login
const handleLogin = (req, res) => {
  (async () => {
    if (!req.body.email) res.json("email is not here!");
    // Find user's email in the data base
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.json({ message: "User not found!" });
    } else if (!req.body.password) {
      res.json({ message: "password is not here!" });
    } else {
      await user
        .comparePasswords(req.body.password)
        .then((result) => {
          if (!result) {
            res.json({ message: "Password in incorrect! Please try again." });
          } else {
            const id = user._id;
            const username = user.username;
            const email = user.email;
            const myToken = jwt.sign(
              { id, username, email },
              process.env.JWT_ACCESS_SECRET
            );
            res.json({ myToken });
          }
        })
        .catch((err) => console.log({ err }));
    }
  })();
};
// login
const handleRegister = (req, res) => {
  const user = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.repeated_password,
  ];

  // Check if the password and the repeated password are the same
  if (user[2] !== user[3]) {
    res.json({ error: "The passwords are not the same!" });
  }

  (async () => {
    try {
      await User.create({
        username: user[0],
        email: user[1],
        password: user[3],
      });
      res.status(200).json({ message: "User is created!" });
    } catch (err) {
      console.log(err);
    }
  })();
};

module.exports = {
  handleLogin,
  handleRegister,
};
