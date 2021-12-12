const mongoose = require('mongoose')

const DB_USER = 'projweb3_admin'
const DB_PASSWORD = encodeURIComponent('2tGCCj1NPbTRsw8P')

//Eduardo: @projweb3cluster.i3w9r.mongodb.net/bancoprojweb3?retryWrites=true&w=majority
//Ritton: @projetoweb3.pthon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

var connMongo = mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@projetoweb3.pthon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        .then(() => {
            console.log('Conectamos ao mongoDB!')
        })
        .catch((err) => console.log(err))
    
module.exports = connMongo;
