const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const token = req.cookies.accessToken

    if (!token) {
        return res.sendStatus(401)
     }
     jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
        if (error) {
           return res.sendStatus(401)
        }
        req.userId = decoded.id
        next()
     });
  };
 

module.exports = {
    verifyToken,
  
}