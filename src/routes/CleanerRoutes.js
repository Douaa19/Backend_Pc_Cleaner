const express = require("express");
const router = express.Router();

//
const { Analyse } = require("../controllers");

// analyse
router.route("/analyse")
.get(Analyse.Analyse);

// clean
router.route("/clean");

// history
router.route("/history");

module.exports = router;
