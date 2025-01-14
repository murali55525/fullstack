const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model('signupdetails', UserSchema);

module.exports = User;
