const express = require("express");

//con la const app puedo utilizar la funcion express con todas sus utilidades.
const app = express();
//path lo utilizo para poder leer las rutas absolutas.
const path = require("path");

//con esta línea le digo a mi servidor de express que debe usar EJS para las vistas
app.set("view engine", "ejs");

//usamos la funcion static, recibe la ruta y le pido que busque la carpeta Public y la convierto en un recurso estático
//eso quiere decir que cuando escriba una "/" ya voy a estar haciendo referencia a esa carpeta.
app.use(express.static(path.join(__dirname, './public')));

//traigo las rutas que se encuentran en la carpeta routes.
const rutasGatos = require("./routes/gatos.js");
const rutasPerros = require("./routes/perros.js");
const rutasAnimales = require("./routes/animales.js");
const rutasLogin = require("./routes/login.js");
const rutasRegistro = require("./routes/registro.js");
const rutasIndex = require("./routes/index.js");

app.listen(3000, () => console.log("es la hora de brillar.."));

//todas las rutas que empiecen con ese PREFIJO van a matchear con esa ruta.
app.use("/gatos", rutasGatos);
app.use("/perros", rutasPerros);
app.use("/animales", rutasAnimales);
app.use("/login", rutasLogin);
app.use("/registro", rutasRegistro);
app.use("/", rutasIndex);

