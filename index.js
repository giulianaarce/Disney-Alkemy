//console.log('Hola Mundo');
/* Configuration */
const PORT = process.env.PORT || 4000;
const URL_MONGO = process.env.URL_MONGO; 

/* Dependencies */
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

/* Inicio de la aplicación */
const app = express();

app.use(cors());

const Character = require('./Models/Character');

app.get('/',async (req, res) =>{ //declaro la ruta genérica
    try{
        const characters = await Character.find();
        res.status(200).send(characters);
    }catch(error){
        res.status(500).send('Server Error');
    }

});

mongoose.connect(URL_MONGO, (err)=>{
    if(err){
      console.log("Database connection failed");
    }else{
        console.log("Database connected");
        app.listen(PORT, (err)=>{
            if (err) {
                console.log("Server connection failed");
              } else {
                // SERVER
                console.log(`Server on port ${PORT}`);
              }
        });
    }
});