const express = require("express");
const { signup, login, logout } = require("../controllers/authController");

const router = express.Router();
const { userVerification } = require("../middlewares/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/verify", userVerification);

module.exports = router;