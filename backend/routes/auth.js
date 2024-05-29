const express = require("express");
const {login, register, checkAuth, logout} = require("../controllers/authController");
const {verifyToken} = require("../utils/verifyToken");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/checkAuth", verifyToken, checkAuth);
router.get("/logout", logout);

module.exports = router;
