const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
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
        experience:{
            type:Number,
            default:0
        },
        specialization:{
            type:String,
            required:true
        }
})

const Doctor = mongoose.model('doctor', doctorSchema)

module.exports = Doctor