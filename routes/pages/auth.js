var express = require('express');
var router = express.Router();
const Users = require("../../db/Users");

router.get('/login', (request, response) => {
    response.render('public/login', { title: 'Log In', layout: 'public/landing'});
});

router.post("/login", (request, response) => {
    const { username, password } = request.body;

    request.session.authenticated = true;
    request.session.username = username;
    // response.json({ username, password });
    response.redirect("/lobby");
});

router.get('/register', (request, response) => {
    response.render('public/register', { title: 'Register', layout: 'public/landing'});
});

router.post("/register", (request, response) => {
    const { username, password, email } = request.body;

    Users.register({ username, password, email })
        .then(({ id, username }) => {
            console.log(id);
            request.session.authenticated = true;
            request.session.userID = id;
            request.session.username = username;

            response.redirect("/lobby");

        })
        .catch((error) => {
            console.log("error");
            response.redirect("/register");
        });

    request.session.authenticated = true;
    request.session.username = username;
    // response.json({ username, password });
    response.redirect("/lobby");
});
  
module.exports = router;