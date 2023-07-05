import React, { useState } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

import selectIcon from "../img/select-icon.png";

import Certi from "../img/certi.png";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import Mail from "../img/mail.png";

import Calendar from "../img/icons/calendar.png";
import "../website/css/zoom.css";
import "../website/js/zoom.js";
import VisaImg from "../img/visa-img.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Paid from "../img/paid.gif";
import congratsLeft from "../img/congrats-left.png";
import CongratsRight from "../img/congrats-right.png";
import { useParams } from 'react-router-dom';
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
// import {useNavigate } from 'react-router-dom'

const BasketPaymentTwo = () => {
  // let navigate = useNavigate();
  const params = useParams();
  const course_id = [params.id];
  window.localStorage.setItem('course_id', JSON.stringify(course_id))
  const Token = JSON.parse(window.localStorage.getItem("token"));
  
  const [payment, setPayment] = useState({
    price: 499,
    name: "Salaryfy",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(payment.price);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setPaymentAmount(paymentAmount + 1000);
    } else {
      setPaymentAmount(payment.price);
    }
  };

  const navigate = useNavigate()

  

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_ZVzgeczmpnmT1U",
      key_secret: "sdXm9TSBD79fkY6aOeDD5vTR",
      amount: data.amount,
      currency: data.currency,
      name: payment.name,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = ApiBaseUrl+"payment/verify";
          const config = {
            headers: {
              "x-access-token": Token,
            },
          };
          const { data } = await axios.post(verifyUrl, response, config);
          const paymentSuccessModal =
            document.getElementById("paymentSucessfull");
          if (paymentSuccessModal) {
            paymentSuccessModal.classList.add("show");
            paymentSuccessModal.style.display = "block";

            setTimeout(() => {
              paymentSuccessModal.classList.remove("show");
              paymentSuccessModal.style.display = "none";

              const submitTestModal =
                document.getElementById("submitTestModalNew");
              if (submitTestModal) {
                submitTestModal.classList.add("show");
                submitTestModal.style.display = "block";
              }
            }, 1200);
          }
        } catch (error) {
          console.log(error);
        }
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
   
      try {
        navigate('/AfterScholarshipTestDashboardTwo')
        const orderUrl = ApiBaseUrl+"payment/orders";
        const config = {
          headers: {
            "x-access-token": Token,
          },
        };
        const { data } = await axios.post(
          orderUrl,
          { amount: paymentAmount, type: "1" },
          config
        );
        console.log({ data });
        initPayment(data.data);
      } catch (error) {
        console.log(error);
      }
    
  };
  

  return (
    <React.Fragment>
      <Navbar />

      <section className="landing-banner basket-banner certificate-section-hover full_show">
        <div className="container ">
          <div className="row basket-row">
            <div className="col-lg-7">
              <div className="basket-table">
                <div className="special-inclusions">
                  <div className="heading">
                    <p
                      className="text-center w-100"
                      id="Basket_Payment_hide_show_text">
                      You have opted for
                    </p>
                    <p
                      className="text-left "
                      id="Basket_Payment_hide_text"
                      style={{ display: "none" }}>
                      You have opted for
                    </p>
                  </div>
                  <div
                    className="table-responsive-xl
                                    special-inclusions-table">
                                        <div className="certificate_background_sec">
                      <div className="basket-payment">
                        <div className="certificate_title">
                          <h4 className="h4">Career center</h4>
                          <h4>₹999</h4>
                        </div>
                        <div
                          className="accordion style-2"
                          id="accordionExample">
                          <div className="card">
                            <div
                              id="heading-one"
                              className="card-header collapsed show-more-less"
                              data-toggle="collapse"
                              data-target="#collapse0"
                              aria-expanded="false">
                              Show less
                              <img
                                src={selectIcon}
                                className="select-icon"
                                alt=""
                              />
                            </div>


                            <div
                              id="collapse0"
                              className="collapse show"
                              data-parent="#accordionExample"
                              aria-labelledby="heading-one">
                              <div className="card-body">
                                <ul>
                                  <li>
                                    <p>60% Minimun salary hike</p>
                                  </li>
                                  <li>
                                    <p>Get into placement drives</p>
                                  </li>
                                  <li>
                                    <p>
                                    Resume building
                                    </p>
                                  </li>
                                  <li>
                                    <p>Soft skills development</p>
                                  </li>
                                  <li>
                                    <p>
                                      Interpersonal skills development
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Mock interviews
                                    </p>
                                  </li>
                                 
                                </ul>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <table className="table">
                      <tbody>
                      

                        <tr
                          className="bg-blue-line-1
                                                total-row-border">
                          <td className="">
                            {" "}
                            <p>(Inclusive of 18% gst)</p>
                          </td>

                          <td>
                            <p> ₹999</p>
                          </td>
                        </tr>
                        <tr className="bg-blue-line-1">
                          <td className="">
                            <p className="p">
                              {" "}
                              Coupon
                              <input type="text" placeholder="STUDY500" />
                            </p>
                          </td>

                          <td>
                            <p>- ₹500</p>
                          </td>
                        </tr>

                        <tr className="total-row">
                          <td>
                            <h4>Total:</h4>
                          </td>
                          <td>
                            <h4>₹{paymentAmount}</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="form-group">
                                    <div className="left_checkbox">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="invalidCheck2"
                                          checked={isChecked}
                                          onChange={handleCheckboxChange}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="invalidCheck2">
                                         I am flexible to work location
                                        </label>
                                      </div>
                                    </div>
                                    <div className="left_checkbox">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="invalidCheck2"
                                          checked={isChecked}
                                          onChange={handleCheckboxChange}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="invalidCheck2">
                                         I have read all the T&C
                                        </label>
                                      </div>
                                    </div>
                                    <div className="left_checkbox">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="invalidCheck2"
                                          checked={isChecked}
                                          onChange={handleCheckboxChange}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="invalidCheck2">
                                         I agree to pay 1% of my annual CTC post a successful job change
                                        </label>
                                      </div>
                                    </div>
                                    
                                  </div>
                    <div className="right-block">
                     
                      <button
                        onClick={handlePayment}
                        id="buttonClick"
                        className="theme_btn tertiary"
                        >
                         Get access
                        <img src={RightGreen} alt="arrow" className="img-1"/>
                             <img src={SvgArrow} className="partners-img img-2" alt="" />
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 d-none-hide-eleven"></div>

            <div className="col-lg-4 col-md-7 col-sm-10 col-10 ">
              <div className="w-100 zoom_show_sec" id="Zoom_page_show">
                <div className="client-logo mt-5 five_show">
                  <p> Secure payment by </p>
                  <img src={VisaImg} alt="" />
                </div>
                <div className="summary-table mb-5 order-lg-1 order-md-1 order-sm-1 order-2">
                  <h2 className="text-center mb-4">Having doubts?</h2>
                  <div className="table-responsive-xl special-inclusions-table">
                    <div className="having-doughts-sec">
                      <p className="text-center"> Connect with us!</p>
                      <div className="call-session">
                        <p>Email us!</p>
                        <p className="number-cell">
                          <a href="#">contact@salaryfy.com</a>
                        </p>
                        <img src={Mail} alt="icon" className="icon" />
                      </div>
                      <p className="text-center mt-3">or</p>
                      <div className="call-session">
                        <p>Let us call you!</p>
                        <p className="number-cell">
                          <a href="#">Book a slot now</a>
                        </p>
                        <img src={Calendar} alt="icon" className="icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client-logo mt-5 full_show">
                  <p> Secure payment by </p>
                  <img src={VisaImg} alt="" />
                </div>
              </div>

              {/* ===zoom-hover--- */}

              <div
                className="right_certi_absolute full_show"
                id="Zoom_page_hide"
                style={{ display: "none" }}>
                <div className="image-container">
                  <img src={Certi} alt="" />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade sign-in-modal test-submit-modal congratulations-popup"
        id="submitTestModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ready-list">
              <h2>
                <img src={congratsLeft} alt="" /> Congratulations!{" "}
                <img src={CongratsRight} alt="" />
              </h2>
              <p>
                Your application has been registered
                <br />
                for the Direct placement program
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="landing-banner basket-banner certificate-section-hover five_show">
        <div className="container ">
          <div className="row basket-row">
            <div className="col-lg-7">
            <div className="basket-table">
                <div className="special-inclusions">
                  <div className="heading">
                    <p
                      className="text-center w-100"
                      id="Basket_Payment_hide_show_text">
                      Your Cart
                    </p>
                    <p
                      className="text-left "
                      id="Basket_Payment_hide_text"
                      style={{ display: "none" }}>
                      You have opted for
                    </p>
                  </div>
                  <div
                    className="table-responsive-xl
                                    special-inclusions-table">
                    <div className="certificate_background_sec">
                      <div className="basket-payment">
                        <div className="certificate_title">
                          <h4 className="h4">Skill placement</h4>
                          <h4>₹999</h4>
                        </div>
                        <div
                          className="accordion style-2"
                          id="accordionExample">
                          <div className="card">
                            <div
                              id="heading-one"
                              className="card-header collapsed show-more-less"
                              data-toggle="collapse"
                              data-target="#collapse0"
                              aria-expanded="false">
                              Show less
                              <img
                                src={selectIcon}
                                className="select-icon"
                                alt=""
                              />
                            </div>

                            <div
                              id="collapse0"
                              className="collapse show"
                              data-parent="#accordionExample"
                              aria-labelledby="heading-one">
                              <div className="card-body">
                                <ul>
                                  <li>
                                    <p>Job guarantee program</p>
                                  </li>
                                  <li>
                                    <p>Career centre - 360o development</p>
                                  </li>
                                  <li>
                                    <p>
                                      High Paying Top Industry Skills
                                    </p>
                                  </li>
                                  <li>
                                    <p>NASSCOM recognised certificate</p>
                                  </li>
                                  <li>
                                    <p>
                                      Industry Projects with real life data set
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Soft Skills - Communication, & Leadership
                                      Skills
                                    </p>
                                  </li>
                                  <li>
                                    <p>Resume building</p>
                                  </li>
                                  <li>
                                    <p>Mock interview series</p>
                                  </li>
                                  <li>
                                    <p>Linkedin profile</p>
                                  </li>
                                </ul>
                                <div className="new-additional-block">
                                  <div className="additional-heading">
                                    <h6>Additional services</h6>
                                  </div>

                                  <div className="form-group">
                                    <div className="left_checkbox">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="invalidCheck2"
                                          checked={isChecked}
                                          onChange={handleCheckboxChange}
                                        />
                                        <label
                                          className="form-check-label"
                                          for="invalidCheck2">
                                         Get NASSCOM certificate worth ₹1000
                                        </label>
                                      </div>
                                    </div>
                                    <div
                                      className="App"
                                      id="basket_payment_zoom_hover">
                                      <div id="imageMagnifyer">
                                        <div className="thumbnail-container">
                                        <button
                                              className="thumbnail-container"
                                              type="button"
                                              data-toggle="modal"
                                              data-target="#exampleModalCenter">
                                              <img
                                                src={Certi}
                                                alt=""
                                                className="thumb"
                                              />
                                            </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr
                          className="bg-blue-line-1
                                                total-row-border">
                          <td className="">
                            {" "}
                            <p>(Inclusive of 18% gst)</p>
                          </td>

                          <td>
                            <p> ₹999</p>
                          </td>
                        </tr>
                        <tr className="bg-blue-line-1">
                          <td className="">
                            <p className="p">
                              {" "}
                              Coupon
                              <input type="text" placeholder="STUDY500" />
                            </p>
                          </td>

                          <td>
                            <p>- ₹500</p>
                          </td>
                        </tr>

                        <tr className="total-row">
                          <td>
                            <h4>Total:</h4>
                          </td>
                          <td>
                            <h4>₹{paymentAmount}</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="right-block">
                      {/* <a href="/ProgramsPage" className="theme_btn tertiary"> */}
                      <button
                        onClick={handlePayment}
                        id="buttonClick"
                        className="theme_btn tertiary"
                        >
                        
                        Get access
                        <img src={RightGreen} alt="arrow" className="img-1" />
                        <img
                          src={SvgArrow}
                          className="partners-img img-2"
                          alt=""
                        />
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 d-none-hide-eleven"></div>

            <div className="col-lg-4 col-md-7 col-sm-10 col-12 ">
              <div className="w-100 zoom_show_sec" id="Zoom_page_show">
                <div className="client-logo mt-5 five_show">
                  <p> Secure payment by </p>
                  <img src={VisaImg} alt="" />
                </div>
                <div className="summary-table mb-5 order-lg-1 order-md-1 order-sm-1 order-2">
                  <h2 className="text-center mb-4">Having doubts?</h2>
                  <div className="table-responsive-xl special-inclusions-table">
                    <div className="having-doughts-sec">
                      <p className="text-center"> Connect with us!</p>
                      <div className="call-session">
                        <p>Email us!</p>
                        <p className="number-cell">
                          <a href="#">contact@salaryfy.com</a>
                        </p>
                        <img src={Mail} alt="icon" className="icon" />
                      </div>
                      <p className="text-center mt-3">or</p>
                      <div className="call-session">
                        <p>Let us call you!</p>
                        <p className="number-cell">
                          <a href="#">Book a slot now</a>
                        </p>
                        <img src={Calendar} alt="icon" className="icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client-logo mt-5 full_show">
                  <p> Secure payment by </p>
                  <img src={VisaImg} alt="" />
                </div>
              </div>

              {/* ===zoom-hover--- */}

              <div
                className="right_certi_absolute full_show"
                id="Zoom_page_hide"
                style={{ display: "none" }}>
                <div className="image-container">
                  <img src={Certi} alt="" />
                  {/* <div class="cursor-overlay"></div>
                                         <div class="preview"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade magnifying_popup_mobile"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="thumbnail-container">
                <img src={Certi} alt="" className="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div
        className="modal fade sign-in-modal test-submit-modal congratulations-popup"
        id="submitTestModalNew"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ready-list">
              <h2><img src={congratsLeft} alt=''/> Congratulations! <img src={CongratsRight} alt=''/></h2>
              <p>
                Your application has been registered
                <br />
                for the Skilled based placement program
              </p>

              <div className="test-box">
                <div className="right-block">
                  <button
                     onClick={() => {
                       navigate('/ProgramsPageTwo');
                      }}
                    className="theme_btn tertiary">
                    Proceed
                    <img src={RightGreen} alt="arrow" className="img-1"/>
                             <img src={SvgArrow} className="partners-img img-2" alt="" />
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade sign-in-modal test-submit-modal congratulations-popup sign_popup"
        id="paymentSucessfull"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ready-list">
              <img src={Paid} alt=''className="paid_icon"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default BasketPaymentTwo;
