const express = require('express')
const connectDB = require('./config/database')
const router = require('./config/routes')
const app = express()
const port = 3015

app.use(express.json())
connectDB()
app.use('/', router)

app.listen(port, function(){
    console.log('listening to port', port)
})