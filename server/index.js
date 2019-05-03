const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

// port; env.PORT useful for deployment to heroku
const port = process.env.PORT || 3000

// app
const app = express()

// logging middleware to help during development
app.use(morgan('dev'))

// static middleware, serves static assets
app.use(express.static(path.join(__dirname, '../build')))

// body parsing middleware so can use req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// send index file for all routes other than api routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

// unified error handling
app.use((err, req, res, next) => {
  console.log(err)
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, () => {
  console.log(`Your server is running on port ${port}`)
})




