const mongoose = require('mongoose')
const Schema = mongoose.Schema
const regionSchema = new Schema({
    regionName: {type: String, required: true, unique: true},
    regionDescription: {type: String},
    regionType: {type: String},
    regionCreated: {type: Date, default: Date.now},
    regionUpdated: {type: Date},
    regionLastUpdatedBy: {type: String},
    regionState: {type: Array},
    regionTagReference: {type: Array},
    regionProviderReference: {type: Array},
})

const region = mongoose.model('region', regionSchema);
region.createIndexes();

module.exports = region;