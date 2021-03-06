const express = require("express");

//con la const app puedo utilizar la funcion express con todas sus utilidades.
const app = express();
//path lo utilizo para poder leer las rutas absolutas.
const path = require("path");

//requiero el paquete que sirve para que pueda utilizar el PUT y el DELETE además del GET y POST.
const methodOverride = require("method-override");

//con esta línea le digo a mi servidor de express que debe usar EJS para las vistas
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//usamos la funcion static, recibe la ruta y le pido que busque la carpeta Public y la convierto en un recurso estático
//eso quiere decir que cuando escriba una "/" ya voy a estar haciendo referencia a esa carpeta.
app.use(express.static(path.join(__dirname, '../public')));

//configuración para capturar todo lo que venga de un formulario en un objeto literal y que podamos modificarlo
//a formato json si quisieramos
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//configuro method Override
app.use(methodOverride("_method"));

//traigo las rutas que se encuentran en la carpeta routes.
const rutasAnimales = require("./routes/routesAnimales.js");
const rutasIndex = require("./routes/routesIndex.js");
const rutasUser = require("./routes/routesUser.js");

app.listen(3000, () => console.log("es la hora de brillar.."));

//todas las rutas que empiecen con ese PREFIJO van a matchear con esa ruta.

app.use("/animales", rutasAnimales);
app.use("/", rutasUser);
app.use("/", rutasIndex);
app.use((req, res, next) => {
    res.status(404).render("not-found")
});

