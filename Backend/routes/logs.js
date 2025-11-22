const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const WorkoutLog = require('../models/WorkoutLog');

// Get all logs for authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const logs = await WorkoutLog.find({ user: req.user.id }).sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new log
router.post('/', auth, async (req, res) => {
  try {
    const { date, name, exercises } = req.body;
    if (!date || !name || !exercises) return res.status(400).json({ message: 'Missing fields' });

    const log = new WorkoutLog({
      user: req.user.id,
      date: new Date(date),
      name,
      exercises
    });
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a log
router.delete('/:id', auth, async (req, res) => {
  try {
    const log = await WorkoutLog.findOne({ _id: req.params.id, user: req.user.id });
    if (!log) return res.status(404).json({ message: 'Not found' });
    await log.remove();
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
