const usersController = {

    registro: function (req, res) {
        res.render("registro");
    },

    crear: function (req, res) {
        const usuario = {
            nombre: req.body.nombre,
            apellido: req.body.aperllido,
            dni: req.body.dni,
            email: req.body.email,
            password: req.body.password
        }
        //falta guardar la info
        res.redirect("/")
    },

    login: function (req, res) {
        res.render("login");
    },


}
module.exports = usersController