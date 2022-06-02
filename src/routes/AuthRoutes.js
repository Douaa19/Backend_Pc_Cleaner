const express = require("express");
const router = express.Router();

// require authorization

// require controllers
const { Users } = require("../controllers");

// create routes
router.route("/login").post(Users.handleLogin);

router.route("/register").post(Users.handleRegister);

module.exports = router;
