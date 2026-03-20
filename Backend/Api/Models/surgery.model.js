const mongoose = require('mongoose');

const surgerySchema = new mongoose.Schema({
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,

    },
    surgerydate:{
        type: Date,
        required: true,
        default: null
    },
    surgerycategory:{
        type: String,
        required: true,
        default: null
    },
    surgerystarttime: {
        type: String,
        required: true,
        default: null
    },
    surgeryendtime:{
        type: String,
        required: true,
        default: null
    }
})

const Surgery = mongoose.model('Surgery',surgerySchema);
module.exports = Surgery;