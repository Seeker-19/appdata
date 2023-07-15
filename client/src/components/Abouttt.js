import React from "react";
import anuragpic from "./images/anurag.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    /*<div>
      <p>WELCOME</p>
      <h1>WE ARE THE ABOUT DEVELOPER</h1>
    </div>*/
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={anuragpic} alt="anurag" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Anurag Kanswal</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      //href="#home"
                      to="/about"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      //href="#profile"
                      to="/abouttt"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Timeline
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row">
            {/*left side url*/}
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <br />
                <a href="" target="_blank">
                  Youtube
                </a>
                <br />
                <a href="" target="_blank">
                  Instagram
                </a>
                <br />
                <a href="" target="_blank">
                  Linked In
                </a>
                <br />
                <a href="" target="_blank">
                  Website Github Mern
                </a>
                <br />
                <a href="" target="_blank">
                  Web Developer
                </a>
                <br />
                <a href="" target="_blank">
                  Software Engineer
                </a>
                <br />
                <a href="" target="_blank">
                  Netlify Hosting
                </a>
              </div>
            </div>
            {/*right dide data toggle */}

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <p>Experience</p>
                    </div>
                    <div className="col-md-6">
                      <p>Learner </p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <p>Total Projects</p>
                    </div>
                    <div className="col-md-6">
                      <p>8</p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <p>English Level</p>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <p>Domain</p>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
