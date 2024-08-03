const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = "mongodb+srv://aqschengen:Bajlando5@cluster0.mongodb.net/myDatabase?";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;