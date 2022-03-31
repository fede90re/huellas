const express = require("express");
const animalesController = require("../controllers/animalesControllers");
const router = express.Router()

// VER TODOS LOS ANIMALES
router.get("/", animalesController.todos);

//CREAR UN ANIMAL
router.get("/crear", animalesController.crear);
router.post("/crear", animalesController.guardar); //use STORE porque lo usaba en la clase 21, despues cambiarlo

// EDITAR UN ANIMAL
router.get("/editar/:id", animalesController.editar);
router.put("/editar", animalesController.update);

// ELIMINAR UN PRODUCTO
router.delete("/delete/:id", animalesController.eliminar)

module.exports = router