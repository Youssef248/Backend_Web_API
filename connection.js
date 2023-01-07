const mysql = require('mysql');
var con = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"Password!321",
    database:"crud"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = con;

  