import React, { useState } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

import selectIcon from "../img/select-icon.png";
import arrow from "../img/arrow.png";
import Mail from "../img/mail.png";
import Paid from "../img/paid.gif";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";

import Calendar from "../img/icons/calendar.png";
import Expand from "../img/expand-img.png";
import Call from "../img/icons/call.png";
import VisaImg from "../img/visa-img.png";
import congratsLeft from "../img/congrats-left.png";
import CongratsRight from "../img/congrats-right.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";

const DirectPlacementPayment = () => {
  let navigate = useNavigate();
  const Token = JSON.parse(window.localStorage.getItem("token"));
  const [payment, setPayment] = useState({
    price: 499,
    name: "Salaryfy",
  });
  const [buttonEnabled, setButtonEnabled] = useState(false);

  function enablebutton(event) {
    setButtonEnabled(event.target.checked);
  }

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
          const paymentSuccessModal = document.getElementById("paymentSucessfull");
          if (paymentSuccessModal) {
            paymentSuccessModal.classList.add("show");
            paymentSuccessModal.style.display = "block";

            setTimeout(() => {
              paymentSuccessModal.classList.remove("show");
              paymentSuccessModal.style.display = "none";

              const submitTestModal = document.getElementById("submitTestModal"); 
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
    const checkbox1 = document.getElementById("defaultCheck1");
    const checkbox2 = document.getElementById("defaultCheck2");
    const checkbox3 = document.getElementById("defaultCheck3");
    if (
      buttonEnabled &&
      checkbox1.checked &&
      checkbox2.checked &&
      checkbox3.checked
    ) {
      try {
        const orderUrl = ApiBaseUrl+"payment/orders";
        const config = {
          headers: {
            "x-access-token": Token,
          },
        };
        const { data } = await axios.post(
          orderUrl,
          { amount: payment.price, type: "1" },
          config
        );
        console.log({ data });
        initPayment(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  // const props = {
  //   width: 498,
  //   height: 325,
  //   zoomWidth: 900,
  //   img: Certi
  // };

  return (
    <React.Fragment>
      <Navbar />

      <section className="landing-banner basket-banner certificate-section-hover direct_payment">
        <a className="call-btn-2 expand-button call-btn">
          {" "}
          <img src={Call} alt="arrow" className="expand-img" />
          <img src={Expand} alt="" className="expand-img-2" />
          <div className="d-block">
            <p class="text">Need help?</p>
            <p>Chat or call with our counselor</p>
          </div>
        </a>
        <div className="container ">
          <div className="row basket-row">
            <div className="col-lg-7">
              <div className="basket-table">
                <div className="special-inclusions">
                  <div className="heading">
                    <p>You have opted for</p>
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
                                        <p> 60% Minimum salary hike</p>
                                      </li>
                                      <li>
                                        <p>Get into placement drives</p>
                                      </li>
                                      <li>
                                        <p>Resume building</p>
                                      </li>
                                      <li>
                                        <p>Soft skills development</p>
                                      </li>
                                      <li>
                                        <p>Interpersonal skills development</p>
                                      </li>
                                      <li>
                                        <p>Mock interviews</p>
                                      </li>
                                    </ul>
                                <div className="new-additional-block five_show">
                                      <div className="additional-heading ">
                                        <h6>Additional services</h6>
                                      </div>

                                      <div class="form-group ">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="invalidCheck2"
                                            onClick={enablebutton}
                                          />
                                          <label
                                            class="form-check-label"
                                            for="invalidCheck2">
                                            Pointer here subtext lorem ipsum
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="invalidCheck2"
                                            onClick={enablebutton}
                                          />
                                          <label
                                            class="form-check-label"
                                            for="invalidCheck2">
                                            Pointer here subtext lorem ipsum
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="invalidCheck2"
                                            onClick={enablebutton}
                                          />
                                          <label
                                            class="form-check-label"
                                            for="invalidCheck2">
                                            Pointer here subtext lorem ipsum
                                          </label>
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
                            <h4>₹{payment.price}</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="new-additional-block new-additional-block1 full_show mb-3">
                      <div class="form-group">
                        <div className="left_checkbox">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="defaultCheck1"
                              onClick={enablebutton}
                            />
                            <label class="form-check-label" for="invalidCheck2">
                              I am flexible to work location
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div className="left_checkbox">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="defaultCheck2"
                              onClick={enablebutton}
                            />
                            <label class="form-check-label" for="invalidCheck2">
                              I have read all the T&C
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div className="left_checkbox">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="defaultCheck3"
                              onClick={enablebutton}
                            />
                            <label class="form-check-label" for="invalidCheck2">
                              I agree to pay 1% of my annual CTC post a
                              successfull job change.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-block">
                     
                      <button
                        onClick={handlePayment}
                        id="buttonClick"
                        className="theme_btn tertiary"
                        readonly={!buttonEnabled}
                      >
                        Access now
                        <img src={RightGreen} alt="arrow" className="img-1"/>
                             <img src={SvgArrow} className="partners-img img-2" alt="" />
                        <span></span>
                      </button>

                      {/* <button
                        data-toggle="modal"
                        data-target="#paymentSucessfull"
                        className="theme_btn tertiary">
                        Buy now
                        <img src={arrow} alt="arrow" />
                        <span></span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 d-none-hide-eleven"></div>
            <div className="col-lg-4 col-md-7 col-sm-10 col-12 m-auto">
              <div className="client-logo mt-5 five_show">
                <p> Secure payment by </p>
                <img src={VisaImg} alt="" />
              </div>
              <div className="summary-table mb-5 order-lg-1 order-md-1 order-sm-1 order-2">
                <h2 className="text-center mb-4">Having doubts?</h2>
                <div className="table-responsive-xl special-inclusions-table">
                  <div className="having-doughts-sec">
                    <p className="text-center"> Get in touch with our counselor</p>
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
          </div>
        </div>
      </section>


      <div
        class="modal fade sign-in-modal test-submit-modal congratulations-popup"
        id="submitTestModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body ready-list">
              <h2><img src={congratsLeft} alt=''/> Congratulations! <img src={CongratsRight} alt=''/></h2>
              <p>
                Your application has been registered
                <br />
                for the Direct placement program
              </p>

              <p class="message ">Our representative will get back you!</p>
              <div class="test-box">
                <div className="right-block">
                  <button
                     onClick={() => {
                       navigate('/DirectPlacementVerification');
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


{/* ====payment-modal==== */}
      <div
        class="modal fade sign-in-modal test-submit-modal congratulations-popup sign_popup"
        id="paymentSucessfull"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body ready-list">
              <img src={Paid} alt=''className="paid_icon"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default DirectPlacementPayment;
