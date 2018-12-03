const router = require('express').Router();
const apiController = require('../controllers/apiController');

router.get('/', apiController.storeData)

module.exports = router;