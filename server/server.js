const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const config = require('../config/config')

const app = express()
const port = process.env.PORT || 5000

// Express configurations
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/../client/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware
app.use((req, res, next) => next())

app.get('*', (req, res) => {
    res.status(200).sendFile('index.html', {
        root: __dirname + '/../client/public'
    })
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
