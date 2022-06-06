const express = require("express");
const router = express.Router();

// Controller
const { History } = require("../controllers");

router.route("/").get(History.getHistory);

module.exports = router;
