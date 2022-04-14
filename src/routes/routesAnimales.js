const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const animalesController = require("../controllers/animalesControllers");

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
router.post("/crear", upload.single("imagen"), animalesController.guardar);

// DETALLE DE UN ANIMAL
router.get("/:id", animalesController.detalle);

// EDITAR UN ANIMAL
router.get("/editar/:id", animalesController.editar);
router.put("/editar", animalesController.update);

// ELIMINAR UN PRODUCTO
router.delete("/delete/:id", animalesController.eliminar)

module.exports = router
