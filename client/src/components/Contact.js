import React, { useEffect, useState } from "react";
//import phone from "./images/iphone.jpg";
import axios from "axios";

const Home = () => {
  //const history = useNavigate();
  const [userData, setUserData] = useState({});

  const userContact = async () => {
    try {
      /*&const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });*/
      axios({
        url: "http://localhost:7000/getdata",
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          const data = res.data;
          console.log(data);
          setUserData(data);
          //console.log(res.response.status);

          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      //history("/login");
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  //we are storing data in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, name: userData.name, email: userData.email });
  };

  return (
    /* <div>
      <p>WELCOME</p>
      <h1>WE ARE THE CONTACT DEVELOPER</h1>
    </div>
    */

    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/*phone number*/}
              <div className="contact_info_item d-flex justify-content-start align-items-center ">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt=""
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 1111 543 2198</div>
                </div>
              </div>
              {/*email*/}
              <div className="contact_info_item d-flex justify-content-start align-items-center ">
                <img
                  src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png"
                  alt=""
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">E-mail</div>
                  <div className="contact_info_text">
                    kanswalanurag123@gmail.com
                  </div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center ">
                <img
                  src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png"
                  alt=""
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Dehradun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form */}

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form id="comtact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your name"
                      value={userData.name}
                      onChange={handleInputs}
                      required="true"
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      value={userData.email}
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      onChange={handleInputs}
                      required="true"
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      value={userData.phone}
                      className="contact_form_phone input_field"
                      placeholder="Your Phone Number"
                      onChange={handleInputs}
                      required="true"
                    />
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_field contact_form_message"
                      placeholder="Meassage"
                      value={userData.message}
                      onChange={handleInputs}
                      cols="30"
                    ></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
