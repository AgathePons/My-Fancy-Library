const userMiddleware = (req, res, next) => {
  if(req.session.user) {
    res.locals.user = req.session.user;
    //!
    console.log(res.locals.user);
  } else {
    res.locals.user = false;
  }
  next();
};

module.exports = userMiddleware;