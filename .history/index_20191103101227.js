const express = require('express');
const app = express();
const mongoose = require('mongoose');
const CharClass = require('./models/charClass')

// need this to have the req/res
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// Mongoose Stuff
mongoose.connect('mongodb://localhost/class', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log(`connected to mongoDB at ${db.host}`)
})

db.on('error', (err) => {
    console.log(`databas error:\n${err}`)
})

app.use('/classes', require('./routes/charClasses'))
app.use('/skills', require('./routes/skills'))



app.listen(3001)

