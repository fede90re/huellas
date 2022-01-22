const express = require("express");
const path = require("path");
const router = express.Router();


router.get("/", function (req, res) {
    const htmlHome = path.join(__dirname, "../views/index.html")
    res.sendFile(htmlHome);
});


module.exports = router;
