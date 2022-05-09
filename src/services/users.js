const path = require("path");
const fs = require("fs");
const { crearUno } = require("./animales");

//para que funcione la base de datos
const usuariosFilePath = path.join(__dirname, '../data/usuariosDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

//modifico la base de datos y la sobreescribo con el nuevo animal
function guardarUsuario() {
    const texto = JSON.stringify(usuarios, null, 4);
    fs.writeFileSync(usuariosFilePath, texto, "utf-8");
}

module.exports = {
    usuarios,
    guardarUsuario,

    encontrarUno(id) {
        const usuario = usuarios.find((users) => {
            return users.id == id;
        });
        return usuario;
    },

    crearUno(body) {
        let usuarioNuevo = {
            id: Date.now(),
            // con la destructuración "..." es lo mismo que tomar todas las propiedades del body
            // y aplicarlas al objeto, y usar los valores del body en ese objeto
            ...body
        };
        usuarios.push(usuarioNuevo);
        guardarUsuario();
    },

    actualizarUno(id, body) {
        //con el findIndex busco el índice del array donde está ese animal
        const indice = usuarios.findIndex((users) => {
            return users.id == id;
        });

        const actualizarUsuario = {
            id: usuarios[indice].id,
            ...body,
        };

        usuarios[indice] = actualizarUsuario;

        guardarUsuario();
    },

    eliminarUno(id) {
        const indice = usuarios.findIndex((users) => {
            return users.id == id;
        });

        //el SPLICE me borra un usuario del array en el INDICE que le indico arriba
        usuarios.splice(indice, 1);
        guardarUsuario();
    },
}