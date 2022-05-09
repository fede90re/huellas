const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const usersController = require("../controllers/usersControllers");

const validandoFormularios = [
    body("nombre").notEmpty().withMessage("Debes completar el campo de nombre"),
    body("descripcion").notEmpty().withMessage("Debes agregar la descripcion del animal"),
    body("apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body("dni").notEmpty().withMessage("Debes completar con tu número de documento"),
    body("email").isEmail().withMessage("Debes completar con un email válido"),
    body("password").notEmpty().withMessage("Debes completar con una contraseña"),
    body("repetir-password").notEmpty().withMessage("Debes repetir la contraseña")
]

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


// CREAR UN USUARIO
router.get("/registro", usersControllers.crear);
router.post("/registro", upload.single("imagenUsuario"), validandoFormularios, usersController.guardar);

// ENTRAR AL LOGIN
router.get("/login", usersControllers.login);

// EDITAR UN USUARIO
router.get("/edit/:idUser", usersControllers.editar);
router.put("/edit", usersControllers.update);
})


// ELIMINAR UN USUARIO
router.delete("/delete/:idUser", function (req, res) {
    res.send("probando DELETE");
})

module.exports = router;