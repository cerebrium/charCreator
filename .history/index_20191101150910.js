const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ClassName = require('./models/class')

// need this to have the req/res
app.use(express.urlencoded({extended: false}))

// Mongoose Stuff
mongoose.connect('mongodb://localhost/class', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log(`connected to mongoDB at ${db.host}`)
})

db.on('error', (err) => {
    console.log(`databas error:\n${err}`)
})

// Routes
app.get('/', (req, res) => {
    ClassName.find({}, (err, classes) => {
        console.log(classes)
    })
    res.send(classes)
})

// app.get('/', (req, res) => {
//     Class.findById()
// })


app.listen(3000)

