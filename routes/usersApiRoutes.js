//IMPORTACIÓN DE EXPRESS:
const express = require("express");

//IMPORTACIÓN DE LOS CONTROLADORES DE USERS:
const usersApiController = require("../controllers/usersApiController");

//DECLARACIÓN DEL ROUTER DE USERS:
const usersApiRouter = express.Router();

//INICIALIZACIÓN DE RUTAS DE USERS:
usersApiRouter.get("/", usersApiController.getusers);
usersApiRouter.post("/", usersApiController.createEntry);
usersApiRouter.put("/", usersApiController.updateEntry);
usersApiRouter.delete("/", usersApiController.deleteEntry);

//EXPORTACIÓN DEL ROUTER DE USERS:
module.exports = usersApiRouter;



///////////////ENDPOINTS DE USERS:

//GET http://localhost:3000/api/users
//GET http://localhost:3000/api/users?email=a@gmail.com
//POST http://localhost:3000/api/users
//PUT http://localhost:3000/api/users
//DELETE http://localhost:3000/api/users