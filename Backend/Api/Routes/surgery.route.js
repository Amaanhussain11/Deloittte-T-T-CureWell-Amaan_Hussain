const express = require('express');
const router = express.Router();

const {
    createSurgery,
    getSurgeries,
    getTodaySurgeries,
    updateSurgeryTime,
    getSurgeryById
} = require('../Controller/surgery.controller');

router.post('/create', createSurgery);
router.get('/', getSurgeries);
router.get('/today', getTodaySurgeries);
router.get('/:id', getSurgeryById);
router.put('/update-time/:id', updateSurgeryTime);

module.exports = router;