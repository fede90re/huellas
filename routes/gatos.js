const express = require("express");
const path = require("path");
const router = express.Router()

router.get("/", function (req, res) {
    const htmlGatos = path.join(__dirname, "../views/gatos.html")
    res.sendFile(htmlGatos);
});

module.exports = router