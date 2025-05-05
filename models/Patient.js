const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type:String,
        enum:['male', 'female'],
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    dateofvisit:{
        type: Date,
        default : Date.now
    }
})


const Patient = mongoose.model("Patient", patientSchema)

module.exports = Patient
