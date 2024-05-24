const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken

    if (!token) {
        return res.sendStatus(401)
     }
     jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
        if (error) {
           return res.sendStatus(401)
        }
        req.user = user
        next()
     });
  };
 

module.exports = {
    verifyToken,
  
}