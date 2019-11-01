const express = require('express');
const router = express.Router();
const Skill = require('../models/skill');

// get all
router.get('/', (req, res) => {
    Skill.find({}, (err, skills) => {
        res.json(skills)
    })
})

//post one
router.post('/', (req, res) => {
    Skill.findByIdAndUpdate(req.params.id)
})



module.exports = router;