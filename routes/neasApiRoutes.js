//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE NEAS:
const neasApiController = require("../controllers/neasApiController");

//DECLARACIÓN DEL ROUTER DE NEAS:
const neasApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE NEAS:
neasApiRouter.get("/", neasApiController.getneas);
neasApiRouter.post("/", neasApiController.createEntry);
neasApiRouter.put("/", neasApiController.updateEntry);
neasApiRouter.delete("/", neasApiController.deleteEntry);

//EXPORTACIÓN DEL ROUTER DE NEAS:
module.exports = neasApiRouter;



///////////////ENDPOINTS DE NEAS:

//GET http://localhost:3000/api/neas
//GET http://localhost:3000/api/neas?email=a@gmail.com
//POST http://localhost:3000/api/neas
//PUT http://localhost:3000/api/neas
//DELETE http://localhost:3000/api/neas