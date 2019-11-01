const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Class = require('./models/class')

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
    Class.find({}, (err, classes) => {
        console.log(classes)
    })
    res.json(classes)
})

app.get('/', (req, res) => {
    
})


app.listen(3000)

