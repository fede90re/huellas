const express = require("express");
const res = require("express/lib/response");
//con la const app puedo utilizar la funcion express con todas sus utilidades.
const app = express();
//path lo utilizo para poder leer las rutas absolutas.
const path = require("path");

//usamos la funcion static, recibe la ruta y le pido que busque la carpeta Public y la convierto en un recurso estático
//eso quiere decir que cuando escriba una "/" ya voy a estar haciendo referencia a esa carpeta.
app.use(express.static(path.join(__dirname, './public')));


app.listen(3000, () => console.log("es la hora de brillar.."));


//Ruta a Home

app.get("/", function (req, res) {
    const htmlHome = path.resolve(__dirname, "./views/index.html")
    res.sendFile(htmlHome);
})

//Ruta a Loggin

app.get("/login", function (req, res) {
    const htmlLogin = path.resolve(__dirname, "./views/login.html")
    res.sendFile(htmlLogin);
})

//Ruta a Registro

app.get("/registro", function (req, res) {
    const htmlRegistro = path.resolve(__dirname, "./views/registro.html")
    res.sendFile(htmlRegistro);
})