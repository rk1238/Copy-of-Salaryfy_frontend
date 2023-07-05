import React, { useState } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import ContectImg from "../img/contect-img.png";
import axios from "axios";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
const ContectUs = () => {
  const name = JSON.parse(window.localStorage.getItem("name"));
  const email = JSON.parse(window.localStorage.getItem("email"));
  const [message, setMessage] = useState();
  const [contactValue, setContactValue] = useState({
    name: name,
    email: email,
    phone: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.stringify(contactValue);
    let config = {
      method: "post",
      url: ApiBaseUrl+"store-contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    return axios(config)
      .then(function (res) {
        const { email, name } = res.data;
        console.log("emailid value:", email, name);
        setContactValue({ email, name }); // update the state here
        setMessage("Form successfully submitted!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChange = async (e) => {
    const { value, name } = e.target;
    console.log("jjjjjjjjjjjjjj", name, value);
    setContactValue((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <React.Fragment>
      <Navbar />
      <section className="contect-us-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contect-left-wrapper">
                <h1>
                  Love to hear from you,
                  <br /> Get in touch!
                </h1>
                <p>
                  Want a job or want an employee?
                  <br /> We mastered both!
                  <br /> Just fill in your details and wait for us to bring{" "}
                  <br />
                  you the best opportunities and best employees.
                </p>
                <img src={ContectImg} alt="" className="full_show" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contect-right-wrapper">
                {message}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      onChange={onChange}
                      name="name"
                      value={contactValue.name}
                      className="form-control"
                      placeholder="Auto filled name here"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email </label>
                    <input
                      type="email"
                      onChange={onChange}
                      name="email"
                      value={contactValue.email}
                      className="form-control"
                      placeholder="Auto filled name here"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Phone number </label>
                    <input
                      type="phone"
                      className="form-control"
                      onChange={onChange}
                      name="phone"
                      value={contactValue.phone}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea
                      className="form-control"
                      onChange={onChange}
                      name="message"
                      value={contactValue.message}
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Hi, ..."></textarea>
                  </div>
                  <div className="d-flex justify-content-center contect-submit">
                    <button type="submit" className="theme_btn">
                      Send
                      <span></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 five_show">
              <div className="contect-left-wrapper img-wrapper">
                <img src={ContectImg} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ContectUs;
