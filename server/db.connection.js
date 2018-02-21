var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "cse15"
});

connection.connect(function (err) {
  if(err){
    return console.log(err);
  }else {
    console.log('Connected to the mysql server');
  }
});

module.exports = connection;
