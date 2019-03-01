const mongoose = require('mongoose')
const Schema = mongoose.Schema
const compositionSchema = new Schema({
    compositionName: {type: String, required: true, unique: true},
    compositionDescription: {type: String},
    compositionType: {type: String},
    compositionScript: {type: Array},
    compositionCreated: {type: Date, default: Date.now},
    compositionUpdated: {type: Date},
    compositionLastUpdatedBy: {type: String},
    compositionState: {type: Array},
    compositionTagReference: {type: Array},
    compositionImageReference: {type: Array},
})

const composition = mongoose.model('composition', compositionSchema);
composition.createIndexes();

module.exports = composition;