const express = require('express');
const router = express.Router();
const sku = require('../schema/sku');
const build = require('../schema/build');
const component = require('../schema/component');
const functions = require('../functions/functions')

//Query all SKUs
router.get('/sku', (err, res, next) => {
    sku.find({}).then(data => res.json(data)).catch(next)
});

//Query specific SKU
router.get('/sku/:skuid/status', (err, res, next) => {
    sku.findById(req.params.skuid).then(data => res.json(data)).catch(next)
});

//Initiate new build based on specific SKU
router.post('/sku/:skuid/build/create', (req, res, next) => {
    sku.find({"_id": req.params.skuid})
    .then(data => {
        functions.removeKey(data, '__v');
        functions.transposeKey(data, '_id', 'buildSkuReference')
    })
    .catch(next);
});

//Query all builds associated with specific SKU
router.get('/sku/:skuid/build', (err, res, next) => {
    skuID = req.params.skuid;
    build.find({"buildSkuReference": skuID}).then(data => res.json(data)).catch(next)
});

//Terminate SKU build
router.post('/sku/:skuid/build/:buildid', (req, res, next) => {
    //I don't want to do this. I want to change status instead... Fix once it is pub/sub
    build.findByIdAndDelete(req.params.buildid).then(data => res.json(data)).catch(next)
});

//Query all components
router.get('/component', (err, res, next) => {
    component.find({}).then(data => res.json(data)).catch(next)
});

//Query specific component 
router.get('/component/:componentid/status', (err, res, next) => {
    component.findById(req.params.componentid).then(data => res.json(data)).catch(next)
});

module.exports = router;
