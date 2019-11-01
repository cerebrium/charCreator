const express = require('express');
const Router = express.Router();
const CharClass = require('../models/charClass');
const Skill = require('../models/skill')

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
        res.json(classe)
    })
})

// add'
Router.post('/:id/skills', (req, res) => {
    CharClass.findById(req.params.id, (err, classe) => {
        Skill.findById(req.body.skillId, (err, skill) => {
            classe.skills.push(skill)
        })
    })
})

// post skill
Router.post('/skills', (req, res) => {
    const newSkill = Skill(req.body);
    newSkill.save((err, skill) => {
        res.json(skill)
    })
})

// get all skills
Router.get('/skills', (req, res) => {
    Skill.find({}, (err, skills) => {
        console.log(err)
        res.json(skills)
    })
})





module.exports = Router;