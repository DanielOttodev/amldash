const db = require('../dbseed')

exports.clients = (req,res) => {

   db.query(`SELECT * FROM main.Client where ClientID = ${req.params.clientid}`, function(err, result, fields) {
        if (err) res.send(err);
        if (result)//{result = result.map(v => Object.assign({}, v));   } 
        console.log(result)
        res.json({"clients":result})
})};



