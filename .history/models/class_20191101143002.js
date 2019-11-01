const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema ({
    name: String,
    damage: Number,
    healing: Number,
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

newClass.skills.push({name: 'Ferocious Bite', damage: 15, type: 'Cat Form'}, {name: 'Feral Swipe', damage: 10, type: 'Bear Form'}, {name: 'Rejuvination', damage: -15, type: 'Cat Form'})