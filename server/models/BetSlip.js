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
  fighter: [
    {
      type: String
    }
  ],
});
betslipSchema
  .pre('find', function() {
    this.populate('matchups');
  })
  .pre('findOne', function() {
    this.populate('matchups');
  });
const Betslip = mongoose.model('betslips', betslipSchema);

module.exports = Betslip;