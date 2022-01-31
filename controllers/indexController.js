const path = require("path");

const indexController = {

    home: function (req, res) {
        const htmlHome = path.join(__dirname, "../views/index.ejs")
        res.sendFile(htmlHome);
    },
    registro: function (req, res) {
        res.render("registro");
    },

    detalle: function () {
    },
    editar: function () { },
    eliminar: function () { },




};
module.exports = indexController;