const mongoose = require('mongoose')
const Schema = mongoose.Schema
const subnetSchema = new Schema({
    subnetName: {type: String, required: true, unique: true},
    subnetDescription: {type: String},
    subnetType: {type: String},
    subnetScript: {type: Array},
    subnetCreated: {type: Date, default: Date.now},
    subnetUpdated: {type: Date},
    subnetLastUpdatedBy: {type: String},
    subnetState: {type: Array},
    subnetTagReference: {type: Array},
    subnetNetworkReference: {type: Array},
})

const subnet = mongoose.model('subnet', subnetSchema);
subnet.createIndexes();

module.exports = subnet;