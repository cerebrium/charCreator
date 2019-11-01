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
    skills: [skillSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Class', classSchema);

const newClass = new classSchema({name: 'Druid', faction: 'Horde'})