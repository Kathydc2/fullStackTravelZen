const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
    
        const newUser = await User.create({
            username,
            email,
            password: hash,
        });
        console.log("User Created", newUser);
        res.status(200).json({ message: "Successfully created!" });
    } catch (error) {
        console.log(error)
    }
};

const login = async (req, res ) => {
    try{
        const { email, password} = req.body;
        const user = await User.findOne({email});
        console.log(`User: ${user}`);

        if(!user) {
            return res.sendStatus(401);
        }
        const passwordMatch = await bcrypt.compareSync(password, user.password);
        console.log("Password Verified");
        if (!passwordMatch) return res.sendStatus(401);
        
        const exp = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);

        console.log(exp);
        const token = jwt.sign({ id: user._id} , process.env.JWT_SECRET_KEY, { expiresIn: "30d" });

        const decoded = jwt.decode(token);

        const issuedAtDate = new Date(decoded.iat * 1000).toDateString();
        const expString =exp.toDateString();

        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn,
            sameSite: "lax"
        });
        res.status(200).json({ message: "Login successful!", token,issuedAtDate,exp: expString});


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

const logout = (req,res) => {
    res.clearCookie("Authorization");
    res.sendStatus(200);
    console.log('Successfully Logged Out')
}

module.exports = {
    register,
    login,
    checkAuth,
    logout
};