const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
