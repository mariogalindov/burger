// Set up MySQL connection. 

var mysql = require("mysql");

var connection = mysql.createConnection(keys.mysql);

// Make connection. 
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("conneceted as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;