const mongoose = require('mongoose')
const Schema = mongoose.Schema
const accountSchema = new Schema({
    accountName: {type: String, required: true, unique: true},
    accountDescription: {type: String},
    accountSecretName: {type: String},
    accountSecretData: {type: String},
    accountType: {type: String},
    accountExpiration: {type: Date},
    accountCreated: {type: Date, default: Date.now},
    accountUpdated: {type: Date},
    accountLastUpdatedBy: {type: String},
    accountState: {type: Array},
    accountProviderReference: {type: Array},
    accountTagReference: {type: Array},
})

const account = mongoose.model('account', accountSchema);
account.createIndexes();

module.exports = account;