const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const authenticate = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //assign the user in the token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("not authorized, no token provided");
  }
});

module.exports = authenticate;
