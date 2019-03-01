const express = require('express');
const router = express.Router();
const build = require('../schema/build')

//Query capacity of all builds
router.get('/build', (err, res, next) => {
    build.find({}).then(data => res.json(data)).catch(next)
});

//Update capacity on a single build
router.post('/build/:buildid/update', (req, res, next) => {
    build.findOneAndUpdate({'_id': req.params.buildid}).then(data => res.json(data)).catch(next);
});

//Query utilization of all builds
router.get('/build/status', (err, res, next) => {
    build.find({}).then(data => res.json(data)).catch(next)
});

//Update utilization on single build
router.get('/build/:buildid/status', (err, res, next) => {
    build.findById({'_id': req.params.buildid}).then(data => res.json(data)).catch(next)
});

module.exports = router;