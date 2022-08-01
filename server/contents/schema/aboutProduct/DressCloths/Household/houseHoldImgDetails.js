const mongoose = require('mongoose');
const Schema = mongoose.Schema
var dressesImgSchema = new mongoose.Schema({

    img: {
        data: Buffer,
		contentType: String
    },
    productRefId: {
        type: Schema.Types.ObjectId,
        ref: 'mobile_product_name',
        index: true
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
    status: {
        type: String,
        required: true,
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'DELETED']
    }
},
    { timestamps: true, versionKey: false }

)
const dressesImgDetailsDb = mongoose.model("houseHold_Img", dressesImgSchema);

module.exports = dressesImgDetailsDb