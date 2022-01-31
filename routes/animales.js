const express = require("express");
const path = require("path");
const animalesController = require("../controllers/animalesControllers");
const router = express.Router()

router.get("/", animalesController.todos);

module.exports = router