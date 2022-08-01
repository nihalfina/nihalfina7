const mongoose = require('mongoose');
const Schema = mongoose.Schema
var productDetailsSchema = new mongoose.Schema({

    modelName: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    Type: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    capacityInTons: {
        type: String,
        required: false,
        default: '1.5 Ton',
        enum: ['1.5 Ton', '1 Ton', '2 Ton']
    },
    netWeight: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    Warranty: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    launchYear: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    starRating: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    BEERatingYear: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    coolingAndHeating: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    inTheBox: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    availableOffers:{
        type: Array,
        default: []
    },
    coolinCapacity: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    compressorType: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    Dehumidification: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    remoteControl: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    Refrigerant: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    operatingModes: {
        type: Array,
        default: []
    },
    condenserCoil: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    remoteControl: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    quality: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    maidIn: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    assembledIn: {
        type: Number,
        required: true,
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
const dressesproductDetailsDb = mongoose.model("SpecificFootwear_Details", productDetailsSchema);

module.exports = dressesproductDetailsDb