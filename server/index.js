const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || '3001'
app.use(express.static('dist'))
app.get('*', (req, res) => {
  res.sendFile(path.join(path.join(__dirname, '/dist/index.html')))
})
app.listen(port, () => {
  console.log('server started!')
})