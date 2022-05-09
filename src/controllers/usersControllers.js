const usersService = require("../services/users");


const usersController = {

    crear: function (req, res) {
        res.render("registro");
    },

    guardar: function (req, res) {
        usersService.crearUno(req.body)
        res.redirect("/")
    },

    login: function (req, res) {
        res.render("login");
    },

    editar: function (req, res) {
        const id = req.params.id;
        const usuario = usersService.encontrarUno(id);
        res.render("editarUsuario", {
            usuario,
        });
    },

    update: function (req, res) {
        const id = req.params.id;
        usersService.actiualizarUno(id, req.body);
        res.redirect("/");
    },

    eliminar: function (req, res) {
        const id = req.params.id;
        usersService.eliminarUno(id);
        res.redirect("/");
    },

}
module.exports = usersController