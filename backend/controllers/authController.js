const User = require("../models/User");
//encrypt password using bcrypt
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try{
        //first get email and password
        const {username, email, password} = req.body;
        //hash the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
    
        //create the new user
        const newUser = await User.create({
            username,
            email,
            password: hash,
        });
        console.log("User Created", newUser);
        //send the response
        res.status(200).json({ message: "Successful" });
    } catch (error) {
        console.log(error)
    }
};

const login = async (req, res ) => {
    try{
        //get email and the password
        const { email, password} = req.body;
        //find the user associated w the email
        const user = await User.findOne({email});
        console.log(`User: ${user}`);

        if(!user) {
            return res.sendStatus(401);
        }
        //compare the password w the found User
        const passwordMatch = await bcrypt.compareSync(password, user.password);
        console.log("Password Verified");
        if (!passwordMatch) return res.sendStatus(401);
        //setting a 30 day exp date on the token and calculating it 
        const exp = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);

        console.log(exp);
        const token = jwt.sign({ id: user._id} , process.env.JWT_SECRET_KEY, { expiresIn: "30d" });

        const decoded = jwt.decode(token);
        //issued and exp will show as a string on console
        const issuedAtDate = new Date(decoded.iat * 1000).toDateString();
        const expString =exp.toDateString();
        
        res.cookie('accessToken', token, {
            httpOnly: true,
            //set the expiration
            expires: token.expiresIn,
            //allows only browser and server to read
            sameSite: "lax"
        });
        res.status(200).json({ message: "Login successful", token,issuedAtDate,exp: expString, _id: user._id});
        // Cookie - data that our servers will send to browser and store in cache.
        // Cookies save information about a user's session
        // by default express doesnt read cookies off request body so u need an npm package :cookie-parser


    }catch(error){
        console.log(error)
    }
};

const checkAuth = (req, res) => {
    if (!req.user) {
        return res.sendStatus(401); 
    }
    console.log(req.user);
    res.sendStatus(200);
};
// log out func
const logout = (req,res) => {
    res.clearCookie("Authorization");
    res.sendStatus(200);
    console.log('Successfully Logged Out')
}
//make sure to export
module.exports = {
    register,
    login,
    checkAuth,
    logout
};