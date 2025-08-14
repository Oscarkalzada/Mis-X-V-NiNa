const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenidos al servidor de Mis XV',
    status: 'Server is running successfully'
  });
});

// Routes
// TODO: Add routes when they are created
// app.use('/api/users', require('./routes/users'));
// app.use('/api/events', require('./routes/events'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;