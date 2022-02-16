const express = require("express");
const path = require("path");
const animalesController = require("../controllers/animalesControllers");
const router = express.Router();

router.get("/", animalesController.perros);

router.get("/detalle/:id/", animalesController.detalleP);

module.exports = router;