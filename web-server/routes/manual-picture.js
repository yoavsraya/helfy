const express = require('express');
const router = express.Router();

const manualPictureController = require('../controllers/manual-picture')

router.post('/uploadPicToServer',manualPictureController.POSTuploadPicToServer)
module.exports = router