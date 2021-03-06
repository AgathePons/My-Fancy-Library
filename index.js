require('dotenv').config();
const express = require('express');
const session = require('express-session');
const userMiddleware = require('./app/middlewares/user');
const router = require('./app/router');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use(session({
  // doc express-session : npmjs.com/package/express-session
  secret: process.env.SECRET_KEY,
  resave: true,
  saveUninitialized: true,
  cookie : {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

app.use(userMiddleware);
app.use(router);

app.use((req, res) => {
  res.status(404).render('notFound');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});