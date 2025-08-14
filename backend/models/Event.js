const mongoose = require('mongoose');

// Example Event model schema
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  quinceañera: {
    type: String,
    required: true
  },
  photos: [{
    url: String,
    caption: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  guests: [{
    name: String,
    email: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);