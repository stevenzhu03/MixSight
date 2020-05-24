module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    //403 forbidden
    //402 payment required is save for future use
    return res.status(403).send({ error: "Not enough credits" });
  }

  next();
};
