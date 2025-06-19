const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
  members: [String] // userIds
}, { timestamps: true });

module.exports = mongoose.model('Group', groupSchema);
