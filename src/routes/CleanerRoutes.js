const express = require("express");
const router = express.Router();

//
const { Analyse, Cleane } = require("../controllers");

// analyse
router.route("/analyse").post(Analyse.Analyse);

// clean
router.route("/").get(Cleane.cleane);

module.exports = router;
