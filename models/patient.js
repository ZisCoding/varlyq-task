const mongoose = require('mongoose')


const patientSchema = new  mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    mobileNumber:{
        type: String
    },
    policyHolder:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PolicyHolderModel"
    },
    agent:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AgentModel"
    },
    aadharNum:{
        type: String
    },
    panNum:{
        type: String
    },
    aadharPath:{
        type: String
    },
    panPath:{
        type: String
    }
},{
    timestamps:true
}) 

const PatientModel = mongoose.model('PatientModel',patientSchema);

module.exports = PatientModel;