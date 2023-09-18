const mongoose = require('mongoose');
const initDatabase = require('./src/startUp/initDatabase');
const connectDB = async () => {
  try {
    mongoose.connection.once('open', () => {
      initDatabase();
    });
    await mongoose.connect(process.env.MONGODB_CONNECT_URI);
    console.log('Connect to MongoDB successfully');
  } catch (error) {
    console.log('Connect failed ' + error.message);
  }
};

module.exports = connectDB;
