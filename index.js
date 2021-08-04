const express = require('express')

const db = require('./dbseed')
const app = express()
const port = 3001


app.use('/', require('./routes/hello'))
app.use('/users', require('./routes/users'));
app.use('/api', require('./routes/api'))
app.use('/client', require('./routes/client'))




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })