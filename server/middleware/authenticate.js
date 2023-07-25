const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    // const token = req.cookies.jwtoken;

    const cookies = req?.headers?.cookie.split("");
    let cookiesObj = {};
    cookies?.forEach((element) => {
      const cookie = element.split("=");
      cookiesObj[cookie[0]] = cookie[1];
    });
    const token = cookiesObj["jwtoken"];

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized:No token provided");
    console.log(err);
  }
};

module.exports = Authenticate;
