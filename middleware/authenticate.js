const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../key");
const asyncHandler = require("express-async-handler");

// const Authenticate = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwtoken;
//     const verifyToken = jwt.verify(token, JWT_SECRET);
//     const rootUser = await User.findOne({
//       _id: verifyToken._id,
//       "tokens:token": token,
//     });
//     if (!rootUser) {
//       throw new Error("User not Found");
//     }

//     req.token = token;
//     req.rootUser = rootUser;
//     req.UserID = rootUser._id;

//     next();
//   } catch (err) {
//     res.status(401).send("Unauthorized: No token Provided");
//     console.log(err);
//   }
// };

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    try {
      token = req.headers.authorization.split(" ")[1];

      const decode = jwt.verify(token, JWT_SECRET);
      console.log(decode);
      req.user = await User.findById(decode.id);
      console.log(req.user);

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized : Token failed");
    }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized :  not token");
  }
});

module.exports = { protect };
