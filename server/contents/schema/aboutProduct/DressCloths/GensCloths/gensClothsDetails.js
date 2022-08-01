const mongoose = require('mongoose');
const Schema = mongoose.Schema
var productDetailsSchema = new mongoose.Schema({

    dressType: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    for: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    usedFor: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    warrantyPeriod: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    dressPurpose: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    colour: {
        type: Array,
        default: []
    },
    dressSize: {
        type: Array,
        default: []
    },
    quality: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    quantity: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    netWeight: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    maid_In: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    discount: {
        type: Number,
        required: false,
        unique: false,
        trim: true
    },
    meters: {
        type: Number,
        required: false,
        unique: false,
        trim: true
    },
    productRefId: {
        type: Schema.Types.ObjectId,
        ref: 'mobile_product_name',
        index: true
    },
    categoryName: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    categoryRefId: {
        type: Schema.Types.ObjectId,
        ref: 'categories_products'
    },
    brandName: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    brandRefId: {
        type: Schema.Types.ObjectId,
        ref: 'mobile_brands_names'
    },
    status: {
        type: String,
        required: false,
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'DELETED']
    }
},
    { timestamps: true, versionKey: false }

)
const dressesproductDetailsDb = mongoose.model("gensCloth_Details", productDetailsSchema);

module.exports = dressesproductDetailsDb