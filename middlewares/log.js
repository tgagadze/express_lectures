const log = (req, res, next) => {
  console.log(req.originalUrl);
  next();
};

module.exports = log;
