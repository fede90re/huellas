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
        let animalNuevo = {
            id: Date.now(),
            // con la destructuración "..." es lo mismo que tomar todas las propiedades del body
            // y aplicarlas al objeto, y usar los valores del body en ese objeto
            ...req.body
        };
        animalesService.animales.push(animalNuevo);
        animalesService.guardarAnimal();

        res.redirect("/animales");
    },

    detalle: function (req, res) {
        const id = req.params.id;

        const animal = animalesService.findOne(id);

        res.render("detalle", { animal });
    },


    // Utilizo el find para encontrar el primer animal que coincida con el id que se busca.
    // Así solamente necesito pasarle a la vista la página a renderizar y la variable que declaro.
    editar: function (req, res) {
        const id = req.params.id;
        const animal = animales.find((animals) => {
            return animals.id == id;
        });
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

        animalesService.guardarAnimal();

        res.redirect("/animales/" + id)
    },

    eliminar: function (req, res) {

        const id = req.params.id;

        const indice = animales.findIndex((animals) => {
            return animals.id == id;
        });

        //el SPLICE me borra un animal del array en el INDICE que le indico arriba
        animales.splice(indice, 1);
        animalesService.guardarAnimal();

        res.redirect("/animales");
    }


};
module.exports = animalesController;