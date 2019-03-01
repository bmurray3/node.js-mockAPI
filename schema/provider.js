const mongoose = require('mongoose')
const Schema = mongoose.Schema
const providerSchema = new Schema({
    providerName: {type: String, required: true, unique: true},
    providerDescription: {type: String},
    providerType: {type: String},
    providerCreated: {type: Date, default: Date.now},
    providerUpdated: {type: Date},
    providerLastUpdatedBy: {type: String},
    providerState: {type: Array},
    providerTagReference: {type:Array},
})

const provider = mongoose.model('provider', providerSchema);
provider.createIndexes();

module.exports = provider;