const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let loginSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  fname: {
    type: String,
    required: true,
    trim: true
  },
  lname: {
    type: String,
    required: true,
    trim: true
  },

  password: {
    type: String,
    required: true
  }
});

let Login = mongoose.model("Login", loginSchema);

module.exports = Login;

//*******Authentication Ignore */
// User.comparePassword = function(candidatePassword, hash, callback) {
//   bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     if (err) throw err;
//     callback(null, isMatch);
//   });
// };
