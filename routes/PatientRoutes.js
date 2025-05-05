const express = require('express')
const router = express.Router()
const Patient = require('../models/Patient')


// create
router.post('/patient', async (req, res) => {
    try {
        const data = req.body;
        const newPatient = new Patient(data)
        const response = await newPatient.save()
        console.log("data saved")
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
})

// read
router.get('/patient', async(req, res)=>{
    try{
        const patient = await Patient.find()
        res.status(200).json(patient)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
})
// read by specific gender
router.get('/patient/:gender', async(req, res)=>{
    try{
        const {gender} = req.params;
        const validgender = ["male", "female"]
        if(!validgender.includes(gender)){
            return res.status(400).json({ message: "invalid gender" })
        }
        const patient = await Patient.find({gender})
        if(patient.length===0){
            return res.status(400).json({ message: "no patient found" })
        }
        res.status(200).json(patient)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
})

// update
router.put('/patient/:id', async(req, res)=>{
    try{
        const patientId = req.params.id;
        const updatePatientdata = req.body;

        const response = await Patient.findByIdAndUpdate(
            patientId,
            updatePatientdata,{
                new:true,
                runValidators:true
            }
        )

        if(!response){
            return res.status(404).json({ error: "no patient found" })
        }

        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
})

// delet
router.delete('/patient/:id', async(req, res)=>{
    try{
        const patientId = req.params.id;
        const response = await Patient.findByIdAndDelete(patientId)
        if(!response){
            return res.status(404).json({ error: "no patient found" })
        }
        res.status(200).json({message: "Patient deleted successfully"})

    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
})


module.exports = router