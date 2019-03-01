//initialization
const express = require('express');
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const config = require('./config/config')


//set route providers
const capacity = require('./routes/capacity')
const compose = require('./routes/compose')
const define = require('./routes/define')
const image = require('./routes/image')
const provisioning = require('./routes/provisioning')


//accept JSON
app.use(bodyParser.json())

//connect to DB
mongoose.set('useCreateIndex', true)
mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Cloud Resiliency API ${config.environment} DB instance running on ${config.mongoUrl}`);
}).catch(err => {
    console.log('db connect failed');
    process.exit();
});

//route entry points
app.use(`/${config.apiVer}/capacity`, capacity);
app.use(`/${config.apiVer}/compose`, compose);
app.use(`/${config.apiVer}/define`, define);
app.use(`/${config.apiVer}/image`, image);
app.use(`/${config.apiVer}/provisioning`, provisioning);

//root level config
app.use((err, req, res, next) => {
    res.set();
    if(err) {
        console.log(err);
        res.statusCode = 400;
        res.json(err);
        next();
    };
});

//spin up server
app.listen(config.serverPort, () => {
  console.log(`Cloud Resiliency API ${config.environment} web instance running on ${config.serverUrl}:${config.serverPort}`)
});
