const path = require("path");
const fs = require("fs");

//para que funcione la base de datos
const animalesFilePath = path.join(__dirname, '../data/animalesDataBase.json');
const animales = JSON.parse(fs.readFileSync(animalesFilePath, 'utf-8'));

//modifico la base de datos y la sobreescribo con el nuevo animal
function guardarAnimal() {
    const texto = JSON.stringify(animales, null, 4);
    fs.writeFileSync(animalesFilePath, texto, "utf-8");
}

const animalesController = {

    //  al pasarle el segundo parámetro puedo utilizar información en la vista con ejs,
    //  se pueden compartir más de una variable. 

    todos: function (req, res) {
        res.render("animales", { animales: animales })
    },

    guardar: function (req, res) {
        let animalNuevo = {
            id: Date.now(),
            // con la destructuración "..." es lo mismo que tomar todas las propiedades del body
            // y aplicarlas al objeto, y usar los valores del body en ese objeto
            ...req.body
        };
        animales.push(animalNuevo);
        guardarAnimal();

        //guardar la info
        res.redirect("/animales");
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
        res.send(animal); //¿Va todavía?
    },

    update: function (req, res) {

        const id = req.params.id;

        //con el findIndex busco el índice del array donde está ese animal
        const indice = animales.findIndex((animals) => {
            return animals.id == id;
        });

        //modifico el animal
        const actualizarAnimal = {
            ...req.body,
        };

        //piso el elemento del array con ese animal que modifique 
        animales[indice] = actualizarAnimal;

        guardarAnimal();

        res.redirect("/animales/" + id)
    },

    eliminar: function (req, res) {

        const id = req.params.id;

        const indice = animales.findIndex((animals) => {
            return animals.id == id;
        });

        //el SPLICE me borra un animal del array en el INDICE que le indico arriba
        animales.splice(indice, 1);
        guardarAnimal();
    },

    crear: function (req, res) {
        res.render("crearAnimal")
    }

};
module.exports = animalesController;