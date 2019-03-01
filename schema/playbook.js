const mongoose = require('mongoose')
const Schema = mongoose.Schema
const playbookSchema = new Schema({
    playbookName: {type: String, required: true, unique: true},
    playbookDescription: {type: String},
    playbookType: {type: String},
    playbookScript: {type: Array},
    playbookCreated: {type: Date, default: Date.now},
    playbookUpdated: {type: Date},
    playbookLastUpdatedBy: {type: String},
    playbookState: {type: Array},
    playbookTagReference: {type: Array},
    playbookCompositionReference: {type: Array},
})

const playbook = mongoose.model('playbook', playbookSchema);
playbook.createIndexes();

module.exports = playbook;