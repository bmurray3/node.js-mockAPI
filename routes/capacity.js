const express = require('express');
const router = express.Router();
const build = require('../schema/build')

//Query all builds
router.get('/build', (err, res, next) => {
    build.find({}).then(data => res.json(data)).catch(next)
});

//Update capacity on a single build
router.post('/build/:buildid/update', (req, res, next) => {
    build.findByIdAndUpdate(req.params.buildid).then(data => res.json(data)).catch(next);
});


module.exports = router;