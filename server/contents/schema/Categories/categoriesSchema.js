const mongoose = require('mongoose');
const Schema = mongoose.Schema
const autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose)
var schema = new mongoose.Schema({

    categoryId:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
        },

    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    details: {
        type: String,
        required: true,
        unique: false,
        trim: true
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
schema.plugin(autoIncrement.plugin, { model: 'categories_products', field: 'categoryId', incrementBy: 1 })
const categories = mongoose.model("categories_products", schema);

module.exports = categories