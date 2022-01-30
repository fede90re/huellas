const path = require("path");

const indexController = {

    home: function (req, res) {
        const htmlHome = path.join(__dirname, "../views/index.html")
        res.sendFile(htmlHome);
    },
    detalle: function () {
    },
    editar: function () { },
    eliminar: function () { },




};
module.exports = indexController;