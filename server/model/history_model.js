const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const historyDB = mongoose.model('search_history', schema);

module.exports = historyDB;