const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin0', 'AdminActif', 'Admin', 'Employe'], required: true },
  department: { type: String, required: true },
  phone: { type: String },
  email: { type: String, unique: true },
  locationHistory: [{ date: Date, location: { latitude: Number, longitude: Number } }],
});

module.exports = mongoose.model('User', userSchema);
