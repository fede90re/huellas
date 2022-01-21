const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
    const htmlLogin = path.join(__dirname, "../views/login.html")
    res.sendFile(htmlLogin);
})

module.exports = router;
