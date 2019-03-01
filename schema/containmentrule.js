const mongoose = require('mongoose')
const Schema = mongoose.Schema
const containmentRuleSchema = new Schema({
    containmentRuleName: {type: String, required: true, unique: true},
    containmentRuleDescription: {type: String},
    containmentRuleType: {type: String},
    containmentRuleSequence: {type: Number},
    containmentRule: {type: Array},
    containmentRuleCreated: {type: Date, default: Date.now},
    containmentRuleUpdated: {type: Date},
    containmentRuleLastUpdatedBy: {type: String},
    containmentRuleState: {type: Array},
    containmentRuleTagReference: {type: Array},
    containmentRuleContainmentReference: {type: Array},
})

const containmentRule = mongoose.model('containmentRule', containmentRuleSchema);
containmentRule.createIndexes();

module.exports = containmentRule;