//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use node-persist module
var storage = require('node-persist');
//use body-parser to get data by POST method
var bodyParser = require('body-parser');

const app = express();

const hostname = '127.0.0.1';
const port = 3003;

app.get('/',(req, res) => {
    //render index.hbs file
    res.render('index');
});

