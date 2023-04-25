const mongoose = require('mongoose');

const { Schema } = mongoose;

const friendSchema = new Schema({
    friends: {
type: Schema.Types.ObjectId,
ref: 'user'}
});

const Friends = mongoose.model('friends', friendSchema);

module.exports = Friends;
