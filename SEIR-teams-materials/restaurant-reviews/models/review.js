const mongoose = require('../db/connection');

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      // References use the type ObjectId
      type: mongoose.Schema.Types.ObjectId,
      // the name of the model to which they refer
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = reviewSchema;
