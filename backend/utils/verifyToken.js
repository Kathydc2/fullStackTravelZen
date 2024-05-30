const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
   // this will read the token off the cookie
    const token = req.cookies.accessToken

    if (!token) {
        return res.sendStatus(401)
     }// decode the token } jwt
     jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
        if (error) {
           return res.sendStatus(401)
        }
        //assigns the userId to the req. allowing functions access to the authenticated usersId
        req.userId = decoded.id
        next()
     });
  };
 

module.exports = {
    verifyToken,
  
}