const mongoose = require('mongoose');
const Schema = mongoose.Schema
var productDetailsSchema = new mongoose.Schema({

  name: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  price: {
    type: Number,
    required: false,
    unique: false,
    trim: false
  },
  discount: {
    type: Number,
    required: false,
    unique: false,
    trim: false
  },
  Warranty: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  quantity: {
    type: Number,
    required: false,
    unique: false,
    trim: false
  },
  rating: {
    type: String,
    required: false,
    default: '3',
    enum: ['1', '2', '3', '4','5']
  },
  Performance: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Display: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  RearCamera: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  FrontCamera: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Battery: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Storage: {
    type: Array,
    default: []
  },
  Benchmarks: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  LaunchDate: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  OperatingSystem: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  CustomUI: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Chipset: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  CPU: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Architecture: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Fabrication: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Graphics: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  RAM: {
    type: Array,
    default: []
  },
  DisplayType: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  ScreenSize: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Resolution: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  AspectRatio: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  PixelDensity: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  ScreenProtection: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  TouchScreen: {
    type: String,
    required: false,
    default: 'NO',
    enum: ['YES', 'NO']
  },
  Dimensions: {
    type: Array,
    default: []
  },
  Weight: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  BuildMaterial: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Colours: {
    type: Array,
    default: []
  },
  Settings: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  Network: {
    type: Array,
    default: []
  },
  FingerprintSensor: {
    type: String,
    required: false,
    default: 'NO',
    enum: ['YES', 'NO']
  },
  FaceIDSensor: {
    type: String,
    required: false,
    default: 'NO',
    enum: ['YES', 'NO']
  },
  productRefId: {
    type: Schema.Types.ObjectId,
    ref: 'mobilePhones_name',
  },
  categoryName: {
    type: String,
    required: false,
    unique: false,
    trim: false
  },
  categoryRefId: {
    type: Schema.Types.ObjectId,
    ref: 'categories_products'
  },
  brandName: {
    type: String,
    required: false,
    unique: false,
    trim: false
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
const dressesproductDetailsDb = mongoose.model("mobilePhones_Details", productDetailsSchema);

module.exports = dressesproductDetailsDb