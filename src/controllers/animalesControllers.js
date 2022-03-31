const path = require("path");
const fs = require("fs");

//para que funcione la base de datos
const animalesFilePath = path.join(__dirname, '../data/animalesDataBase.json');
const animales = JSON.parse(fs.readFileSync(animalesFilePath, 'utf-8'));


const animalesController = {


    //  al pasarle el segundo parámetro puedo utilizar información en la vista con ejs,
    //  se pueden compartir más de una variable. 

    todos: function (req, res) {
        res.render("animales", { animales: animales })
    },

    // Utilizo el find para encontrar el primer animal que coincida con el id que se busca.
    // Así solamente necesito pasarle a la vista la página a renderizar y la variable que declaro.
    editar: function (req, res) {
        const id = req.params.id;
        const animal = animales.find((animals) => {
            return animals.id == id;
        })
        res.render("editarAnimal", {
            animal
        })
        res.send(animal);
    },

    update: function (req, res) {
        res.send("FUI POR PUT!")
    },

    eliminar: function (req, res) {
        res.send("VIAJA POR DELETE!")
    },

    crear: function (req, res) {
        res.render("crearAnimal")
    },

    guardar: function (req, res) {
        let animalNuevo = {
            tipo: req.body.tipo,
            edad: req.body.edad,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagenes: req.body.imagen
        }

        //guardar la info
        res.redirect("/animales");

    }
};
module.exports = animalesController;