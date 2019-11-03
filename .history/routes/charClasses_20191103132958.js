const express = require('express');
const Router = express.Router();
const CharClass = require('../models/charClass');
const Skill = require('../models/skill');
const mongoose = require('mongoose');

// get all classes
Router.get('/', (req, res) => {
    CharClass.find({}, (err, classes) => {
        console.log(err)
        res.json(classes)
    })
})

// get one class
Router.get('/:id', (req, res) => {
    CharClass.findById(req.params.id).populate('skills').exec((err, classe) => {
        res.json(classe)
    }) 
})

// update
Router.put('/:id', (req, res) => {
    CharClass.findByIdAndUpdate(req.params.id, req.body, (err, classe) => {
        res.json(classe)
    })
})

// post class
Router.post('/', (req, res) => {
    const newClass = CharClass(req.body);
    newClass.save((err, classe) => {
        res.redirect('/classes')
    })
})

// add'
Router.post('/:id/skills', (req, res) => {
    CharClass.findById(req.params.id, (err, classe) => {
        console.log(mongoose.Types.ObjectId.isValid(req.params.id))
        let newSkill = Skill(req.body)
        // need to figure out how to access the correct thing to push
            classe.skills.push(newSkill);
            classe.save((err) => {
                res.redirect('/classes')
            })
        })
    })


module.exports = Router;