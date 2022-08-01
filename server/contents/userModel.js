const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    gender: {
        type:String,
    },
    phone:{
        type:String,
        required: true,
        unique: true
    },
    aadhar:{
        type:String,
        required: true,
        unique: true
    },
    pan:{
        type:String,
        required: true,
        unique: true
    },
    address:{
        type:String,
        required: true
    }
})
const Userdb = mongoose.model("user_db", schema);

module.exports = Userdb