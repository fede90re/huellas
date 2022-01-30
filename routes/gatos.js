const express = require("express");
const path = require("path");
const router = express.Router()
const animalesController = require("../controllers/animalesControllers.js")

router.get("/", function (req, res) {
    const htmlGatos = path.join(__dirname, "../views/gatos.html")
    res.sendFile(htmlGatos);
});


router.get("/detalle/:id/", animalesController.detalle);


module.exports = router