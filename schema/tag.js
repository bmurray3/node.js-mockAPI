const mongoose = require('mongoose')
const Schema = mongoose.Schema
const tagSchema = new Schema({
    tagName: {type: String, required: true, unique: true},
    tagDescription: {type: String},
    tagType: {type: String},
    tagCreated: {type: Date, default: Date.now},
    tagUpdated: {type: Date},
    tagLastUpdatedBy: {type: String},
    tagState: {type: Array},
})

const tag = mongoose.model('tag', tagSchema);
tag.createIndexes();

module.exports = tag;