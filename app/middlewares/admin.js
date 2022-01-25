const adminMiddleware = (req, res, next) => {
  if(!req.session.user) {
    return res.redirect('/login');
  }
  if(req.session.user.role === 'admin') {
    next();
  }
};

module.exports = adminMiddleware;