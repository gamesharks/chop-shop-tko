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
  isActive: {type: Boolean},
  fighters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'fighter'
    }
  ]
});

const Matchup = mongoose.model('matchup', fightsSchema);

module.exports = Matchup;
