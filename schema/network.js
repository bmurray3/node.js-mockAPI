const mongoose = require('mongoose')
const Schema = mongoose.Schema
const networkSchema = new Schema({
    networkName: {type: String, required: true, unique: true},
    networkDescription: {type: String},
    networkType: {type: String},
    networkScript: {type: String},
    networkCreated: {type: Date, default: Date.now},
    networkUpdated: {type: Date},
    networkLastUpdatedBy: {type: String},
    networkState: {type: Array},
    networkTagReference: {type: Array},
    networkProviderReference: {type: Array},
    networkRegionReference: {type: Array},
})

const network = mongoose.model('network', networkSchema);
network.createIndexes();

module.exports = network;