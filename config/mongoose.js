const mongoose = require('mongoose');

async function connectToDb(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/varlyq')
        console.log("Conencted to the local mongo server")
    }catch(error){
       console.log("Error in connecting to DB",error) ;
    }
}

module.exports = connectToDb();