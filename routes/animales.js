const express = require("express");
const path = require("path");
const router = express.Router()

router.get("/", function (req, res) {
    const htmlAnimales = path.join(__dirname, "../views/animales.html")
    res.sendFile(htmlAnimales);
});

module.exports = router