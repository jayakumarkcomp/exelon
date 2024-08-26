const City = require('../models/City');

exports.addCity = async (req, res) => {
  try {
    const city = new City(req.body);
    await city.save();
    res.status(201).json({ message: 'City added successfully', city });
  } catch (err) {
    res.status(400).json({ message: 'Error adding city', error: err });
  }
};

exports.updateCity = async (req, res) => {
  try {
    const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'City updated successfully', city });
  } catch (err) {
    res.status(400).json({ message: 'Error updating city', error: err });
  }
};

exports.deleteCity = async (req, res) => {
    try {
      const city = await City.findByIdAndRemove(req.params.id);
      if (!city) {
        return res.status(404).json({ message: 'City not found' });
      }
      res.status(200).json({ message: 'City deleted successfully' });
    } catch (err) {
      res.status(400).json({ message: 'Error deleting city', error: err });
    }
  };

exports.getCities = async (req, res) => {
  try {
    const query = {};
    if (req.query.filter) {
      query[req.query.filter] = req.query.value;
    }
    const cities = await City.find(query)
      .skip((req.query.page - 1) * req.query.limit)
      .limit(req.query.limit)
      .sort(req.query.sort)
      .select(req.query.projection);
    res.status(200).json({ message: 'Cities retrieved successfully', cities });
  } catch (err) {
    res.status(400).json({ message: 'Error retrieving cities', error: err });
  }
};