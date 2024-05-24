const express = require("express");
const {login, register, checkAuth} = require("../controllers/authController");
const {verifyToken} = require("../utils/verifyToken")

const router = express.Router();

//------------------------------------------[POST new user - CREATE]
router.post("/register", register);
router.post("/login", login);
router.get("/checkAuth", verifyToken, checkAuth);

module.exports = router;
