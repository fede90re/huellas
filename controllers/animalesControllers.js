const path = require("path");
const fs = require("fs");

//para que funcione la base de datos
const animalesFilePath = path.join(__dirname, '../src/data/animalesDataBase.json');
const animalesFileText = JSON.parse(fs.readFileSync(animalesFilePath, 'utf-8'));
const animales = JSON.parse(animalesFileText); //ARRAY de ANIMALES


const animalesController = {

    todos: function (req, res) {
        res.render("animales", { animales: animales })
    },

    gatos: function (req, res) {
        let id = req.params.id;
        res.render("gatos", { id: id });
    },
    perros: function (req, res) {
        res.render("perros");
    },
    store: function (req, res) {
        res.render("animales", { animales: animales });
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

    editar: function () { },
    eliminar: function () { },




};
module.exports = animalesController;