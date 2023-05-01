const mongoose = require('mongoose');

const { Schema } = mongoose;
const Matchup = require('./Matchup')

const betslipSchema = new Schema({
  waiverAmount: {
    type: Number
  },
  waiverDate: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  matchup: {
    type: Schema.Types.ObjectId,
    ref: 'matchups',
  },
  User: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
});
betslipSchema
  .pre('find', function() {
    this.populate('matchup');
  })
  .pre('findOne', function() {
    this.populate('matchup');
  });
const Betslip = mongoose.model('betslips', betslipSchema);

module.exports = Betslip;