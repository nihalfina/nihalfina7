const mongoose = require('mongoose');
const Schema = mongoose.Schema
const autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose)
var productNameSchema = new mongoose.Schema({

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
    brandName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    brandRefId: {
        type: Schema.Types.ObjectId,
        ref: 'mobile_brands_names'
    },
    description: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    categoryName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    categoryRefId: {
        type: Schema.Types.ObjectId,
        ref: 'categories_products'
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
productNameSchema.plugin(autoIncrement.plugin, { model: 'rice_name', field: 'categoryId', incrementBy: 1 })
const dressesnameDb = mongoose.model("rice_name", productNameSchema);

module.exports = dressesnameDb