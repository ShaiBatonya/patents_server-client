const mongoose = require('mongoose');

const uri = "mongodb://127.0.0.1:27017/patents";


const connection = async()=>{

    try {
        await mongoose.connect(uri);
        console.log("database connected ! ");
        
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = connection;