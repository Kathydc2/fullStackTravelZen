const express = require("express");
const {login, register, checkAuth, logout} = require("../controllers/authController");


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/checkAuth", checkAuth);
router.get("/logout", logout);

module.exports = router;
