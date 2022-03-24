const path = require("path");
const fs = require("fs");

//para que funcione la base de datos
const animalesFilePath = path.join(__dirname, '../data/animalesDataBase.json');
const animales = JSON.parse(fs.readFileSync(animalesFilePath, 'utf-8'));




const animalesController = {

    todos: function (req, res) {
        res.render("animales", { animales: animales })
    },
    crear: function (req, res) {
        res.render("crear")
    },
    store: function (req, res) {
        res.redirect("animales")
    },

    // Utilizo el find para encontrar el primer animal que coincida con el id que se busca.
    // Así solamente necesito pasarle a la vista la página a renderizar y la variable que declaro.

    editar: function (req, res) {
        const id = req.params.id;
        const animal = animales.find((animals) => {
            return animals.id == id;
        })
        res.render("editar", {
            animal
        })
    },
    update: function () { },
    eliminar: function () { },



    //  al pasarle el segundo parámetro puedo utilizar información en la vista con ejs, 
    //  se pueden compartir más de una variable. 

};
module.exports = animalesController;