const mongoose = require('mongoose');

const { Schema } = mongoose;

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
  User: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
});

const Betslip = mongoose.model('betslips', betslipSchema);

module.exports = Betslip;