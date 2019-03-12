const express = require('express');
const router = express.Router();


router.post('/sku/:skuid/build/create', (req, res, next) => {
    sku.find({"_id": req.params.skuid}).then(data => {
        console.log(data[0]);
        let obj = data[0]["_doc"];
        let newObj = {};
        for(let key in obj) {
            if(key !== "_id" && key !== "__v") {
                newObj[key] = obj[key];
            }
        }
        res.json(newObj);
    }).catch(next);
});


//start of function to do above. Then get rid of above once it works.

var exports = module.exports = {};

exports.transposeIdAs = function(data, strip, add) {
    let jsonIn = data[0]["_doc"];
    let jsonOut = {};
    for(attr in jsonIn) {
        if(key == strip) {
            key = add
        }
        jsonOut 
    }
};
