'use strict'
const jwt = require('jsonwebtoken');
const Constant = require("./Constant")
const ENUM = Constant.StatusEnum;
const MESSAGES = Constant.StatusMessages;
//const { errorHandler } = require("../Utils/error");
//const { resHandler } = require("../Utils/response");

// Generates a new JWT token
module.exports.generateToken = (payload, sKey) => {
  return jwt.sign(payload, sKey);
}

// Verifies a JWT token
module.exports.verifyToken = (req, res, next) => {
  try {
    let token, decodedToken, expirationTimeMs;
    token = req.header('Authorization')
    if (!token) {
      return res.status(ENUM.TOKEN_EXP).json({ status: ENUM.TOKEN_EXP, message: MESSAGES.AUTHORIZATION_TOKEN_IS_MISSING, error: MESSAGES.ERROR });
    } else {
      token = req.header('Authorization').split(' ')[1];
      decodedToken = jwt.verify(token, exports.secretKey());
      expirationTimeMs = decodedToken.exp * 1000;
      req.user = decodedToken;
      if (Date.now() > expirationTimeMs) {
        return res.status(ENUM.TOKEN_EXP).json({ status: ENUM.TOKEN_EXP, message: MESSAGES.TOKEN_EXP });
      }
      next();
    }
  } catch (error) {
    return res.status(ENUM.TOKEN_EXP).json({ status: ENUM.TOKEN_EXP, message: MESSAGES.INVALID_TOKEN });
  }
}
//seceret key
module.exports.secretKey = () => {
  return "authaabcdefghijklmnopqrstuvwxyzauth1234567890auth";
}

