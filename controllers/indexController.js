const path = require("path");

const indexController = {

    home: function (req, res) {
        res.render("index");
    },
    login: function (req, res) {
        res.render("login");
    },
    registro: function (req, res) {
        res.render("registro");
    },

    detalle: function () {
    },
    editar: function () { },
    eliminar: function () { },




};
module.exports = indexController;