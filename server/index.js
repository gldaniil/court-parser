const express = require('express')
const cors = require('cors')
const urlRouter = require('./routes/urlRouter')
const courtRouter = require('./routes/courtRouter')
const db = require('./config/database')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/urls', urlRouter)
app.use('/api/courts', courtRouter)

app.listen(3000, () => {
  console.log('Server is running')
})
