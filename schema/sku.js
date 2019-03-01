const mongoose = require('mongoose')
const Schema = mongoose.Schema
const skuSchema = new Schema({
    skuName: {type: String, required: true, unique: true},
    skuDescription: {type: String},
    skuType: {type: String},
    skuExpiration: {type: Date},
    skuCreated: {type: Date, default: Date.now},
    skuUpdated: {type: Date},
    skuLastUpdatedBy: {type: String},
    skuState: {type: Array},
    skuTagReference: {type: Array},
})

const sku = mongoose.model('sku', skuSchema);
sku.createIndexes();

module.exports = sku;