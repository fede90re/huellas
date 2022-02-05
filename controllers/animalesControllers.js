const path = require("path");

const animalesController = {

    gatos: function (req, res) {
        let id = req.params.id;
        res.render("gatos", { "id": id });
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
        let detalle = [
            { id: 1, nombre: "Rodolfo y Georgina" },
            { id: 2, nombre: "Lara" },
            { id: 3, nombre: "Enrique" },
            { id: 4, nombre: "Loqui" },
            { id: 5, nombre: "Peque" },
            { id: 6, nombre: "Marce" }
        ]

        //  al pasarle el segundo parámetro puedo utilizar información en la vista con ejs, 
        //  se pueden compartir más de una variable. 
        res.render("detalleGatos", { "id": id, "detalle": detalle });
    },

    editar: function () { },
    eliminar: function () { },




};
module.exports = animalesController;