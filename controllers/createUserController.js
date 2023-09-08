const Patient = require('../models/patient');
const PolicyHolder = require('../models/policyHolder');
const Agent = require('../models/agent');

const customMiddleware = require('../config/customMiddleware.js');

module.exports.form1Controller = async (req,res)=>{
    try{
        const data = req.body;
        const patient = await Patient.create({
            name:data.patientName,
            email:data.patientEmail,
            mobileNumber:data.patientMobile
        })
        
        const policyHolder = await PolicyHolder.create({
            name:data.policyHolderName,
            email:data.policyHolderEmail,
            mobileNumber:data.policyHolderMobile
        })

        const agent  = await Agent.create({
            name:data.agentName,
            mobileNumber:data.agentMobile
        })

        patient.policyHolder = policyHolder;
        patient.agent = agent;
        policyHolder.patient = patient;
        agent.patients.push(patient);

        patient.save() ; 
        policyHolder.save() ;
        agent.save();

        res.status(200).json({
            patientId: patient._id,
            nextForm: 2
        })

    }catch(error){
        console.log("error in create patient",error);

        res.status(400).json({error: "Error in creating user"})
    }
}

module.exports.form2Controller = async (req,res)=>{
    const patient = await Patient.findById(req.params.id);

    const policyHolder = await PolicyHolder.findById(patient.policyHolder);

    patient.aadharNum = req.body.patientAadhar;
    patient.panNum = req.body.patientPan;

    policyHolder.aadharNum = req.body.policyHolderAadhar;
    policyHolder.panNum = req.body.policyHolderPan;

    patient.save();
    policyHolder.save();

    console.log(patient)
    console.log(policyHolder)

    res.end('<h1>Admission Succesfull</h1>');
}

module.exports.fileUploadController = async (req,res)=>{
    
    try{
        const patient = await Patient.findById(req.params.id);
        const policyHolder = await PolicyHolder.findById(patient.policyHolder);


        switch(req.body.id){
            case "patientPan":
                patient.panPath = req.file.path;
            case "patientAadhar":
                patient.aadharPath = req.file.path
            case "policyHolderPan":
                policyHolder.panPath = req.file.path;
            case "policyHolderAadhar":
                policyHolder.aadharPath = req.file.path
            case "cancelledCheque":
                policyHolder.cheque = req.file.path
            case "bankStatement":
                policyHolder.bank = req.file.path
            case "prescription":
                policyHolder.prescription = req.file.path
        }

        patient.save();
        policyHolder.save();
        
        
        res.status(200).json({
            success : "File uploaded"
        });

    }catch(err){
        console.log("error in finding patient",err);

        res.status(400).json({
            Error : "Error in uploading file"
        });
    }
}