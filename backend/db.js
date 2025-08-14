const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB connection string - should be set in environment variables
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mis-xv-nina';
    
    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    console.log('Note: MongoDB connection failed. The server will continue running but database operations will not work.');
    console.log('To fix this, please install and start MongoDB or use a cloud MongoDB service.');
    // Don't exit process in development - let server run without DB for basic testing
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

module.exports = connectDB;