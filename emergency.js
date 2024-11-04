const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Function to simulate sending a notification
const sendNotification = (department, message) => {
  console.log(`Notification sent to department ${department}: ${message}`);
};

router.post('/panic', async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);

  if (user) {
    sendNotification(user.department, `${user.username} has activated the panic button!`);
    res.json({ message: 'Alert sent!' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
