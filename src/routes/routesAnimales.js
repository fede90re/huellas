const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const animalesController = require("../controllers/animalesControllers");

const validandoFormularios = [
    body("nombre").notEmpty().withMessage("Debes completar el campo de nombre"),
    body("descripcion").notEmpty().withMessage("Debes agregar la descripcion del animal"),
    body("apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body("dni").notEmpty().withMessage("Debes completar con tu número de documento"),
    body("email").isEmail().withMessage("Debes completar con un email válido"),
    body("password").notEmpty().withMessage("Debes completar con una contraseña"),
    body("repetir-password").notEmpty().withMessage("Debes repetir la contraseña")
]

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/img"))
    },
    filename: (req, file, cb) => {
        const nuevaImagenAnimal = "animal-" + Date.now() + path.extname(file.originalname);
        cb(null, nuevaImagenAnimal);
    }
});
const upload = multer({ storage });

// VER TODOS LOS ANIMALES
router.get("/", animalesController.todos);

//CREAR UN ANIMAL
router.get("/crear", animalesController.crear);
router.post("/crear", upload.single("imagen"), validandoFormularios, animalesController.guardar);

// DETALLE DE UN ANIMAL
router.get("/:id", animalesController.detalle);

// EDITAR UN ANIMAL
router.get("/editar/:id", animalesController.editar);
router.put("/editar/:id", animalesController.update);

// ELIMINAR UN PRODUCTO
router.delete("/delete/:id", animalesController.eliminar)

module.exports = router
