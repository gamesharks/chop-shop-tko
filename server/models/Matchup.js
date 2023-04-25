const mongoose = require('mongoose');

const { Schema } = mongoose;

const fightsSchema = new Schema({
  fightName: {
    type: String
  },
  fightDate: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  fighters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'fighters'
    }
  ],
  odds: [{
    type: Number
  }]
});

const Matchup = mongoose.model('matchups', fightsSchema);

module.exports = Matchup;
