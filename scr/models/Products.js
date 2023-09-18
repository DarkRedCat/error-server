const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    img: { type: Array, required: true },
    text: { type: String, required: true },
    size: { type: Array, required: true },

    composition: { type: String, required: true },
    dimension_grid: { type: Object, required: true },
    Caring_for_a_thing: { type: String, required: true },
    Cost: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Products', schema);
