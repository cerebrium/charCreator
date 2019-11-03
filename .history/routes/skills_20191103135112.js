const express = require('express');
const router = express.Router();
const Skill = require('../models/skill');

// get all
router.get('/:id', (req, res) => {
    Skill.findById(req.params.id), (err, skills) => {
        res.json(skills)
    })
})

//post one
router.post('/', (req, res) => {
    const newSkill = Skill(req.body);
    newSkill.save((err, skill) => {
        res.json(skill)
    })
})



module.exports = router;