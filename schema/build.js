const mongoose = require('mongoose')
const Schema = mongoose.Schema
const buildSchema = new Schema({
    buildName: {type: String, required: true, unique: true},
    buildDescription: {type: String},
    buildType: {type: String},
    buildExpiration: {type: Date},
    buildCreated: {type: Date, default: Date.now},
    buildUpdated: {type: Date},
    buildLastUpdatedBy: {type: String},
    buildState: {type: Array},
    buildTagReference: {type: Array},
    buildSkuReference: {type: Array},
})

const build = mongoose.model('build', buildSchema);
build.createIndexes();

module.exports = build;