const mongoose = require('mongoose')
const Schema = mongoose.Schema
const imageSchema = new Schema({
    imageName: {type: String, required: true, unique: true},
    imageDescription: {type: String},
    imageType: {type: String},
    imageURL: {type: String},
    imageVersion: {type: String},
    imageOS: {type: String},
    imageExpiration: {type: Date},
    imageCreated: {type: Date, default: Date.now},
    imageUpdated: {type: Date},
    imageLastUpdatedBy: {type: String},
    imageState: {type: Array},
    imageTagReference: {type: Array},
    imageRegionReference: {type: Array},
})

const image = mongoose.model('image', imageSchema);
image.createIndexes();

module.exports = image;