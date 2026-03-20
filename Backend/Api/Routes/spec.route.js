const express = require('express');
const router = express.Router();

const {
    createSpec,
    getSpecs,
    updateSpec,
    deleteSpec,

} = require('./../Controller/spec.controller');

router.post('/create', createSpec);
router.get('/', getSpecs);
router.put('/:id', updateSpec);
router.delete('/:id', deleteSpec);


module.exports = router;