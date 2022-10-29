const express = require('express');
const session = require('express-session');

const path = require('path');
const app = express();

const signupRouter = require('./routes/signup.route');
const signinRouter = require('./routes/signin.route');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.use("/", signinRouter);
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);

const PORT = 8080;
app.set('port', PORT);
app.listen(PORT, console.log(`Sever started on port ${PORT}`));