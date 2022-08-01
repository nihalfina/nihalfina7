const mongoose = require ('mongoose');

var schema = new mongoose.Schema({ 
    name:{
        type:String,
        required: true,
        unique:false,
        trim: true

    },
    email:{
        type:String,
        required: true,
        unique:false,
        trim: true

    },
    phone:{
        type:String,
        required: true,
        unique:false,
        trim: true

    },
    password:{
        type:String,
        required: true,
        unique:false,
        trim: true

    },
    confirmPassword:{
        type:String,
        required: true,
        unique:false,
        trim: true

    },
    status:{
        type:String,
        required: true,
        default: 'INACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'DELETED']
    }
},
{ timestamps: true, versionKey: false }

)

const registerDb = mongoose.model("registration_Db", schema);

module.exports = registerDb