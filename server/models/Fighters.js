const mongoose = require('mongoose');

const { Schema } = mongoose;

const fighterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  reach: {
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
  winsByKO: {
    type: Number
  },
  winsBySubmission: {
    type: Number
  },
  losses: {
    type: Number,
    required: true,
    min: 0.99
  },
  nickName: {
    type: String
  },
  odds: {
    type: Number
  },
  stance: {
    type: String
  },
  height: {
    type: String
  },
  weight: {
    type: Number
  },
  age: {
    type: Number
  }
});

const Fighters = mongoose.model('fighters', fighterSchema);

module.exports = Fighters;
