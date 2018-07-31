const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(
	keys.mongooseURI,
	{ useNewUrlParser: true },
);

const app = express();

// 1. enable cookieSession
app.use(
	cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] }),
);
// 2. init & session
app.use(passport.initialize());
app.use(passport.session());

// authRoutes
require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is running on port:${port}`);
});
