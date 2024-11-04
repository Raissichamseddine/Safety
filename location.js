const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/location', async (req, res) => {
  const { userId, location } = req.body;
  const user = await User.findById(userId);

  if (user) {
    user.locationHistory.push({ date: new Date(), location });
    await user.save();
    res.json({ message: 'Location saved' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

router.get('/location/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);

  if (user) {
    res.json(user.locationHistory);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
