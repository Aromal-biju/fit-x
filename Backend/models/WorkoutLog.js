const mongoose = require('mongoose');

const WorkoutSetSchema = new mongoose.Schema({
  id: String,
  exercise: String,
  sets: Number,
  reps: Number,
  weight: Number
}, { _id: false });

const WorkoutLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  name: { type: String, required: true },
  exercises: [WorkoutSetSchema]
}, { timestamps: true });

module.exports = mongoose.model('WorkoutLog', WorkoutLogSchema);
