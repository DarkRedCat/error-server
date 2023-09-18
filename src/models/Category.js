const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    Category: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Category', schema);
