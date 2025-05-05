const mongoose = require('mongoose')

// const mongoURI = 'mongodb://localhost:27017/hospital_manage2'
const mongoURI = "mongodb+srv://satyamkumar6767:X8gzlGnx4ohA2y2Y@cluster0.9llk5tk.mongodb.net/"

mongoose.connect(mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection

db.on('connected', ()=>{
    console.log("Mongodb is connected")
})

db.on('err', (err)=>{
    console.log("mongodb is not connected", err)
})





