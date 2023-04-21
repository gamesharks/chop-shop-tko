const mongoose = require('mongoose');

const { Schema } = mongoose;

const fightsSchema = new Schema({
  upcomingFights: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
    

  },
  fighter: [
    {
      type: Schema.Types.ObjectId,
      ref: 'stats'
    }
  ]
});

const Fights = mongoose.model('Fights', fightsSchema);

module.exports = Fights;
