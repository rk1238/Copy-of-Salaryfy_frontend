import React, { useState, useEfffect } from "react";
import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap from "../img/fresher-eligibility-images/road-map-2.png";
import arrow from "../img/fresher-eligibility-images/arrow.png";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import PlanImg from "../img/plan-img.png";
import GreenCheck from "../img/green-check.png";
import DisableCheck from "../img/disable-check.png";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import Whitearrow from "../img/white-arrow.png";

const EligibilityForm1 = () => {
    var settings2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings2: {
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings2: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings2: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const [hours, setHours] = useState(24);
      const [minutes, setMinutes] = useState(0);
  const navigate  = useNavigate()
  const [age, setAge] = React.useState("");
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false);

  function handleButtonClick() {
    if (buttonEnabled) {
      if (hours === 0 && minutes === 0) {
        navigate("/DirectPlacementPayment");
      } else {
        navigate("/DirectPlacementUploadDocsFresherInstant");
      }
    }
  }

  function enablebutton2(event) {
    setButtonEnabled(
      event.target.checked &&
        document.getElementById("invalidCheck4").checked &&
        document.getElementById("invalidCheck5").checked
    );
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };

  function enablebutton(event) {
    setButtonEnabled(
      event.target.checked &&
        document.getElementById("invalidCheck3").checked &&
        document.getElementById("invalidCheck2").checked
    );
  }

  const [eligibilityForm, setEligibilityForm] = useState({
    name: null,
    email: null,
    phone_number: null,
    education: null,
    stream: null,
    university: null,
    percentage: null,
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setEligibilityForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const nextStep = ()=>{
    navigate("/fresher-eligibility-instant-skill")
  }

  return (
    <div className="container">
      <section>
        {/* This container is used only for extra large screen */}
        <div className="d-none d-xl-block">
          <div className="eligibility-fresher-container">
            <div className="eligibility-fresher-left-side">
              <h2>Fresher</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side">
              <div className="eligibility-fresher-right-side-row">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>

        {/* This container is used only for  large screen */}
        <div className="d-none d-lg-block d-xl-none">
          <div className="eligibility-fresher-container">
            <div className="eligibility-fresher-left-side">
              <h2>Fresher</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side">
              <div className="eligibility-fresher-right-side-row">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>

        {/* This container is used only for  medium screen */}
        <div className="d-none d-md-block d-lg-none">
          <div className="eligibility-fresher-container-medium">
            <div className="eligibility-fresher-left-side-medium">
              <h2>Fresher</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side-medium">
              <div className="eligibility-fresher-right-side-row-medium">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>

        {/* This container is used only for mobile screen */}
        <div className="d-sm-block d-md-none">
          <div className="eligibility-fresher-container-small">
            <div className="eligibility-fresher-left-side-small">
              <h2>Fresher</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side-small">
              <div className="eligibility-fresher-right-side-row-small">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="roadMap-section">
        <img src={roadMap} alt="road-map" />
      </section>

      <div style={{width:'100%',margin:'50px 0px'}} className="row eligiblity-form-filds direct_placement_route_sec">
            <div className="col-lg-4 col-md-10">
              <div className="increase-chart-graph">
                <div className="increase-chart-graph-slider">
                  <h4>
                    Direct <br />
                    placement
                  </h4>
                </div>
                <Slider {...settings2}>
                  <div className="col-lg-12">
                    <div className="increase-chart-graph-slider">
                      <p>3 easy steps to getting you placed!</p>
                      <ul>
                        <li>
                          <span>1</span> <p>Select course & plan</p>
                        </li>
                        <li>
                          <span>2</span> <p>Join your class & career center</p>
                        </li>
                        <li>
                          <span>3</span> <p>Get your dream job!</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="increase-chart-graph-slider">
                      <p className="placement-para">
                        A journey that helps you switch your job, hassle-free at
                        the best possible salary hike.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="increase-chart-graph-slider">
                      <div className="placement-content-wrapper">
                        <ul>
                          <li>
                            <i class="fa fa-circle" aria-hidden="true"></i>{" "}
                            Dedicated Placement Manager
                          </li>
                          <li>
                            <i class="fa fa-circle" aria-hidden="true"></i>{" "}
                            Personalized Job Recommendation
                          </li>
                          <li>
                            <i class="fa fa-circle" aria-hidden="true"></i>{" "}
                            Seamless Job Switch
                          </li>
                          <li>
                            <i class="fa fa-circle" aria-hidden="true"></i>{" "}
                            Salary Negotiator
                          </li>
                          <li>
                            <i class="fa fa-circle" aria-hidden="true"></i>{" "}
                            Timely updates
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="eligiblity-block-2">
                <p>Trusted By 400+ Hiring Partners</p>
                <img src={PlanImg} />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3 col-md-6 col-sm-6 hovered_card hovered_card_placement">
              <h2
                className="recommended-heading recommended-heading-1 direct-placement-heading hovered_card_bg"
                id="">
                Recommended
              </h2>
              <div className="select-plan recommended-plan enrollment-wrapper direct-placement-card direct-premium-card">
                <div className="plan-green-block plan-gray-block">
                  <p>
                    <span>Premium</span>
                  </p>
                  <p className="price-tag">Placement duration: 1 month</p>
                </div>
                <div className="plan-transprant-block">
                  <p>
                    <span className="offer">
                      Offer Valid for {hours.toString().padStart(2, "0")}:
                      {minutes.toString().padStart(2, "0")} hr
                    </span>
                  </p>
                  {hours === 0 && minutes === 0 ? (
                    <p className="price">₹499</p>
                  ) : (
                    <p className="price">
                      <del>₹499</del> ₹0
                    </p>
                  )}
                  <ul>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Guaranteed job in 1 Month
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Expected Hike up to 80%
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />{" "}
                      Resume Building
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Free Access to all SalaryFy job fairs and Workshop
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Opportunity to Interact with Industry Experts
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Period follow-up with Companies
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Aid in aligning documents for the company
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      1% Service fee after Job Change
                    </li>
                  </ul>
                  <div class="new-additional-block">
                    {/* <div class="additional-heading">
                      <h6>Additional services</h6>
                    </div> */}
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="invalidCheck2"
                          required=""
                          value=""
                          onClick={enablebutton}
                        />
                        <label class="form-check-label" for="invalidCheck2">
                          I agree to all the Terms and Conditions
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="invalidCheck3"
                          required=""
                          value=""
                          onClick={enablebutton}
                        />
                        <label class="form-check-label" for="invalidCheck3">
                          I agree to pay 1% of CTC to salaryfy on successful job
                          switch
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="right-block w-100">
                      <a
                        disabled={!buttonEnabled}
                        onClick={handleButtonClick}
                        className="theme_btn tertiary">
                        Get Access
                        <img src={RightGreen} alt="arrow" className="img-1" />
                        <img
                          src={SvgArrow}
                          className="partners-img img-2"
                          alt=""
                        />
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 hovered_card hovered_card_placement">
              <div className="select-plan mt-3 recommended-plan enrollment-wrapper direct-placement-card direct-placement-card-2 direct-placement-width direct-professional-card">
                <div className="plan-green-block plan-gray-block">
                  <p>
                    <span>Professional</span>
                  </p>
                  <p className="price-tag">Duration: upto 3 months</p>
                </div>
                <div className="plan-transprant-block">
                  {/* <p>
                    <span className="offer">Limited time offer</span>
                  </p> */}
                  <p className="price">₹0</p>
                  <ul>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Guaranteed Job in 3 months
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Expected Hike upto 20%
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Personalized job search
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Resume Building
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Salary negotiation
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      Period follow-up with Companies
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      <img src={DisableCheck} alt="" className="img-two" />
                      1% Service fee after Job Change
                    </li>
                    <li>&nbsp;</li>
                  </ul>
                  <div class="new-additional-block">
                    {/* <div class="additional-heading">
                      <h6>Additional services</h6>
                    </div> */}
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="invalidCheck4"
                          required=""
                          value=""
                          onClick={enablebutton2}
                        />
                        <label class="form-check-label" for="invalidCheck4">
                          I agree to all the Terms and Conditions
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="invalidCheck5"
                          required=""
                          value=""
                          onClick={enablebutton2}
                        />
                        <label class="form-check-label" for="invalidCheck5">
                          I agree to pay 1% of CTC to salaryfy on successful job
                          switch
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="right-block w-100">
                      <a
                        disabled={!buttonEnabled}
                        onClick={handleButtonClick}
                        className="theme_btn tertiary">
                        Get Access
                        <img src={arrow} alt="arrow" className="green-arrow" />
                        <img
                          src={Whitearrow}
                          alt="arrow"
                          className="white-arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default EligibilityForm1;
