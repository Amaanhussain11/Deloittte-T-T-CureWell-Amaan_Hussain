const mongoose = require('mongoose');


const conncectdb = async(req,res) =>{
    try{
        await mongoose.connect(process.env.MONGO_URI,);
        console.log("Database connected successfully");
    }
    catch(err){
        console.log("Error connecting to database: ", err);
    }
}

module.exports = conncectdb;