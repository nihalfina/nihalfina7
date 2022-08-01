const mongoose = require ('mongoose');

var schema = new mongoose.Schema({ 
    email:{
        type:String,
        required: true,
        trim: true,
        unique:false

    },
    otp:{
        type:Number,
        required: true,
        trim: true,
        unique:false
    },
    status:{
        type:String,
        required: true,
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'DELETED']
    }
},
{ timestamps: true, versionKey: false }

)

const otpDB = mongoose.model("otp_db", schema);

module.exports = otpDB