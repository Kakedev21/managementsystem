const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "username is required"],
    },
    password: {
      type: String,
      required: [true, "username is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
