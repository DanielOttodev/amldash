const db = require('../dbseed')
const sql = require('mssql')

exports.hello = (req,res) => {

     console.log(db)
   
 
          var request = new sql.Request();
          request.query(`SELECT * FROM aml where Client = '1991'`, function(err, result, fields) {
                  if (err) res.send(err);
                  if (result)//{result = result.map(v => Object.assign({}, v));   } 
                 res.send(result.recordsets[0][0])
          }
     )
};



exports.tmalerts = (req,res) => {

    db.query(`SELECT * FROM main.TM_Alerts`, function(err, result, fields) {
         if (err) res.send(err);
         if (result)//{result = result.map(v => Object.assign({}, v));   } 


       res.json({"tmalerts":result})

 })};


exports.postalert = (req,res) =>  {

    db.query(`INSERT INTO main.TM_Alerts  (ClientID, RuleNumber, DateAlerted) VALUES ('${req.query.ClientID}', '${req.query.RuleNumber}', '${req.query.DateAlerted}')`, function(err, result, fields) {
         if (err) res.send(err);
         if (result)
        res.send(result)
 })};

 
 exports.tot_tmalerts = (req,res) => {

    db.query(`SELECT count(*) as Total FROM main.TM_Alerts`, function(err, result, fields) {
         if (err) res.send(err);
         if (result)//{result = result.map(v => Object.assign({}, v));   } 
        res.json({"tot_tmalerts":result[0].Total})

 })};

 exports.gettasks = (req,res) => {

    db.query(`SELECT ClientID,firstname,lastname FROM main.Client`, function(err, result, fields) {
         if (err) res.send(err);
         if (result)//{result = result.map(v => Object.assign({}, v));   } 

       res.json({"gettasks":result})

 })};

 exports.chartnum = (req,res) => {

     db.query(`select RuleNumber,Count(*) as Totals from main.TM_Alerts group by RuleNumber`, function(err, result, fields) {
          if (err) res.send(err);
          if (result)//{result = result.map(v => Object.assign({}, v));   } 
          var i
          var labels = []
          var totals = []
          for(i=0; i < result.length ;i++){
  
               labels.push(result[i].RuleNumber)
               totals.push(result[i].Totals)
          }
          
          res.json({"labels":labels,"totals":totals})
          
  })};