const express = require("express");
const animalesController = require("../controllers/animalesControllers");
const router = express.Router()

// VER TODOS LOS ANIMALES
router.get("/", animalesController.todos);

//CREAR UN ANIMAL
router.get("/crear", animalesController.crear);
router.post("/crear", animalesController.store); //use STORE porque lo usaba en la clase 21, despues cambiarlo

// DETALLE DE UN ANIMAL
router.get("/:id", animalesController.detalle);

// EDITAR UN ANIMAL
router.get("/:id/editar", animalesController.editar);
router.put("/:id", animalesController.update);

// ELIMINAR UN PRODUCTO
router.delete("/:id", animalesController.eliminar)

module.exports = router