const controller = (app) => {
    // Requiring path to so we can use relative routes to our HTML files
    const path = require("path");
    const rootDir = path.resolve();
    // Requiring our custom middleware for checking if a user is logged in
    const isAuthenticated = require(rootDir + "/config/middleware/isAuthenticated");
    const db = require(rootDir + "/models/");
    const passport = require(rootDir + "/config/passport");

    //html routes
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
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
    //end of html routes

    //api routes
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", (req, res) => {
        console.log(req)
        db.User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(() => {
            res.redirect(307, "/api/login");
        })
        .catch(err => {
            res.status(401).json(err);
        });
    });

    // Route for logging user out
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
        console.log("sent from logout game controller")
    
    });

  // Route for getting some data about our user to be used client side
    app.get("/api/user_data", (req, res) => {
        if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
        } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
        }
    });

    app.post("/api/character", (req, res) => {
        db.Character.create({
            highScore: req.body.highScore,
            UserID: req.body.UserID
        });
        res.end();
    });

    app.put("/api/character/:UserID", (req, res) => {
        let id = req.body.UserID;
        db.Character.update({
            highScore: req.body.highScore,
            UserID: req.body.UserID
        },{
            where:{UserID: id}
        })
        res.end();
    });

    app.get("/api/character/:UserID", (req, res) => {
        let id = req.params.UserID;
        db.Character.findOne({ where: {UserID: id} }).then(data => {
            res.json(data);
        })
    });
    //end of api routes
};
module.exports = controller;