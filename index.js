const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/json', (req, res) => {
    res.json({
        "name": "suvamnaskar",
        "pincode": 700144,
        "college": "RKMVCC"
    })
})

app.listen(3000)