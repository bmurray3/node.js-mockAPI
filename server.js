//initialization
const express = require('express');
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const config = require('./config/config')
const provider = require('./routes/provider')
const providerSchema = require('./schema/provider')

//accept JSON
app.use(bodyParser.json())

//connect to DB
mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Connected to DB ${config.mongoUrl}`);
}).catch(err => {
    console.log('db connect failed');
    process.exit();
});

//home page

app.use('/', provider);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(config.serverPort, () => {
  console.log(`server running on port ${config.serverPort}`)
});
