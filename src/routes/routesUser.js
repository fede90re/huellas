const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const usersControllers = require("../controllers/usersControllers");

const validandoFormulariosUsuarios = [
    body("nombre").notEmpty().withMessage("Debes completar el campo de nombre"),
    body("apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body("DNI").notEmpty().withMessage("Debes completar con tu número de documento"),
    body("email").isEmail().withMessage("Debes completar con un email válido"),
    body("password").notEmpty().withMessage("Debes completar con una contraseña"),
    body("repetir-password").notEmpty().withMessage("Debes repetir la contraseña")
]

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/img/imgUsuarios"))
    },
    filename: (req, file, cb) => {
        const nuevoNombre = "usuario-" + Date.now() + path.extname(file.originalname);
        cb(null, nuevoNombre);
    }
});

const upload = multer({ multerDiskStorage });


// CREAR UN USUARIO
router.get("/registro", usersControllers.crear);
router.post("/registro", upload.single("imagenUsuario"), validandoFormulariosUsuarios, usersControllers.guardar);

// ENTRAR AL LOGIN
router.get("/login", usersControllers.login);

// EDITAR UN USUARIO
router.get("/edit/:idUser", usersControllers.editar);
router.put("/edit/:idUser", usersControllers.update);


// ELIMINAR UN USUARIO
router.delete("/delete/:idUser", function (req, res) {
    res.send("probando DELETE");
})

module.exports = router;