// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
      console.log("called from html")
    }
    res.redirect("/signup");
  });

  app.get("/login", (req, res) => {
    console.log(req.user)
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.redirect("/login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    console.log(req)
    res.redirect("/members");

  });
};
