const sql = require('mssql');
/*const con = mysql.createConnection({
    host: "track-server.database.windows.net",
    user: "danboy123",
    password: "1Boost23"
});

con.connect(function(err) {
    if (err) throw err;
    console.log('connected')
});*/
const config = {
    user: 'danboy123',
    password: '1Boost23',
    server: 'track-server.database.windows.net',
    database: 'trackdb',
    encrypt: true
} 

const con =  
           // Connection object 
            sql.connect(config,function(err){
            if (err) console.log(err);}
            )
 /*   
    try {
        // make sure that any items are correctly URL encoded in the connection string
     const pool = await sql.ConnectionPool(config)
     pool.connect(err => {
         console.log(err);
     })
     console.log('connected')
    } catch (err) {
        // ... error checks
        console.log(err);
    }*/


module.exports = con