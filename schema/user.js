const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    userDescription: {type: String},
    userType: {type: String},
    userDomain: {type: String},
    userCreated: {type: Date, default: Date.now},
    userUpdated: {type: Date},
    userLastUpdatedBy: {type: String},
    userState: {type: Array},
    userTagReference: {type: Array},
    userGroupReference: {type: Array},
})

const user = mongoose.model('user', userSchema);
user.createIndexes();

module.exports = user;