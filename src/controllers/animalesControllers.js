const { validationResult } = require("express-validator");
const animalesService = require("../services/animales");



const animalesController = {

    //  al pasarle el segundo parámetro puedo utilizar información en la vista con ejs,
    //  se pueden compartir más de una variable. 

    todos: function (req, res) {
        res.render("animales", { animales: animalesService.animales })
    },

    crear: function (req, res) {
        res.render("crearAnimal")
    },

    guardar: function (req, res) {
        let errores = validationResult(req);

        if (errores.isEmpty()) {
            animalesService.crearUno(req.body)
            res.redirect("/animales");
        } else {
            res.render("crearAnimal", { errores: errores.array() });
        }
    },

    detalle: function (req, res) {
        const id = req.params.id;
        const animal = animalesService.EncontrarUno(id);
        res.render("detalle", {
            animal,
        });
    },

    editar: function (req, res) {
        const id = req.params.id;
        const animal = animalesService.EncontrarUno(id);
        res.render("editarAnimal", {
            animal,
        });
    },

    update: function (req, res) {
        const id = req.params.id;
        animalesService.actiualizarUno(id, req.body);
        res.redirect("/animales/" + id);
    },

    eliminar: function (req, res) {
        const id = req.params.id;
        animalesService.eliminarUno(id);
        res.redirect("/animales");
    }


};
module.exports = animalesController;