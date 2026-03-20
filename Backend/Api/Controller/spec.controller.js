const Specialisation = require('../Models/specialisation.model');

// CREATE
exports.createSpec = async (req, res) => {
    try {
        const spec = await Specialisation.create({
            specialisationname: req.body.name
        });

        res.status(201).json(spec);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL
exports.getSpecs = async (req, res) => {
    try {
        const specs = await Specialisation.find();
        res.status(200).json(specs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE
exports.updateSpec = async (req, res) => {
    try {
        const spec = await Specialisation.findByIdAndUpdate(
            req.params.id,
            { specialisationname: req.body.name },
            { new: true }
        );

        res.status(200).json(spec);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE
exports.deleteSpec = async (req, res) => {
    try {
        await Specialisation.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

