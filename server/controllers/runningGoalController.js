let runningGoal = require("../models/runningGoalModel");

exports.list = function(req, res) {
  runningGoal.find((err, u) => {
    return res.json(u);
  });
};

//*******Testing*******/
// let example = new runningGoal({
//   goal: 15,
//   date: 01 / 01 / 2020
// });

// example.save(function(err, fluffy) {
//   if (err) {
//     return console.error(err);
//   }
// });
