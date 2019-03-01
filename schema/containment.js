const mongoose = require('mongoose')
const Schema = mongoose.Schema
const containmentSchema = new Schema({
    containmentName: {type: String, required: true, unique: true},
    containmentDescription: {type: String},
    containmentType: {type: String},
    containmentScript: {type: String},
    containmentCreated: {type: Date, default: Date.now},
    containmentUpdated: {type: Date},
    containmentLastUpdatedBy: {type: String},
    containmentState: {type: Array},
    containmentTagReference: {type: Array},
    containmentNetworkReference: {type: Array},
})

const containment = mongoose.model('containment', containmentSchema);
containment.createIndexes();

module.exports = containment;