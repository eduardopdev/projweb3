//initial configuration
const mongoose = require('mongoose')
const express = require('express')
const app = express()


app.use(express.urlencoded({
    extended : true,
}),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

const dbConnection = require('./config/dbConnection.js') 

app.listen(3000, function(){
    console.log("Servidor ON");
});