const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Class = require('./models/class')

// need this to have the req/res
app.use(express.urlencoded({extended: false}))

// Mongoose Stuff
mongoose.connect('mongodb://localhost/class', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

