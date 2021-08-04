const db = require('../dbseed')
exports.users = (req, res) => {
   
    db.query(`SELECT * FROM main.users`, function(err, result, fields) {
        if (err) res.send(err);
        if (result) res.send(result);
    });
}


