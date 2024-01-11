const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trime: true,
    },
    lname: {
      type: String,
      required: true,
      trime: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail()) {
          throw Error("Not Valid Email");
        }
      },
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      minlength: 7,
      maxlength: 11,
    },
    gender: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestant: true }
);

const users = new mongoose.model("users", userSchema);

module.exports = users;
