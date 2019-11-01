const mongoose = require('mongoose');

const classSchema = new mongoose.Schema ({
    name: String,
    faction: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skills'}],
}, {
    timestamps: true
})

module.exports = mongoose.model('ClassName', classSchema);

// const newClass = new ClassName({name: 'Druid', faction: 'Horde'});

// newClass.skills.push({name: 'Ferocious Bite', damage: 15, healing: 0, type: 'Cat Form'}, {name: 'Feral Swipe', healing: 0, damage: 10, type: 'Bear Form'}, {name: 'Rejuvination', damage: 0, healing: 15, type: 'Tree Form'})

// newClass.save( (err) => {
//     console.log('Druid made')
// })