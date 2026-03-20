const Surgery = require('../Models/surgery.model');

// CREATE
exports.createSurgery = async (req, res) => {
    try {
        // prevent double booking
        const exists = await Surgery.findOne({
            doctor: req.body.doctorId,
            surgerydate: req.body.date,
            surgerystarttime: req.body.startTime
        });

        if (exists) {
            return res.status(400).json({
                message: "Doctor already booked at this time"
            });
        }

        const surgery = await Surgery.create({
            doctor: req.body.doctorId,
            surgerydate: req.body.date,
            surgerycategory: req.body.category,
            surgerystarttime: req.body.startTime,
            surgeryendtime: req.body.endTime
        });

        res.status(201).json(surgery);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL
exports.getSurgeries = async (req, res) => {
    try {
        const data = await Surgery.find().populate('doctor');
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET TODAY
exports.getTodaySurgeries = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0,0,0,0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const data = await Surgery.find({
            surgerydate: { $gte: today, $lt: tomorrow }
        }).populate('doctor');

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.updateSurgeryTime = async (req, res) => {
    try {
        const { id } = req.params;
        const { startTime, endTime } = req.body;

        // 1. Get current surgery
        const surgery = await Surgery.findById(id);

        if (!surgery) {
            return res.status(404).json({
                message: "Surgery not found"
            });
        }

        // 2. Check conflict (exclude current surgery)
        const conflict = await Surgery.findOne({
            _id: { $ne: id }, // 👈 exclude current surgery
            doctor: surgery.doctor,
            surgerydate: surgery.surgerydate,
            surgerystarttime: startTime
        });

        if (conflict) {
            return res.status(400).json({
                message: "Doctor already has surgery at this time"
            });
        }

        // 3. Update only time fields
        surgery.surgerystarttime = startTime;
        surgery.surgeryendtime = endTime;

        await surgery.save();

        res.status(200).json({
            message: "Surgery time updated successfully",
            data: surgery
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};

exports.getSurgeryById = async (req, res) => {
    try {
        const { id } = req.params;

        const surgery = await Surgery.findById(id)
            .populate('doctor'); // 👈 to get doctor name also

        if (!surgery) {
            return res.status(404).json({
                message: "Surgery not found"
            });
        }

        res.status(200).json(surgery);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
};