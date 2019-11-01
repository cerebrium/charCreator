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

module.exports = mongoose.model('ClassName', classSchema);

const newClass = new Class({name: 'Druid', faction: 'Horde'});

newClass.skills.push({name: 'Ferocious Bite', damage: 15, healing: 0, type: 'Cat Form'}, {name: 'Feral Swipe', healing: 0, damage: 10, type: 'Bear Form'}, {name: 'Rejuvination', damage: 0, healing: 15, type: 'Tree Form'})

newClass.save( (err) => {
    console.log('Druid made')
})