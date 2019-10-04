// let comments = require("../data/comments");
let Login = require("../models/loginModel");

exports.list = function(req, res) {
  Login.find((err, u) => {
    return res.json(u);
  });
};

// let example = new Login({
//   email: "erin@aca.com",
//   name: "Erin",
//   password: "password"
// });

// example.save(function(err, fluffy) {
//   if (err) {
//     return console.error(err);
//   }
// });

exports.create = function(req, res) {
  let user = new Login({
    email: req.body.email,
    fname: req.body.fname,
    lname: req.body.lname,
    password: req.body.password
  });
  user.save().then(savedUser => {
    res.json(savedUser);
  });
};

// exports.show = function show(req, res) {
//   let id = req.params.id;
//   let commentsID = users.find(p => p["_id"] == id);

//   return res.json(commentsID);
// };

// GET /register
// router.get("/register", function(req, res, next) {
//   return res.render("register", { title: "Sign Up" });
// });

// // POST /register
// exports.create = function(req, res, next) {
//   if (req.body.email && req.body.name && req.body.password) {
//     // confirm that user typed same password twice
//     // if (req.body.password !== req.body.confirmPassword) {
//     //   var err = new Error('Passwords do not match.');
//     //   err.status = 400;
//     //   return next(err);
//     // }

//     // create object with form input
//     var userData = {
//       email: req.body.email,
//       name: req.body.name,
//       favoriteBook: req.body.favoriteBook,
//       password: req.body.password
//     };

//     // use schema's `create` method to insert document into Mongo
//     Login.create(loginData, function(error, user) {
//       if (error) {
//         return next(error);
//       } else {
//         return res.redirect("/profile");
//       }
//     });
//   } else {
//     var err = new Error("All fields required.");
//     err.status = 400;
//     return next(err);
//   }
// };

// fname: req.body.fname,
// lname: req.body.lname,
// email: req.body.email,
// password: req.body.password,
// distGoal: req.body.distGoal,
// progress: req.body.progress,
// dateComplete: req.body.dateComplete
