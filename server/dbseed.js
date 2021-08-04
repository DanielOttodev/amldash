const mysql = require('mysql');
const con = mysql.createConnection({
    host: "database-1.c2gvp4xdttbs.ap-southeast-2.rds.amazonaws.com",
    user: "admin",
    password: "boost123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log('connected')
});

module.exports = con