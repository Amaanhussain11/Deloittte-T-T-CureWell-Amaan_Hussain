const mongoose = require('mongoose');


const specialisation = new mongoose.Schema({
    specialisationname:{
        type: String,
        required: true,
        default: null
    }
})

const Specialisation = mongoose.model('Specialisation',specialisation);

module.exports = Specialisation;