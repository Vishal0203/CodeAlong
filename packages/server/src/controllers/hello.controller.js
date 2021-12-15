const express = require('express');
const router = express.Router();

// handlers
const greet = (req, res) => {
  res.json({ message: 'Hello world' });
};

const greetPerson = (req, res) => {
  const { name } = req.params;
  setTimeout(() => {
    res.json({ message: `Hello ${name}!` });
  }, 4000);
};

// routes
router.get('/', greet);
router.get('/:name', greetPerson);

module.exports = router;
