import React, { useState } from "react";
import signup from "../components/images/signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    /*const res = await fetch("/register", {
      method: "POST",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword
        ,
      }), 
    });*/

    axios({
      url: "http://localhost:7000/register",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      data: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    })
      .then((res) => {
        //const data = res.data;
        //console.log(res.status);

        window.alert("Registration Successful");
        console.log("Registration Successful");

        history("/login");
      })
      .catch((err) => {
        //console.log(err)
        const status = err.response.status;
        if (status === 422) {
          window.alert("Invalid Registration");
          console.log("Invalid Registration");
        }
      });
  };
  return (
    /* <div>
      <p>WELCOME</p>
      <h1>WE ARE THE REGISTRATION DEVELOPER</h1>
    </div>*/

    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                    autocomplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enail">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    autocomplete="off"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInputs}
                    autocomplete="off"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    value={user.work}
                    onChange={handleInputs}
                    autocomplete="off"
                    placeholder="Your Profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInputs}
                    autocomplete="off"
                    placeholder="Your Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    value={user.cpassword}
                    onChange={handleInputs}
                    autocomplete="off"
                    placeholder="Confirm Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>

            <div className="signup-image">
              <figure>
                <img src={signup} alt="registration pic" />
              </figure>
              <Link to="/login" className="signup-image-link">
                I am already registerd
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
