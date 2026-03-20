const express = require('express');
const router = express.Router();

const {
    assignSpec,
    getDoctorSpecs,
        getDoctorsBySpecialisation
} = require('../Controller/docspec.controller');

router.post('/assign', assignSpec);
router.get('/', getDoctorSpecs);
router.get('/by-specialisation/:id', getDoctorsBySpecialisation);

module.exports = router;