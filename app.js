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
//user Router


const index = require('./routes/index');

const app = express();

const userRoute = require('./routes/users');

const hostname = '127.0.0.1';
const port = 3003;


//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));
//parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//use user router
app.use('/users', userRoute);
//route for home page
app.get('/',(req, res) => {
  //render index.hbs file
  res.render('index');
});

app.get('/home', function (req, res) {
  res.send('Welcome to Express');
});

// app.get('/login',function(req,res){
//   res.render('login');
// })

app.get('/about', function (req, res) {
  res.send('This is about page');
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});