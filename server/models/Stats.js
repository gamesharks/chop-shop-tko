const mongoose = require('mongoose');

const { Schema } = mongoose;

const statsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quickStats: {
    type: String
  },
  image: {
    type: String
  },
  wins: {
    type: Number,
    required: true,
    min: 0.99
  },
  losses: {
    type: Number,
    required: true,
    min: 0.99
  },
  sigStrikes: {
    type: Number,
    required: true,
    min: 0.99
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;
