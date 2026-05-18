const { Schema } = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    username: {
    type: String,
    required: [true, "Your username is required"],
  },
    email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = {UserSchema};