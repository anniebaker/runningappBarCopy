const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let runningGoalSchema = new Schema({
  goal: {
    type: Number,
    required: true,
    trim: true
  },
  date: {
    type: Date
  }
});

let RunningGoal = mongoose.model("RunningGoal", runningGoalSchema);

module.exports = RunningGoal;
