const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
  isGroup: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
