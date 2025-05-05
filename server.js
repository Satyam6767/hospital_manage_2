const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')
const PatientRoutes = require('./routes/PatientRoutes') 

app.use(bodyParser.json())

app.use('/', PatientRoutes)
// app.get('/', function (req, res) {
//     res.send("hello world")
// })

app.listen(3000, () => {
    console.log("server is running on 3000")
})




