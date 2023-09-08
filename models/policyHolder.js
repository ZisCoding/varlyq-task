const mongoose = require('mongoose')


const policyHolderSchema = new  mongoose.Schema({
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
        ref: "PatientModel"
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
    },
    cheque:{
        type: String
    },
    bank:{
        type: String
    },
    prescription:{
        type: String
    }
},{
    timestamps:true
}) 

const policyHolderModel = mongoose.model('policyHolderModel',policyHolderSchema);

module.exports = policyHolderModel;