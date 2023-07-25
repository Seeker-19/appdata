import { React, useState } from "react";
import loginpic from "../components/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    /* const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });*/

    axios({
      url: "http://localhost:7000/signin",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      data: JSON.stringify({
        email,
        password,
      }),
      withCredentials: true,
    })
      .then((res) => {
        //const data = res.data;
        //console.log(res.response.status);

        window.alert("Login Succesful");
        history("/");
      })
      .catch((err) => {
        console.log(err);

        window.alert("Invalid Credentials");
      });
  };

  return (
    /*<div>
      <p>WELCOME</p>
      <h1>WE ARE THE LOGIN DEVELOPER</h1>
    </div>*/
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={loginpic} alt="login pic" />
              </figure>
              <Link to="/signup" className="signup-image-link">
                Create an account
              </Link>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    autocomplete="off"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    autocomplete="off"
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    onClick={loginUser}
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
