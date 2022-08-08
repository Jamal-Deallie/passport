const dotenv = require('dotenv');
require('dotenv').config();
const passportConfig = require('./passport');
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRoutes = require("./routes/authRoutes");

console.log('Welcome to The Server');

app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.KEY],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.WEB_APP_URL,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);


app.use("/auth", authRoutes);

const port = process.env.PORT || 5001;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
