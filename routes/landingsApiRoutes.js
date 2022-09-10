//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE LANDINGS:
const landingsApiController = require("../controllers/landingsApiController");

//DECLARACIÓN DEL ROUTER DE LANDINGS:
const landingsApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE LANDINGS:
landingsApiRouter.get("/", landingsApiController.getlandings);
landingsApiRouter.post("/", landingsApiController.createEntry);
landingsApiRouter.put("/", landingsApiController.updateEntry);
landingsApiRouter.delete("/", landingsApiController.deleteEntry);

//EXPORTACIÓN DEL ROUTER DE LANDINGS:
module.exports = landingsApiRouter;



///////////////ENDPOINTS DE LANDINGS:

//GET http://localhost:3000/api/landings
//GET http://localhost:3000/api/landings?email=a@gmail.com
//POST http://localhost:3000/api/landings
//PUT http://localhost:3000/api/landings
//DELETE http://localhost:3000/api/landings