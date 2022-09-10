//IMPORTACIÓN DE EXPRESS:
const express = require('express');

//INICIALIZACIÓN DIRECTA DE MONGODB:
require('./utils/dbMongo');

//IMPORTACIÓN DE RUTAS:
const landingsApiRouter = require("./routes/landingsApiRoutes");
const neasApiRouter = require("./routes/neasApiRoutes");
const usersApiRouter = require("./routes/usersApiRoutes");

//IMPORTACIÓN DE MIDDLEWARES:
const manage404 = require('./middlewares/error404');


//DECLARACIÓN DE EXPRESS:
const app = express();

//DECLARACIÓN DEL PUERTO:
const port = 3000;


//SELECCIÓN DEL MOTOR DE RENDERIZADO:
app.set('view engine', 'pug');
//RUTA DE UBICACIÓN DE LAS VISTAS:
app.set('views','./views');


//INICIALIZACIÓN DE ESCRITURA EN BODY:
app.use(express.json());


//INICIALIZACIÓN DEL ROUTER DE ENTRADAS:
app.use("/api/landings", landingsApiRouter);

//INICIALIZACIÓN DEL ROUTER DE AUTORES:
app.use("/api/neas", neasApiRouter);

//INICIALIZACIÓN DEL ROUTER DE PRODUCTOS:
app.use("/api/users", usersApiRouter);


//INICIALIZACIÓN DE MIDDLEWARES:
app.use(manage404);


//INICIALIZACIÓN DEL PUERTO:
app.listen(port, () => {
  console.log(`El servidor funciona en el puerto ${port}`);
});