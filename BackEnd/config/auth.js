const express = require('express');
const router = express.Router();
const { addUser } = require('../services/userService'); // Import the function

// Register User Endpoint
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  const result = await addUser(username, email, password);

  if (result.success) {
    res.status(201).json({ message: 'User registered successfully!', userId: result.userId });
  } else {
    res.status(500).json({ error: result.error });
  }
});

module.exports = router;
