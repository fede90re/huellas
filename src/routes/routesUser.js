const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const usersController = require("../controllers/usersControllers");

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(path.join(__dirname, "../../public/img/imgUsuarios"))
    },
    filename: (req, file, cb) => {
        const nuevoNombre = "usuario-" + Date.now() + path.extname(file.originalname);
        cb(null, nuevoNombre);
    }
});

const upload = multer({ multerDiskStorage });

router.get("/registro", usersController.registro);

router.post("/registro", upload.single("imagenUsuario"), usersController.crear);

router.get("/login", usersController.login);

router.get("/edit/:idUser", usersController.editar);

router.put("/edit", function (req, res) {
    res.send("probando PUT");
})

router.delete("/delete/:idUser", function (req, res) {
    res.send("probando DELETE");
})

module.exports = router;