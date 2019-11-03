const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema ({
    name: String,
    damage: String,
    healing: String,
    type: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Skills', skillSchema)