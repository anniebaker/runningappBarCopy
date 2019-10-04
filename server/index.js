// require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const runGoalRoutes = require("./routes/runningGoalRoutes");
// const keys = require("./config/keys");
// const passport = require("passport");
// let GoogleStrategy = require("passport-google-oath").OAuth2Strategy;
// const session = require("express-session");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/rungoal", runGoalRoutes);

// **************Ignore GoogleAuthO attempt*********/
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: "/auth/google/callback"
//     },
//     accessToken => {
//       console.log(accessToken);
//     }
//   )
// );

// app.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"]
//   })
// );
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
//***********************End of googleauth attempt */

//********Passport Ignore**********/
// app.use(passport.initialize());
// app.use(passport.session());

// // Endpoint to login
// app.post("/login", passport.authenticate("local"), function(req, res) {
//   res.send(req.user);
// });

// // Endpoint to get current user/loginroutes
// app.get("/user", function(req, res) {
//   res.send(req.user);
// });

// // Endpoint to logout
// app.get("/logout", function(req, res) {
//   req.logout();
//   res.send(null);
// });

// var LocalStrategy = require("passport-local").Strategy;
// passport.use(
//   new LocalStrategy(function(username, password, done) {
//     User.getUserByUsername(username, function(err, user) {
//       if (err) throw err;
//       if (!user) {
//         return done(null, false, { message: "Unknown User" });
//       }
//       User.comparePassword(password, user.password, function(err, isMatch) {
//         if (err) throw err;
//         if (isMatch) {
//           return done(null, user);
//         } else {
//           return done(null, false, { message: "Invalid password" });
//         }
//       });
//     });
//   })
// );
//********Passport Ignore**********/

app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://alaynapuck28:horseshoe2@cluster0-3umzc.mongodb.net/runningapp",
  { useNewUrlParser: true }
);

// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
