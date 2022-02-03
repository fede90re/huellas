const path = require("path");

const animalesController = {

    gatos: function (req, res) {
        let id = req.params.id;
        res.render("gatos", { "id": id });
    },
    perros: function (req, res) {
        res.render("perros");
    },
    todos: function (req, res) {
        res.render("animales");
    },
    detalleP: function (req, res) {
        let id = req.params.id;
        res.render("detallePerros", { "id": id })
    },
    detalleG: function (req, res) {
        let id = req.params.id;
        /*/let detalle = [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus corporis porro, eveniet eum deleniti quod itaque aspernatur debitis cumque aliquid nihil consequuntur architecto asperiores fuga incidunt voluptatum repellendus eaque dolores.",
            "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus corporis porro, eveniet eum deleniti quod itaque aspernatur debitis cumque aliquid nihil consequuntur architecto asperiores fuga incidunt voluptatum repellendus eaque dolores.",
            "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus corporis porro, eveniet eum deleniti quod itaque aspernatur debitis cumque aliquid nihil consequuntur architecto asperiores fuga incidunt voluptatum repellendus eaque dolores."
, { "detalle": detalle })
        ]*/

        //  al pasarle el segundo parámetro puedo utilizar información en la vista con ejs, 
        //  se pueden compartir más de una variable. 
        res.render("detalleGatos", { "id": id });
    },

    editar: function () { },
    eliminar: function () { },




};
module.exports = animalesController;