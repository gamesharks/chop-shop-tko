const mongoose = require('mongoose');

const { Schema } = mongoose;

const fighterSchema = new Schema({
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
  nickName: {
    type: String
  },
  odds: {
    type: Number
  }
});

const Fighters = mongoose.model('fighters', fighterSchema);

module.exports = Fighters;
