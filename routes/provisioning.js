const express = require('express');
const router = express.Router();
const user = require('../schema/user');
const group = require('../schema/group')

//Query all users
router.get('/user', (err, res, next) => {
    user.find({}).then(data => res.json(data)).catch(next)
});

//Query specific user
router.get('/user/:uid/status', (err, res, next) => {
    user.findById(req.params.uid).then(data => res.json(data)).catch(next)
});

//Query all group names
router.get('/group', (err, res, next) => {
    group.find({}).then(data => res.json(data)).catch(next)
});

//Query specific group name
router.get('/group/:gid/status', (err, res, next) => {
    group.findById(req.params.gid).then(data => res.json(data)).catch(next)
});

//Add user to group
router.post('/group/:gid/adduser/:uid', (req, res, next) => {
    user.findById(req.params.uid).then("Set something here, #$#^# Javascript").catch(next);
    group.findById(req.params.gid).then("Set something here, #$#^# Javascript").catch(next);
    //now update the thing already.
});

//Remove user from group
router.post('/group/:gid/removeuser/:uid', (req, res, next) => {
    user.findById(req.params.uid).then("Set something here, #$#^# Javascript").catch(next);
    group.findById(req.params.gid).then("Set something here, #$#^# Javascript").catch(next);
    //now update the thing already.
});

module.exports = router;
