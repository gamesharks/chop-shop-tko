require('dotenv').config();
const mongoose = require('mongoose');


//mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fightDB');
mongoose.connect(process.env.MONGODB_URI);


module.exports = mongoose.connection;
