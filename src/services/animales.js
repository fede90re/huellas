const fs = require("fs");
const path = require("path");

//para que funcione la base de datos
const animalesFilePath = path.join(__dirname, '../data/animalesDataBase.json');
const animales = JSON.parse(fs.readFileSync(animalesFilePath, 'utf-8')); //Array de animales

//modifico la base de datos y la sobreescribo con el nuevo animal
function guardarAnimal() {
    const texto = JSON.stringify(animales, null, 4);
    fs.writeFileSync(animalesFilePath, texto, "utf-8");
}

module.exports = {
    animales,
    guardarAnimal,

    EncontrarUno(id) {
        const animal = animales.find((animals) => {
            return animals.id == id;
        });
        return animal;
    },

    crearUno(body) {
        let animalNuevo = {
            id: Date.now(),
            // con la destructuración "..." es lo mismo que tomar todas las propiedades del body
            // y aplicarlas al objeto, y usar los valores del body en ese objeto
            ...body
        };
        animales.push(animalNuevo);
        guardarAnimal();
    },

    actiualizarUno(id, body) {
        //con el findIndex busco el índice del array donde está ese animal
        const indice = animales.findIndex((animals) => {
            return animals.id == id;
        });

        const actualizarAnimal = {
            id: animales[indice].id,
            ...body,
        };

        animales[indice] = actualizarAnimal;

        guardarAnimal();
    },

    eliminarUno(id) {
        const indice = animales.findIndex((animals) => {
            return animals.id == id;
        });

        //el SPLICE me borra un animal del array en el INDICE que le indico arriba
        animales.splice(indice, 1);
        guardarAnimal();
    },
}