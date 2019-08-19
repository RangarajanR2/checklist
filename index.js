
const express = require('express');
const config  = require('./config')


let app = express();

let routes = require('./routes')

//Use cors
//Use helmet
//Use jwt


app.use('/api/v1', routes)


app.listen(config.PORT,()=>{
    console.log(`Server running in port `+config.PORT)
})