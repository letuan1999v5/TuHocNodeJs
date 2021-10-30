const { data } = require("node-persist");
var db = require("../models");
db.sequelize.sync();

// var data = [];

let create = (username, password, firstName, lastName, email, phoneNumber, gender, dateOfBirth) => {
    //insert new account to db
    // db.users.

}

function update(id, username, password, firstName, lastName, email, phoneNumber){
    //update 
}

function show(id){
    //show user details
}


let checkExistedData = (dataName, sql) => {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, data) => {
            if (err) throw err;
            if(data.recordset == undefined){
                return reject (new Error("Invalid input"));
            }
            else if(data.recordset.length != 0){
                return reject (new Error(dataName + " has been existed"));
            }
            resolve('Valid information');
        })
    })
}

let checkValidRegistration = (username, email) => {
    return new Promise((resolve, reject) => {
        let emailSql = `select * from Accounts where email='${email}'`;
        let usernameSql = `select * from Accounts where username='${username}'`;
        checkExistedData("username", usernameSql)
        .then(() => checkExistedData("email", emailSql))
        .then(() => {
            console.log("pass requirement");
            resolve("Valid information")
        })
        .catch(err => {
            console.log("reject");
            console.log(err);
            return reject (new Error(err));
        });
    })
}

function checkAuthenticaton(username, password) {
    // let sql = 'select * from Accounts where username=${username} and password=${password}';
    // db.query(sql, function(err, d){
    //     if(err) throw err;
    //     data = d;
    //     console.log(data);
    // })
    // return 1;
}

module.exports = {
    create,
    update,
    show,
    checkValidRegistration,
    checkAuthenticaton,
};