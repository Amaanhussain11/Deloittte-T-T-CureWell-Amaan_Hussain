const DoctorSpecialisation = require('../Models/doctorspecialisation.model');
const Doctor = require('../Models/doctor.model');

// ASSIGN SPECIALISATION TO DOCTOR
exports.assignSpec = async (req, res) => {
    try {
        const existingAssignment = await DoctorSpecialisation.findOne({
            doctor: req.body.doctorId,
            specialisation: req.body.specialisationId
        });
        if(existingAssignment) {
            return res.status(400).json({ message: "This doctor already has this specialisation assigned." });
        }
        const data = await DoctorSpecialisation.create({
            doctor: req.body.doctorId,
            specialisation: req.body.specialisationId,
            specialisationdate: req.body.date
        });

        res.status(201).json(data);
    } catch (err) {
        console.log("Error assigning specialisation: ", err);
        return res.status(500).json({ message: err.message });
    }
};

// GET ALL WITH POPULATE
exports.getDoctorSpecs = async (req, res) => {
    try {
        const data = await DoctorSpecialisation.find()
            .populate('doctor')
            .populate('specialisation');

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getDoctorsBySpecialisation = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await DoctorSpecialisation.find({
            specialisation: id
        })
        .populate('doctor') // 👈 gives doctor details
        .populate('specialisation');

        // Extract only doctor info (optional clean response)
        const doctors = data.map(item => item.doctor);

        res.status(200).json(doctors);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};  