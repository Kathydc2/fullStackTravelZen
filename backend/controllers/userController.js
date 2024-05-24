const User = require("../models/User");

const fetchAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({users: users});
};

const fetchUser = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.json({user: user});
};

const createUser = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    const {username,email,password} = req.body;
    const user = await User.create({
        username: username,
        email: email,
        password: password
    });
    res.json({user: user});
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const {username,email,password} = req.body;
    const user = await User.findByIdAndUpdate(userId,{
        username: username,
        email: email,
        password: password
    });
    const updatedUser = await User.findById(userId);
    res.json({user: updatedUser});
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.json({success: "User has been deleted successfully"});
};

module.exports = {
    fetchAllUsers,
    fetchUser,
    createUser,
    updateUser,
    deleteUser
}