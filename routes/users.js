const express = require('express');
const user_router = express.Router();
// var db = require('../config/database-config');
var userModel = require('../models/user-account');
var userController = require('../controllers/users');
var alert = require('alert');

user_router.get('/login',function(req,res){
    res.render('login');
})

user_router.get('/register', function (req,res){
    res.render('register');
})

user_router.post('/register', function (req, res) {
    let username = req.body.username;
    let email = req.body.email; 
    
    userController.checkValidRegistration(username, email)
    .then(() => res.render('login'))
    .catch(err => {
        console.log(err);
        alert(err);
    });
})

module.exports = user_router;