const path = require("path");
const fs = require("fs");

//para que funcione la base de datos
const animalesFilePath = path.join(__dirname, '../data/animalesDataBase.json');
const animales = JSON.parse(fs.readFileSync(animalesFilePath, 'utf-8'));
console.log(animales)



const animalesController = {

    todos: function (req, res) {
        res.render("animales", { animales: animales })
    },
    crear: function (req, res) {
        res.render("crear")
    },
    store: function (req, res) {
        res.redirect("/animales")
    },
    detalle: function (req, res) {
        res.render("detalle")
    },
    editar: function () { },
    update: function () { },
    eliminar: function () { },

    gatos: function (req, res) {
        let id = req.params.id;
        res.render("gatos", { id: id });
    },
    perros: function (req, res) {
        res.render("perros");
    },
    detalleP: function (req, res) {
        let id = req.params.id;
        res.render("detallePerros", { id: id })
    },
    detalleG: function (req, res) {
        let id = req.params.id;

        //  al pasarle el segundo parámetro puedo utilizar información en la vista con ejs, 
        //  se pueden compartir más de una variable. 
        res.render("detalleGatos", { "id": id });
    },




};
module.exports = animalesController;