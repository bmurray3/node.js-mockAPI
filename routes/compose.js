const express = require('express');
const router = express.Router();
const sku = require('../schema/sku');
const build = require('../schema/build');
const component = require('../schema/component');
const _ = require('lodash');

//Query all SKUs
router.get('/sku', (err, res, next) => {
    sku.find({}).then(data => res.json(data)).catch(next)
});

//Query specific SKU
router.get('/sku/:skuid/status', (err, res, next) => {
    sku.findById(req.params.skuid).then(data => res.json(data)).catch(next)
});

//Mike's start 
// Initiate new build based on specific SKU
// router.post('/sku/:skuid/build/create', (req, res, next) => {
//     sku.find({"_id": req.params.skuid}).then(data => {
//         res.json(data)}).catch(next);
//     //ok so how do I add my own json attributes to the body now? 
//     build.create(req.body).then(data => res.json(data)).catch(next)
// });

// Where I was heading I think...
//Initiate new build based on specific SKU
router.post('/sku/:skuid/build/create', (req, res, next) => {
    sku.find({"_id": req.params.skuid})
    .then(data => {

        let d = data[0];
        console.log(d);
        let blah = _.remove(d, {
            "_id": d["_id"]
        })
       
        console.log(blah);


        
        // delete d['skuName'];
        
        // console.log(d);
                


        // data["_id"] = "kuhsrdgkhaet98y3q4yigsef";
        // data["super"] = "newnewnwewnewnewnewnew";
        // let updatedData = Object.assign(data, { myNewProp: "hiya" });
        // //Got a specific SKU. now to clone it as a new BUILD
        // build.create(updatedData);
        // build.create('my found SKU record detail, but we are creating new _id for the build and inserting the sku _id as buildSkuReference atrribute');
        res.json('build create data');
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
