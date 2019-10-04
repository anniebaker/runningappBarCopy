// let comments = require("../data/comments");
let User = require("../models/userModel");

exports.list = function (req, res) {
  User.find((err, u) => {
    return res.json(u);
  });
};

// exports.show = function show(req, res) {
//   let id = req.params.id;
//   let commentsID = users.find(p => p["_id"] == id);

//   return res.json(commentsID);
// };

exports.create = function (req, res) {
  let user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    distGoal: req.body.distGoal,
    progress: req.body.progress,
    dateComplete: req.body.dateComplete
  });
  user.save().then(savedUser => {
    res.json(savedUser);
  });
};

exports.update = function (req, res) {
  User.findByIdAndUpdate(req.body._id, req.body, (err, user) => {
    return res.json(user);
  })
}