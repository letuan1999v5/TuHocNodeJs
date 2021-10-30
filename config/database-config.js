
module.exports = {
    USER: 'SA',
    PASSWORD: '@16021999538826aA',
    HOST: 'localhost',
    DB: 'TuHocNodeJS',
    dialect: 'mssql',
    port: 1433,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
}

// sql.connect(config, function (err) {

//   if (err) throw err;

//   console.log("Connect successfully!");
//     // if (err) console.log(err);

//     // let sqlRequest = new sql.Request();

//     // let sqlQuery = 'Select * from Accounts where id = 1';

//     // sqlRequest.query(sqlQuery, function (err, data){
//     //     if (err) console.log(err);

//     //     console.table(data.recordset);

//     //     sql.close();
//     // });

// });
