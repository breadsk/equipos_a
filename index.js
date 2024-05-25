
const express = require("express");
const app = express();
const port = 3001;

const { getEquipos , getEquipoById , getEquiposByCiudad } = require("./controllers/equipos.controller");

//-------------------------------

//localhost:3001/


app.get("/" , getEquipos);

app.get("/:id" , getEquipoById);

app.get("/ciudad/:ciudad" , getEquiposByCiudad);


//-------------------------------

app.listen(port, ()=> {    
    console.log(`Servidor corriendo exitosamente en el puerto: ${port}`);
})