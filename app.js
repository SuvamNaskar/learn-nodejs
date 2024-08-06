const express = require('express')
const app = express()
// const serverless = require('serverless-http');
const path = require('path');
const contact = require('./models/contact');

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/admin', (req, res) => {
    res.render('admin.ejs');
})

app.get('/contact', async (req, res) => {
    res.render('contact.ejs');
})

app.post('/contact', async (req, res) => {
    let response = await new contact({
        email: req.body.email,
        query: req.body.query
    })
    response.save();
    res.redirect('contact')
})

app.listen(3000)

// module.exports.handler = serverless(app);