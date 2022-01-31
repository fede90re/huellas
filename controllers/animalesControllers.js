const path = require("path");

const animalesController = {

    gatos: function (req, res) {

        res.render("gatos");
    },
    perros: function (req, res) {
        res.render("perros");
    },
    todos: function (req, res) {
        res.render("animales");
    },
    detalleP: function (req, res) {
        let id = req.params.id;
        res.render("detallePerros", { "id": id })
    },
    detalleG: function (req, res) {
        let id = req.params.id;

        //  al pasarle el segundo parámetro puedo utilizar información en la vista con ejs, 
        //  se pueden compartir más de una variable. 
        res.render("detalleGatos", { "id": id })
    },

    editar: function () { },
    eliminar: function () { },




};
module.exports = animalesController;