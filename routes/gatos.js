const express = require("express");
const path = require("path");
const router = express.Router()
const animalesController = require("../controllers/animalesControllers.js")

router.get("/", animalesController.gatos);

router.get("/detalle/:id/", animalesController.detalleG);


module.exports = router