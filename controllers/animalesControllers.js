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
        res.render("detallePerros")
    },
    detalleG: function (req, res) {
        res.render("detalleGatos")
    },


    editar: function () { },
    eliminar: function () { },




};
module.exports = animalesController;