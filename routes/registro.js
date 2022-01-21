const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
    const htmlRegistro = path.join(__dirname, "../views/registro.html")
    res.sendFile(htmlRegistro);
})

module.exports = router;