const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema ({
    name: String,
    damage: Number,
    type: String,
}, {
    timestamps: true
});

const classSchema = new mongoose.Schema ({
    name: String,
    faction: String,
    skills: [skillSchema]
})