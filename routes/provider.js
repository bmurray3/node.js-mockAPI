const express = require('express');
const router = express.Router();
const provider = require('../schema/provider')


router.get('/define/provider', (req, res, next) => {
    provider.find({}, 'providerName')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/define/provider/create', (req, res, next) => {
    //console.log(req.body);
    if(req.body){
        provider.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "No data sent"
        })
    }
});

router.delete('/define/provider/:id', (req, res, next) => {
    provider.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;


