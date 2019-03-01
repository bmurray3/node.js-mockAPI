const mongoose = require('mongoose')
const Schema = mongoose.Schema
const componentSchema = new Schema({
    componentName: {type: String, required: true, unique: true},
    componentDescription: {type: String},
    componentType: {type: String},
    componentScript: {type: Array},
    componentCreated: {type: Date, default: Date.now},
    componentUpdated: {type: Date},
    componentLastUpdatedBy: {type: String},
    componentState: {type: Array},
    componentTagReference: {type: Array},
    componentCompositionReference: {type: Array},
})

const component = mongoose.model('component', componentSchema);
component.createIndexes();

module.exports = component;