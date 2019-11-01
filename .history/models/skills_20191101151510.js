const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema ({
    name: String,
    damage: Number,
    healing: Number,
    type: String,
}, {
    timestamps: true
});

module.exports = mongoose.model()