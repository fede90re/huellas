const express = require("express");
const usersController = require("../controllers/usersControllers");
const router = express.Router();

router.get("/registro", usersController.registro);

router.post("/registro", usersController.crear);

router.get("/login", usersController.login);

module.exports = router;