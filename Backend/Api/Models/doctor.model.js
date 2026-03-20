const mongoose = require('mongoose')


const doctorSchema = new mongoose.Schema({
    doctorname: {
        type: String,
        required: true,

    }
})

const Docter = mongoose.model('Doctor',doctorSchema);

module.exports = Docter;