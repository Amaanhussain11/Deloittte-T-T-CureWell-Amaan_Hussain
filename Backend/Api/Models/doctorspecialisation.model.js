const mongoose = require('mongoose');

const doctorSpecialisationSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    specialisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialisation',
        required: true,


    },
    specialisationdate: {
        type: Date,
        required: true,
        default: null
    }
})

const DoctorSpecialisation = mongoose.model('DoctorSpecialisation', doctorSpecialisationSchema);
module.exports = DoctorSpecialisation;