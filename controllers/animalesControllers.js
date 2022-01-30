const path = require("path");

const animalesController = {

    crear: function () { },
    detalle: function (req, res) {
        const htmlDetalleGatos = path.join(__dirname, "../views/detalleGatos.html")
        res.sendFile(htmlDetalleGatos);
    },
    editar: function () { },
    eliminar: function () { },




};
module.exports = animalesController;