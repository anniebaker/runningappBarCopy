const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  distGoal: Number,
  progress: Number,
  dateComplete: String
});
let User = mongoose.model("User", userSchema);

// User.getUserByEmail = function(email, callback) {
//   var query = { email: email };
//   User.findOne(query, callback);
// };

// User.getUserById = function(id, callback) {
//   User.findById(id, callback);
// };

// User.comparePassword = function(candidatePassword, hash, callback) {
//   bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     if (err) throw err;
//     callback(null, isMatch);
//   });
// };

module.exports = User;
