const express = require('express')

const app = express()

app.use(express.json())

app.get('/api/test', (req, res) => {
  console.log('Request on /api/test');
  res.status(200).send('Success!')
})

app.listen(3000, () => {
  console.log('Server is running');
})