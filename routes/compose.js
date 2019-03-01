const express = require('express');
const router = express.Router();
const sku = require('../schema/sku');
const build = require('../schema/build');
const component = require('../schema/component');

//Query all SKUs
router.get('/sku', (err, res, next) => {
    sku.find({}).then(data => res.json(data)).catch(next)
});

//Query specific SKU
router.get('/sku/:skuid/status', (err, res, next) => {
    sku.find({}).then(data => res.json(data)).catch(next)
});

//Initiate new build based on specific SKU
router.post('/sku/:skuid/build/create', (req, res, next) => {
    sku.create(req.body).then(data => res.json(data)).catch(next)
});

//Query all builds associated with specific SKU
router.get('/sku/:skuid/build', (err, res, next) => {
    build.find({}).then(data => res.json(data)).catch(next)
});

//Terminate SKU build
router.post('/sku/:skuid/build/:buildid', (req, res, next) => {
    build.find({}).then(data => res.json(data)).catch(next)
});

//Query all components
router.get('/component', (err, res, next) => {
    component.find({}).then(data => res.json(data)).catch(next)
});

//Query specific component 
router.get('/component/:componentid/status', (err, res, next) => {
    component.find({}).then(data => res.json(data)).catch(next)
});

module.exports = router;
