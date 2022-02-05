const express = require("express");
const animalesController = require("../controllers/animalesControllers");
const router = express.Router()

router.get("/", animalesController.todos);

module.exports = router