const cors = require('cors')
const express = require('express')
const path = require('path')

var port = process.env.PORT || 3000
const app = express()

require('dotenv').config()

app.use(cors())

app.use('public', express.static(path.join(__dirname, 'public')))
app.set('port', port)
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

//Routing
app.get('/', (req, res) => {
  res.send('Hello')
  //res.render('contact')
})
