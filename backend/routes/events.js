const express = require('express');
const router = express.Router();

// Example route for events
// GET /api/events
router.get('/', (req, res) => {
  res.json({ 
    message: 'Lista de eventos',
    events: []
  });
});

// POST /api/events
router.post('/', (req, res) => {
  res.json({ 
    message: 'Evento creado',
    event: req.body
  });
});

module.exports = router;