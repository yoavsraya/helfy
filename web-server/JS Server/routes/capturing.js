const express = require('express');
const router = express.Router();

const capturingController = require('../controllers/capturing')

router.put('/ping',capturingController.PUTping)
module.exports = router