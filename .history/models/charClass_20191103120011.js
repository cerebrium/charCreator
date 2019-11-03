const mongoose = require('mongoose');

const classSchema = new mongoose.Schema ({
    name: String,
    faction: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skills'}],
}, {
    timestamps: true
})

module.exports = mongoose.model('CharClass', classSchema);
