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

    findOne(id) {
        const animal = animales.find((animals) => {
            return animals.id == id;
        });
        return animal;
    },

}