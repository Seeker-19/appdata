const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const cors = require("cors");
require("../db/conn");
const User = require("../model/userSchema");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

//using promises

/*router.get("/", (req, res) => {
  res.send("Hello World from the server router js");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  console.log(name);
  console.log(email);
  //console.log(req.body);
  //res.json({ message: req.body });

  if (!name || !email || !work || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "plz filled the field prroperly" });
  }

  //res.send("mera register page");

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already Exist" });
      }
      const user = new User({ name, email, phone, work, password, cpassword });
      user
        .save()
        .then(() => {
          res.status(201).json("user registered successfully");
        })
        .catch((err) =>
          res.status(500).json({ error: "Failed to registered" })
        );
    })
    .catch((err) => console.log(err));
});*/

app.use(cors());
router.get("/", (req, res) => {
  res.send("Hello World from the server router js");
});

//Asynch Await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  console.log(name);
  console.log(email);
  //console.log(req.body);
  //res.json({ message: req.body });

  if (!name || !email || !work || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "plz filled the field prroperly" });
  }

  //res.send("mera register page");
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      //yahan pe
      const userRegister = await user.save();

      //console.log(`${user} user registerd successfully`);
      //console.log(userRegister);

      if (userRegister) {
        res.status(201).json({ message: "user registered successfully" });
      } else {
        res.status(500).json({ error: "Failed to registered" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//login route

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  //res.json({ message: "awesome" });
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }
    const userLogin = await User.findOne({ email: email });

    //console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials " });
      } else {
        return res.json({ message: "user Signin successfully" });
      }

      //res.status(400).json({ error: "user error" });
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  console.log("Hello my about");
  // res.send("Hello About world from the server.");
  res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
  console.log("Hello my about");
  // res.send("Hello About world from the server.");
  res.send(req.rootUser);
});

module.exports = router;
