const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, unique: true, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

