const Doctor = require('../Models/doctor.model');
const Specialisation = require('../Models/specialisation.model');


// Create a new doctor
exports.createnewdoctor = async(req,res)=>{
    try{
        const {name} = req.body;
        const doctor = new Doctor({
            doctorname : name
        })
        await doctor.save();
        return res.status(201).json({
            message: "New doctor added successfully",
            data: doctor
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error creating new doctor",
            error: err.message
        })
    }
}

// Get all doctors
exports.getalldoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        return res.status(200).json(doctors);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Get single doctor
exports.getdoctorbyid = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        return res.status(200).json(doctor);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Update doctor
exports.updatedoctor = async (req, res) => {
    try {
        const updated = await Doctor.findByIdAndUpdate(
            req.params.id,
            { doctorname: req.body.name },
            { new: true }
        );
        return res.status(200).json(updated);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Delete doctor
exports.deletedoctor = async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Doctor deleted" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
