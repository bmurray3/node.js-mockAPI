const mongoose = require('mongoose')
const Schema = mongoose.Schema
const providerSchema = new Schema({
    providerName: String,
    providerDescription: String,
    providerType: String,
    providerState: []    
})



const provider = mongoose.model('provider', providerSchema);

module.exports = provider;