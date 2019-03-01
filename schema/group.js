const mongoose = require('mongoose')
const Schema = mongoose.Schema
const groupSchema = new Schema({
    groupName: {type: String, required: true, unique: true},
    groupDescription: {type: String},
    groupType: {type: String},
    groupDomain: {type: String},
    groupCreated: {type: Date, default: Date.now},
    groupUpdated: {type: Date},
    groupLastUpdatedBy: {type: String},
    groupState: {type: Array},
    groupTagReference: {type: Array},
    groupSkuReference: {type: Array},
    groupBuildReference: {type: Array},
    groupComponentReference: {type: Array},
})

const group = mongoose.model('group', groupSchema);
group.createIndexes();

module.exports = group;