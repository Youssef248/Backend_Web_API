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
  var sql = "USE crud; CREATE TABLE product (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL), description varchar(255), price integer, PRIMARY KEY(id)";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  */
  });



module.exports = connection;

  