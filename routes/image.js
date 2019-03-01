const express = require('express');
const router = express.Router();
const image = require('../schema/image')

//Query all images
router.get('/build', (err, res, next) => {
    image.find({}).then(data => res.json(data)).catch(next)
});

//Query specific image
router.get('/build/:imageid/status', (err, res, next) => {
    image.find({}).then(data => res.json(data)).catch(next)
});

//Create image release
router.post('/build/create', (req, res, next) => {
    image.create(req.body).then(data => res.json(data)).catch(next)
});

//Update specific image status
router.post('/build/:imageid/update', (req, res, next) => {
    image.create(req.body).then(data => res.json(data)).catch(next);
});

module.exports = router;
