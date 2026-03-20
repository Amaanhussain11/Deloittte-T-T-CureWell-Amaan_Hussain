const express = require('express');
const router = express.Router();

const {
  createnewdoctor,
  getalldoctors,
  getdoctorbyid,
  updatedoctor,
  deletedoctor,
} = require('../Controller/doctor.controller');

router.post('/create', createnewdoctor);
router.get('/', getalldoctors);
router.get('/:id', getdoctorbyid);
router.put('/:id', updatedoctor);
router.delete('/:id', deletedoctor);

module.exports = router;
