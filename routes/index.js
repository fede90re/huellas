const express = require("express");
const path = require("path");
const indexController = require("../controllers/indexController");
const router = express.Router();


router.get("/", indexController.home);


module.exports = router;
