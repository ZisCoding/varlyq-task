const mongoose = require('mongoose')


const agentSchema = new  mongoose.Schema({
    name:{
        type: String
    },
    mobileNumber:{
        type: String
    },
    patients:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PolicyHolderModel"
        }
    ]
    
},{
    timestamps:true
}) 

const AgentModel = mongoose.model('AgentModel',agentSchema);

module.exports = AgentModel;