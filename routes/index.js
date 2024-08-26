const express = require('express');
const router = express.Router();
const CityController = require('../controllers/cityController')

router.post('/cities', CityController.addCity);
router.put('/cities/:id', CityController.updateCity);
router.delete('/cities/:id', CityController.deleteCity);
router.get('/cities', CityController.getCities);

module.exports = router;