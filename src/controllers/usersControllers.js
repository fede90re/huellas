const usersController = {

    registro: function (req, res) {
        res.render("registro");
    },

    crear: function (req, res) {
        const usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
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

    editar: function (req, res) {
        const idUser = req.params.idUser

        //acá en el ejemplo estaba la lista de usuarios en una constante
        let usuarios = [
            { id: 1, nombre: "Fede", edad: "31" },
            { id: 2, nombre: "Anto", edad: "31" },
            { id: 3, nombre: "Kale", edad: "3" },
            { id: 4, nombre: "Tofu", edad: "1" },
            { id: 5, nombre: "Sofi", edad: "33" },
            { id: 6, nombre: "Juani", edad: "17" }
        ]


        //el usuarios que pongo ahí representaría a la constante que no escribí arriba
        const userEditado = usuarios[idUser];
    },


}
module.exports = usersController