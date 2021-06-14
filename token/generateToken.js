const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../key");

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "15d",
  });
};

module.exports = generateToken;
