const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
    const htmlPerros = path.join(__dirname, "../views/perros.html")
    res.sendFile(htmlPerros);
});

module.exports = router;