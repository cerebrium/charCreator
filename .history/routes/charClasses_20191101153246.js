const express = require('express');
const Router = express.Router();
const CharClass = require('../models/charClass');
// const Skill

Router.get('/', (req, res) => {
    CharClass.find({}, (err, classes) => {
        console.log(err)
        res.json(classes)
    })
})

Router.get('/:id', (req, res) => {
    CharClass.findById(req.params.id, (err, classe) => {
        res.json(classe)
    }) 
})

// post 
Router.post('/', (req, res) => {
    const newClass = CharClass(req.body);
    newClass.save((err, classe) => {
        res.json(classe)
    })
})

// Router.post('/skills', (req, res) => {
//     const new
// })

module.exports = Router;