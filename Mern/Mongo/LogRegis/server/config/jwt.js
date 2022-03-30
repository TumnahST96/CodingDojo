const jwt = require("jsonwebtoken");
const secret = "shhhh";

module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.secret, (err, payload) => {
      if (err) { 
        res.status(401).json({verified: false});
      } else {
        next();
      }
    });
  }