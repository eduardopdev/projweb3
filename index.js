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

const DB_USER = 'projweb3_admin'
const DB_PASSWORD = encodeURIComponent('2tGCCj1NPbTRsw8P')
// mongodb+srv://projweb3_admin:2tGCCj1NPbTRsw8P@projweb3cluster.i3w9r.mongodb.net/bancoprojweb3?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@projweb3cluster.i3w9r.mongodb.net/bancoprojweb3?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectamos ao mongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

