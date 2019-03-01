const express = require('express');
const router = express.Router();
const sku = require('../schema/sku');
const component = require('../schema/component');
const playbook = require('../schema/playbook');
const composition = require('../schema/composition');
const provider = require('../schema/provider');
const account = require('../schema/account');
const region = require('../schema/region');
const tags = require('../schema/tag');
const network = require('../schema/network');
const containment = require('../schema/containment')
const containmentRule = require('../schema/containmentrule')

//Create SKU
router.post('/sku/create', (req, res, next) => {
    sku.create(req.body).then(data => res.json(data)).catch(next)
});

//Define SKU contents
router.post('/sku/:skuid/update', (req, res, next) => {
    sku.create(req.body).then(data => res.json(data)).catch(next)
});

//Define component contents
router.post('/component/create', (req, res, next) => {
    component.create(req.body).then(data => res.json(data)).catch(next)
});

//Create playbook
router.post('/component/:componentid/update', (req, res, next) => {
    component.create(req.body).then(data => res.json(data)).catch(next)
});

//Associate playbook to component
router.post('/playbook/create', (req, res, next) => {
    playbook.create(req.body).then(data => res.json(data)).catch(next)
});

//Update playbook
router.post('/playbook/:playid/component/:componentid/update', (req, res, next) => {
    playbook.create(req.body).then(data => res.json(data)).catch(next)
});

//Create composition
router.post('/composition/create', (req, res, next) => {
    composition.create(req.body).then(data => res.json(data)).catch(next)
});

//Associate composition to component
router.post('/composition/:compid/component/:componentid/update', (req, res, next) => {
    composition.create(req.body).then(data => res.json(data)).catch(next)
});

//Update composition
router.post('/composition/:compid/update', (req, res, next) => {
    composition.create(req.body).then(data => res.json(data)).catch(next)
});

//Define provider
router.post('/provider/create', (req, res, next) => {
    provider.create(req.body).then(data => res.json(data)).catch(next)
});

//Update provider contents
router.post('/provider/:providerid/update', (req, res, next) => {
    provider.create(req.body).then(data => res.json(data)).catch(next)
});

//Get all accounts
router.post('/account', (req, res, next) => {
    account.create(req.body).then(data => res.json(data)).catch(next)
});

//Get single account
router.post('/account/:accountid/status', (req, res, next) => {
    account.create(req.body).then(data => res.json(data)).catch(next)
});

//Define account
router.post('/account/create', (req, res, next) => {
    account.create(req.body).then(data => res.json(data)).catch(next)
});

//Update account contents
router.post('/account/:accountid/update', (req, res, next) => {
    account.create(req.body).then(data => res.json(data)).catch(next)
});

//Define region
router.post('/region/create', (req, res, next) => {
    region.create(req.body).then(data => res.json(data)).catch(next)
});

//Associate region to provider
router.post('/provider/:providerid/region/:regionid/update', (req, res, next) => {
    provider.create(req.body).then(data => res.json(data)).catch(next)
});

//Create tags
router.post('/tags/create', (req, res, next) => {
    tags.create(req.body).then(data => res.json(data)).catch(next)
});

//Create network zone
router.post('/network/create', (req, res, next) => {
    network.create(req.body).then(data => res.json(data)).catch(next)
});

//Create network zone subnet
router.post('/network/:networkid/subnet/create', (req, res, next) => {
    subnet.create(req.body).then(data => res.json(data)).catch(next)
});

//Create network zone containment
router.post('/network/:networkid/containment/create', (req, res, next) => {
    containment.create(req.body).then(data => res.json(data)).catch(next)
});

//Create network zone containment rule
router.post('/network/:containmentid/rule/create', (req, res, next) => {
    containmentRule.create(req.body).then(data => res.json(data)).catch(next)
});

module.exports = router;
