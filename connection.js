const mysql = require('mysql');
var connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"Password!321",
    database:"crud"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 /*
  connection.query("CREATE DATABASE crud", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  var sql = "USE crud";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table product created");
  });
  var sql = "CREATE TABLE product (id integer NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, description varchar(255), price integer, PRIMARY KEY(id));";
  var sql2 = "CREATE TABLE employee (id integer NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, age integer NOT NULL, email varchar(255) NOT NULL, PRIMARY KEY(id));"
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table product created");
  });

 connection.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("Table employee created");
  });
  */

  });



module.exports = connection;

  