const express = require('express');
const router = express.Router();
const { fCalculo } = require('../controller/calculadora');

router.post('/calculadora', (req, res) => {
    fCalculo(req, res);
});

module.exports = router;
