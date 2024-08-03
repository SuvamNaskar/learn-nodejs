const express = require('express')
const app = express()
const serverless = require('serverless-http');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/admin', (req, res) => {
    res.json({
        "name": "suvamnaskar",
        "pincode": 700144,
        "college": "RKMVCC"
    })
})

app.listen(80)

module.exports.handler = serverless(app);