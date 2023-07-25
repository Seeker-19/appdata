const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

// const User = require("./model/userSchema");
//we link the router files to make our route easy

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(require("./router/auth"));

const PORT = process.env.PORT;

//Middleware

/*const middleware = (req, res, next) => {
  console.log("Hello my middleware");
  next();
};*/

/*app.get("/", (req, res) => {
  res.send("hello world from the server");
});*/

/*app.get("/about", middleware, (req, res) => {
  console.log("Hello my about");
  res.send("Hello About world from the server.");
});
*/
app.get("/contact", (req, res) => {
  //res.cookie("Test", "thapa");
  res.send("Hello Contact world from the server .");
});

app.get("/signin", (req, res) => {
  res.send("Hello SignIn world from the server .");
});

app.get("/signup", (req, res) => {
  res.send("Hello SignUp world from the server .");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
