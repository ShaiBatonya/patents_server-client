const mongoose = require('mongoose');

// using the schema method and set it to variable
const Schema = mongoose.Schema;

// init the product schema
const patent_schema = new Schema({

    patent_Number:{
        type:Number,
        required:true
    },
    patent_Name:{
        type:String,
        required:true,
    },
    patent_inventor:{
        type:String,
        required:true,
    },
    patent_description:{
        type:String,
        required:true,
    },
},{
    timestamps: true
});


module.exports = mongoose.model('patents',patent_schema);