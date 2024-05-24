const express = require("express");
const {fetchAllUsers, fetchUser, updateUser, deleteUser} = require("../controllers/userController");


const router = express.Router();

//------------------------------------------[GET all user - READ]
router.get("/", fetchAllUsers);
//------------------------------------------[GET specific user by ID - READ]
router.get("/:id", fetchUser);
//------------------------------------------[PUT new user - UPDATE]
router.put("/:id", updateUser);
//------------------------------------------[DELETE a user - DELETE]
router.delete("/:id", deleteUser);

module.exports = router;