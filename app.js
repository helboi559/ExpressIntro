const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Juan Ramirez')
})

//return a see other
app.get('/seeother', (req, res) => {
  res.status(204).send('204 no content!')
})

//return a error/status code
app.get('/sample', (req, res) => {
  res.status(404).send('404 this is empty!')
})

//wildcard route
app.get('*', (req, res) => {
  res.send('wildcard route')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})