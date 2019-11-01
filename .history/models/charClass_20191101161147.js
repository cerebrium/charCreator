const mongoose = require('mongoose');

const classSchema = new mongoose.Schema ({
    name: String,
    faction: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill'}],
}, {
    timestamps: true
})

module.exports = mongoose.model('CharClass', classSchema);

// const newClass = new CharClass({name: 'Druid', faction: 'Horde'});

// newClass.skills.push({name: 'Ferocious Bite', damage: 15, healing: 0, type: 'Cat Form'}, {name: 'Feral Swipe', healing: 0, damage: 10, type: 'Bear Form'}, {name: 'Rejuvination', damage: 0, healing: 15, type: 'Tree Form'})

// newClass.save( (err) => {
//     console.log('Druid made')
// })