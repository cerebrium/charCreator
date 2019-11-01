const express = require('express');
const Router = express.Router();
const CharClass = require('../models/charClasses')

Router.get('/', (req, res) => {
    CharClass.find({}, (err, classes) => {
        console.log(err)
        res.json(classes)
    })
})

Router.get('/:id', (req, res) => {
    CharClass.findById(req.params.id, (err, classe) => {

    }) 
})

// post 
Router.post('/', (req, res) => {
    const newClass = CharClass
})