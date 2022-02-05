const express = require("express");
const usersController = require("../controllers/usersControllers");
const router = express.Router();

router.get("/registro", usersController.registro);

router.post("/registro", usersController.crear);

router.get("/login", usersController.login);

router.get("/edit/:idUser", usersController.editar);

router.put("/edit", function (req, res) {
    res.send("probando PUT");
})

module.exports = router;