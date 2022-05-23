const express = require('express')
const app = express()
const path = require('path')
const routes = require('./controller/route')
const PORT = 8080
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})