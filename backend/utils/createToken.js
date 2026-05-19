require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (user) => {
  return jwt.sign(
  {
    id: user._id,
    username: user.username,
    email: user.email,
  },
  process.env.TOKEN_KEY,
  {
    expiresIn: 3 * 24 * 60 * 60,
  }
);
};