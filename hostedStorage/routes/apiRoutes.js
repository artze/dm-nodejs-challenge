const router = require('express').Router();
const apiController = require('../controllers/apiController');

router.post('/app-data', apiController.storeData)
router.get('/app-data', apiController.getData)

module.exports = router;