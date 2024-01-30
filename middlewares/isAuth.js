const isAuth = (req, res, next) => {
  req.lang = "ka";
  const isValid = true;

  if (!isValid) {
    return res.json({ success: false, data: null });
  }

  next();
};

module.exports = isAuth;
