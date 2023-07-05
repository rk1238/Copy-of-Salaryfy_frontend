import React, { useState, useEffect } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import arrow from "../img/arrow.png";
import Whitearrow from "../img/white-arrow.png";
import DownGreenArrow from "../img/down-green-arrow.png";
import DownVoiletArrow from "../img/down-voilet-arrow.png";
import Img18 from "../img/icons/img-18.png";
import Img19 from "../img/icons/img-19.png";
import Img20 from "../img/icons/img-20.png";
import Resume from "../img/resume.png";
import Interview from "../img/interview.png";
import Development from "../img/development.png";
import InterviewGreen from "../img/interview-green.png";
import EyeGreen from "../img/eye-green.png";
import DevelopmentGreen from "../img/development-green.png";
import DisableCheck from "../img/disable-check.png";
import slider1 from "../img/slider-1.png";
import slider2 from "../img/slider-2.png";
import slider3 from "../img/slider-3.png";
import slider4 from "../img/slider-4.png";
import slider5 from "../img/slider-5.png";
import slider6 from "../img/slider-6.png";
import Expand from "../img/expand-img.png";
import Call from "../img/icons/call.png";
import GreenCheck from "../img/green-check.png";
import YellowCheck from "../img/yellow-check.png";
import Cross from "../img/cross.png";
import CrossOne from "../img/cross-1.png";
import PlanImg from "../img/plan-img.png";
import Mail from "../img/mail.png";
import Calendar from "../img/icons/calendar.png";
import VisaImg from "../img/visa-img.png";
import Youtube from "../img/youtube.png";
import Slider from "react-slick";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import Nitin_Tongaria from "../img/Nitin_Tongaria.png";
import infosys from "../img/infosys.png";
import Accenture from "../img/Accenture.png";
import Bharat_Kumar from "../img/Bharat_Kumar.png";
import Namrata_Kumar from "../img/Namrata_Kumar.png";
import KPMG from "../img/KPMG.png";

import { useNavigate } from "react-router-dom";
import video from "../img/data_video.mp4";
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

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 320,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
    },
    {
      breakpoint: 1299,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
    },
  ],
};

const DirectPlacement = () => {
  const navigate = useNavigate();
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(0);
  const salary_hike = JSON.parse(window.localStorage.getItem("salary_hike"));
  // const [seconds, setSeconds] = useState(0);

  function enablebutton(event) {
    setButtonEnabled(
      event.target.checked &&
        document.getElementById("invalidCheck3").checked &&
        document.getElementById("invalidCheck2").checked
    );
  }

  function enablebutton2(event) {
    setButtonEnabled(
      event.target.checked &&
        document.getElementById("invalidCheck4").checked &&
        document.getElementById("invalidCheck5").checked
    );
  }

  function enablebutton3(event) {
    setButtonEnabled(
      event.target.checked &&
        document.getElementById("invalidCheck6").checked &&
        document.getElementById("invalidCheck7").checked
    );
  }
  function enablebutton4(event) {
    setButtonEnabled(
      event.target.checked &&
        document.getElementById("invalidCheck8").checked &&
        document.getElementById("invalidCheck9").checked
    );
  }

  // function handleButtonClick() {
  //   if (buttonEnabled) {
  //     if ( hours === 0 && minutes === 0) {
  //       navigate('/DirectPlacementPayment');
  //     } else {
  //       navigate('/DirectPlacementVerification');
  //     }
  //   }
  // }

  function handleButtonClick() {
    if (buttonEnabled) {
      if (hours === 0 && minutes === 0) {
        navigate("/DirectPlacementPayment");
      } else {
        navigate("/DirectPlacementVerification");
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutes === 0) {
        if (hours === 0) {
          clearInterval(interval);
        } else {
          setHours(hours - 1);
          setMinutes(59);
          // setSeconds(59);
        }
      } else {
        setMinutes(minutes - 1);
        // setSeconds(59);
      }
      // else {
      //   setSeconds(seconds - 1);
      // }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, hours, navigate]);

  return (
    <React.Fragment>
      <Navbar />
      <section className="eligiblity-form-sec direct-placement full_show">
        <a className="call-btn-2 expand-button call-btn">
          {" "}
          <img src={Call} alt="arrow" className="expand-img" />
          <img src={Expand} alt="" className="expand-img-2" />
          <div className="d-block">
            <p class="text">Need help?</p>
            <p>Chat or call with our counselor</p>
          </div>
        </a>
        <div className="container custom-container">
          <div className="timeline-pop">
            <ol>
              <li className="active">
                <span className="active-border">1</span>
                <p>Upload documents</p>
              </li>
              <li>
                <span>2</span>
                <p>Enter placement drive</p>
              </li>
              <li>
                <span>3</span>
                <p>Get job</p>
              </li>
            </ol>
          </div>
          <div className="row eligiblity-form-filds direct_placement_route_sec">
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
      </section>

      <section className="client-section full_show">
        <h2 className="main-heading">Wall of fame</h2>
        <div className="client-card-block">
          <Slider {...settings}>
            {/* <div className="sliders-row row client-card-slider"> */}

            <div className="col-lg-12">
              <div
                className=" row
                                       client-card-slide-block">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Nitin_Tongaria} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Nitin Tongaria</h4>
                        <p>
                          <strong>Data Analytics & Big Data Engineer</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper lpa-percentage">
                        <p>Gained</p>
                        <h3>38%</h3>
                        <p>salary hike</p>
                      </div>
                    </div>
                    <p className="line-para">
                      The program offered at the platform was led by
                      best-in-class content delivered by leading faculty and
                      industry leaders in the form of live sessions, case
                      studies, projects, Q&As, work experience, and internships.
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={infosys} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="row
                                       client-card-slide-block">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Bharat_Kumar} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Bharat Kumar</h4>
                        <p>
                          <strong>Data Analytics</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper lpa-percentage">
                        <p>Gained</p>
                        <h3>25%</h3>
                        <p>salary hike</p>
                      </div>
                    </div>
                    <p className="line-para">
                      I got introduced to this platform by my friend, and by
                      far, this is the best platform I have crossed paths with
                      for career enhancement. I had a wonderful teaching
                      experience with the top mentors who are dedicated to
                      equipping students with the top industry skills and
                      knowledge.
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={Accenture} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="row
                                       client-card-slide-block">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Namrata_Kumar} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Namrata Kumar</h4>
                        <p>
                          <strong>Data Analytics & Big Data Engineer</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper lpa-percentage">
                        <p>Gained</p>
                        <h3>81%</h3>
                        <p>salary hike</p>
                      </div>
                    </div>
                    <p className="line-para">
                      For anyone who is looking forward to starting their career
                      as a Data Scientist, this is the best program. The program
                      covers the introduction of the basic concepts associated
                      with the field of Data Scientist. Moreover, and the
                      content was well-paced and accessible.
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={KPMG} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
          </Slider>
        </div>
      </section>

      <section className="well_place_program mt-5 full_show">
        <div className="container custom-container">
          <div className="section-heading">
            <h1>How we’ll place you?</h1>
            <p>
              The student will have the option to move ahead with one of the two
              plans.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="package_select_section">
                <p>With premium package</p>
              </div>
              <div className="skilled-based-packaged-list program-left-wrapper">
                <div class="faq-sec p-0" id="faq">
                  <div class="faq-wrapper">
                    <div
                      class="accordion
                              style-2"
                      id="accordionExample">
                      <div class="card">
                        <div
                          id="heading-one"
                          class="card-header collapsed"
                          data-toggle="collapse"
                          data-target="#collapse0"
                          aria-expanded="false">
                          <h2 className="section-heading">
                            <span>1</span> Making you combat ready
                          </h2>
                          <i class="fal fa-chevron-down"></i>
                        </div>
                        <div
                          id="collapse0"
                          class="collapse "
                          data-parent="#accordionExample"
                          aria-labelledby="heading-one">
                          <div class="card-body">
                            <div class="skilled-based-inner-wrapper">
                              <div class="heading-div">
                                <h6>Career center</h6>
                              </div>
                              <div className="inner-item">
                                <p>
                                  Salaryfy is aimed at the 360° development of
                                  the student with a dedicated career center in
                                  place.
                                </p>
                                <div className="roadmap-success-section ">
                                  <div className="career-wrapper-sec">
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <div className="inner-wrapper">
                                          <img
                                            src={Img18}
                                            className=""
                                            alt=""
                                          />
                                          <p>Personality development</p>
                                          <ul>
                                            <li>Communication Skills</li>
                                            <li>Soft Skills</li>
                                            <li>Behavior Analysis</li>
                                            <li>Etiquettes</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <div className="inner-wrapper">
                                          <img
                                            src={Img19}
                                            className=""
                                            alt=""
                                          />
                                          <p>Skill development</p>
                                          <ul>
                                            <li>Visualization Skills</li>
                                            <li>Analytical Thinking </li>
                                            <li>Negotiation Skills</li>
                                            <li>Decision Making</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <div className="inner-wrapper">
                                          <img
                                            src={Img20}
                                            className=""
                                            alt=""
                                          />
                                          <p>Profile development</p>
                                          <ul>
                                            <li>LinkedIn Enhancing</li>
                                            <li>Resume Building</li>
                                            <li>Brand Presence</li>
                                            <li>Network Building</li>
                                            <li>Self-Promotion</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="center-down-arrow">
                              <img src={DownGreenArrow} alt="arrow" />
                            </div>

                            <div className="job_ready_wrapper job_ready_green_wrapper">
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                  <div className="inner-wrapper">
                                    <img
                                      src={InterviewGreen}
                                      className=""
                                      alt=""
                                    />
                                    <p>Resume building</p>
                                    <ul>
                                      <li>Market Compatible</li>
                                      <li>Short and Elegant</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                  <div className="inner-wrapper">
                                    <img src={EyeGreen} className="" alt="" />
                                    <p>Mock interviews</p>
                                    <ul>
                                      <li>Gap Analysis</li>
                                      <li>Job Fittment Analysis </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                  <div className="inner-wrapper last-child">
                                    <img
                                      src={DevelopmentGreen}
                                      className=""
                                      alt=""
                                    />
                                    <p>Linkedin profile development</p>
                                    <ul>
                                      <li>Highly Attractive</li>
                                      <li>Market Responsive</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div
                          id="heading-two"
                          class="card-header collapsed"
                          data-toggle="collapse"
                          data-target="#collapse1"
                          aria-expanded="false">
                          <h2 className="section-heading blue-heading">
                            <span>2</span> Getting you into battleground
                          </h2>
                          <i class="fal fa-chevron-down"></i>
                        </div>
                        <div
                          id="collapse1"
                          class="collapse "
                          data-parent="#accordionExample"
                          aria-labelledby="heading-two">
                          <div class="card-body">
                            <div className="skilled-based-packaged-list  program-left-wrapper">
                              <div className="job_ready_wrapper">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="inner-wrapper">
                                      <img src={Resume} className="" alt="" />
                                      <p>Placement Drives</p>
                                      <ul>
                                        <li>Top Companies for Recruitment</li>
                                        <li>
                                          Higher Chances of Getting Placed
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="inner-wrapper">
                                      <img
                                        src={Interview}
                                        className=""
                                        alt=""
                                      />
                                      <p>Shortlisting</p>
                                      <ul>
                                        <li>
                                          Your Profile Will be Shortlisted
                                        </li>
                                        <li>Interview Rounds</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="inner-wrapper last-child">
                                      <img
                                        src={Development}
                                        className=""
                                        alt=""
                                      />
                                      <p>Selection</p>
                                      <ul>
                                        <li>
                                          You’ll Get Selected Based on Your
                                          Skills and Resume
                                        </li>
                                        <li>
                                          Onboarding Procedures and Job Brief
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="center-down-arrow">
                                <img src={DownVoiletArrow} alt="arrow" />
                              </div>

                              <div class="skilled-based-inner-wrapper blue-container">
                                <div class="heading-div">
                                  <h6>Offer letter</h6>
                                </div>
                                <div className="inner-item">
                                  <p>
                                    You will receive an offer letter describing
                                    the job norms and details regarding your
                                    onboarding.
                                  </p>
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
              <div className="skilled-based-packaged-list program-left-wrapper program-last-wrapper placement-wrapper">
                <h2 className="section-heading greens-heading">
                  <span>3</span> Winning with a salary hike upto 180%
                </h2>
                <div class="right-block fresher-test">
                  <a href="/SkilledBasedPackageTwo" class="theme_btn tertiary">
                    Get Access
                    <img src={RightGreen} alt="arrow" className="img-1" />
                    <img src={SvgArrow} className="partners-img img-2" alt="" />
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="package_select_section">
                <p>With professional package</p>
              </div>
              <div className="skilled-based-packaged-list program-left-wrapper">
                <div class="faq-sec p-0" id="faq">
                  <div class="faq-wrapper">
                    <div
                      class="accordion
                              style-2"
                      id="accordionExample">
                      <div class="card">
                        <div
                          id="heading-one"
                          class="card-header collapsed"
                          data-toggle="collapse"
                          data-target="#collapse3"
                          aria-expanded="false">
                          <h2 className="section-heading">
                            <span>1</span> Get combat ready
                          </h2>
                        </div>
                      </div>

                      <div class="card">
                        <div
                          id="heading-two"
                          class="card-header collapsed"
                          data-toggle="collapse"
                          data-target="#collapse4"
                          aria-expanded="false">
                          <h2 className="section-heading blue-heading">
                            <span>2</span> With professional package
                          </h2>
                          <i class="fal fa-chevron-down"></i>
                        </div>
                        <div
                          id="collapse4"
                          class="collapse "
                          data-parent="#accordionExample"
                          aria-labelledby="heading-two">
                          <div class="card-body">
                            <div className="skilled-based-packaged-list  program-left-wrapper">
                              <div className="job_ready_wrapper">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="inner-wrapper">
                                      <img src={Resume} className="" alt="" />
                                      <p>Resume building</p>
                                      <ul>
                                        <li>Market Compatible</li>
                                        <li>Short and Elegant</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="inner-wrapper">
                                      <img
                                        src={Interview}
                                        className=""
                                        alt=""
                                      />
                                      <p>Mock interviews</p>
                                      <ul>
                                        <li>Gap Analysis</li>
                                        <li>Job Fittment Analysis </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="inner-wrapper last-child">
                                      <img
                                        src={Development}
                                        className=""
                                        alt=""
                                      />
                                      <p>Linkedin profile development</p>
                                      <ul>
                                        <li>Highly Attractive</li>
                                        <li>Market Responsive</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="center-down-arrow">
                                <img src={DownVoiletArrow} alt="arrow" />
                              </div>

                              <div class="skilled-based-inner-wrapper blue-container">
                                <div class="heading-div">
                                  <h6>Offer letter</h6>
                                </div>
                                <div className="inner-item">
                                  <p>
                                    You will receive an offer letter describing
                                    the job norms and details regarding your
                                    onboarding.
                                  </p>
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
              <div className="skilled-based-packaged-list program-left-wrapper program-last-wrapper placement-wrapper">
                <h2 className="section-heading greens-heading">
                  <span>3</span> Winning with a salary hike upto 30%
                </h2>
                <div class="right-block fresher-test">
                  <a href="/SkilledBasedPackageTwo" class="theme_btn tertiary">
                    Get Access
                    <img src={RightGreen} alt="arrow" className="img-1" />
                    <img src={SvgArrow} className="partners-img img-2" alt="" />
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Add_video_sec full_show">
        <div className="container">
          <div class="section-heading">
            <h1>How it works</h1>
          </div>
          <div class="book-slot-sec">
            <div class="video-box">
              <h2>How it works video here </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ======mobile-view==== */}

      <section className="eligiblity-form-sec direct-placement five_show">
        <a className="call-btn-2 expand-button call-btn">
          {" "}
          <img src={Call} alt="arrow" className="expand-img" />
          <img src={Expand} alt="" className="expand-img-2" />
          <div className="d-block">
            <p class="text">Need help?</p>
            <p>Chat or call with our counselor</p>
          </div>
        </a>

        <a
          className="call-btn-2 expand-button call-btn youtube"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          type="button">
          {" "}
          <img src={Youtube} alt="arrow" className="expand-img" />
          <div className="d-block">{/* <p>Watch Now</p> */}</div>
        </a>
        <div className="container custom-container">
          <div className="timeline-pop">
            <ol>
              <li className="active">
                <span className="active-border">1</span>
                <p>Upload documents</p>
              </li>
              <li>
                <span>2</span>
                <p>Enter placement drive</p>
              </li>
              <li>
                <span>3</span>
                <p>Get job</p>
              </li>
            </ol>
          </div>
          <div className="row eligiblity-form-filds">
            <div className="col-lg-4 col-md-10">
              <div className="increase-chart-graph">
                <div className="">
                  <div className="increase-chart-graph-slider">
                    <h4>Direct placement</h4>
                    {/* <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 hovered_card">
              <h2 className="recommended-heading recommended-heading-1 ">
                Recommended
              </h2>
              <div className="select-plan recommended-plan enrollment-wrapper direct-placement-card mobile_effact_cards mobile_effact_cards_dark">
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
                  <p className="price">
                    <del>₹499</del> ₹0
                  </p>
                  <ul>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Guaranteed job in 1 Month
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Expected Hike up to 80%
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" /> Resume
                      Building
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Free Access to all SalaryFy job fairs and Workshop
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Opportunity to Interact with Industry Experts
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Period follow-up with Companies
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Aid in aligning documents for the company
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      1% Service fee after Job Change
                    </li>
                  </ul>
                  <div class="new-additional-block">
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="invalidCheck6"
                          required=""
                          value=""
                          onClick={enablebutton}
                        />
                        <label class="form-check-label" for="invalidCheck6">
                          I agree to all the Terms and Conditions
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="invalidCheck7"
                          required=""
                          value=""
                          onClick={enablebutton3}
                        />
                        <label class="form-check-label" for="invalidCheck7">
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 hovered_card">
              <div className="select-plan mt-5 recommended-plan enrollment-wrapper direct-placement-card direct-placement-width mobile_effact_cards new_placement_change_wrapper">
                <div className="plan-green-block plan-white-block">
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
                      Guaranteed Job in 3 months
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Expected Hike upto 20%
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Personalized job search
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Resume Building
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Salary negotiation
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      Period follow-up with Companies
                    </li>
                    <li>
                      <img src={GreenCheck} alt="" className="img-one" />
                      1% Service fee after Job Change
                    </li>
                    <li>&nbsp;</li>
                  </ul>
                  <div class="new-additional-block">
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="invalidCheck8"
                          required=""
                          value=""
                        />
                        <label class="form-check-label" for="invalidCheck8">
                          I agree to all the Terms and Conditions
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="invalidCheck9"
                          required=""
                          value=""
                          onClick={enablebutton4}
                        />
                        <label class="form-check-label" for="invalidCheck9">
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-section Client-section_mobile_fixed five_show">
        <h2 className="main-heading">Wall of fame</h2>
        <div className="client-card-block">
        <Slider {...settings}>
            {/* <div className="sliders-row row client-card-slider"> */}

            <div className="col-lg-12">
              <div
                className=" row
                                       client-card-slide-block">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Nitin_Tongaria} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Nitin Tongaria</h4>
                        <p>
                          <strong>Data Analytics & Big Data Engineer</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper lpa-percentage">
                        <p>Gained</p>
                        <h3>38%</h3>
                        <p>salary hike</p>
                      </div>
                    </div>
                    <p className="line-para">
                      The program offered at the platform was led by
                      best-in-class content delivered by leading faculty and
                      industry leaders in the form of live sessions, case
                      studies, projects, Q&As, work experience, and internships.
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={infosys} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="row
                                       client-card-slide-block">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Bharat_Kumar} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Bharat Kumar</h4>
                        <p>
                          <strong>Data Analytics</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper lpa-percentage">
                        <p>Gained</p>
                        <h3>25%</h3>
                        <p>salary hike</p>
                      </div>
                    </div>
                    <p className="line-para">
                      I got introduced to this platform by my friend, and by
                      far, this is the best platform I have crossed paths with
                      for career enhancement. I had a wonderful teaching
                      experience with the top mentors who are dedicated to
                      equipping students with the top industry skills and
                      knowledge.
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={Accenture} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="row
                                       client-card-slide-block">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Namrata_Kumar} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Namrata Kumar</h4>
                        <p>
                          <strong>Data Analytics & Big Data Engineer</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper lpa-percentage">
                        <p>Gained</p>
                        <h3>81%</h3>
                        <p>salary hike</p>
                      </div>
                    </div>
                    <p className="line-para">
                      For anyone who is looking forward to starting their career
                      as a Data Scientist, this is the best program. The program
                      covers the introduction of the basic concepts associated
                      with the field of Data Scientist. Moreover, and the
                      content was well-paced and accessible.
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={KPMG} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
          </Slider>
        </div>
      </section>

      <section className="well_place_program  five_show">
        <div className="container custom-container">
          <div className="section-heading">
            <h1>How we’ll place you?</h1>
            <p>
              The student will have the option to move ahead with one of the two
              plans.
            </p>
          </div>
          <div className="row">
            <div
              className="nav nav-tabs align-items-center"
              id="nav-tab"
              role="tablist">
              <a
                className="nav-item nav-link active package_select_section col-5"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true">
                {" "}
                <p>With premium package</p>
              </a>
              <p className="col-2 m-0">or</p>
              <a
                className="nav-item nav-link package_select_section col-5"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false">
                <p> With professional package</p>
              </a>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="col-lg-6 tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab">
                <div className="skilled-based-packaged-list program-left-wrapper">
                  <div className="faq-sec p-0" id="faq">
                    <div className="faq-wrapper">
                      <div
                        className="accordion
                              style-2"
                        id="accordionExample">
                        <div className="card">
                          <div
                            id="heading-one"
                            className="card-header collapsed"
                            data-toggle="collapse"
                            data-target="#collapse0"
                            aria-expanded="false">
                            <h2 className="section-heading">
                              <span>1</span> Making you combat ready
                            </h2>
                            <i className="fal fa-chevron-down"></i>
                          </div>
                          <div
                            id="collapse0"
                            className="collapse show"
                            data-parent="#accordionExample"
                            aria-labelledby="heading-one">
                            <div className="card-body">
                              <div className="skilled-based-inner-wrapper">
                                <div className="heading-div">
                                  <h6>Career center</h6>
                                </div>
                                <div className="inner-item">
                                  <p>
                                    Salaryfy is aimed at the 360° development of
                                    the student with a dedicated career center
                                    in place.
                                  </p>
                                  <div className="roadmap-success-section ">
                                    <div className="career-wrapper-sec">
                                      <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                          <div className="inner-wrapper">
                                            <img
                                              src={Img18}
                                              className=""
                                              alt=""
                                            />
                                            <p>Personality development</p>
                                            <ul>
                                              <li>Communication Skills</li>
                                              <li>Soft Skills</li>
                                              <li>Behavior Analysis</li>
                                              <li>Etiquettes</li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                          <div className="inner-wrapper">
                                            <img
                                              src={Img19}
                                              className=""
                                              alt=""
                                            />
                                            <p>Skill development</p>
                                            <ul>
                                              <li>Visualization Skills</li>
                                              <li>Analytical Thinking </li>
                                              <li>Negotiation Skills</li>
                                              <li>Decision Making</li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                          <div className="inner-wrapper">
                                            <img
                                              src={Img20}
                                              className=""
                                              alt=""
                                            />
                                            <p>Profile development</p>
                                            <ul>
                                              <li>LinkedIn Enhancing</li>
                                              <li>Resume Building</li>
                                              <li>Brand Presence</li>
                                              <li>Network Building</li>
                                              <li>Self-Promotion</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="center-down-arrow">
                                <img src={DownGreenArrow} alt="arrow" />
                              </div>

                              <div className="job_ready_wrapper job_ready_green_wrapper">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="inner-wrapper">
                                      <img
                                        src={InterviewGreen}
                                        className=""
                                        alt=""
                                      />
                                      <p>Resume building</p>
                                      <ul>
                                        <li>Market Compatible</li>
                                        <li>Short and Elegant</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="inner-wrapper">
                                      <img src={EyeGreen} className="" alt="" />
                                      <p>Mock interviews</p>
                                      <ul>
                                        <li>Gap Analysis</li>
                                        <li>Job Fittment Analysis </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="inner-wrapper last-child">
                                      <img
                                        src={DevelopmentGreen}
                                        className=""
                                        alt=""
                                      />
                                      <p>Linkedin profile development</p>
                                      <ul>
                                        <li>Highly Attractive</li>
                                        <li>Market Responsive</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div
                            id="heading-two"
                            class="card-header collapsed"
                            data-toggle="collapse"
                            data-target="#collapse1"
                            aria-expanded="false">
                            <h2 className="section-heading blue-heading">
                              <span>2</span> Getting you into battleground
                            </h2>
                            <i class="fal fa-chevron-down"></i>
                          </div>
                          <div
                            id="collapse1"
                            class="collapse show"
                            data-parent="#accordionExample"
                            aria-labelledby="heading-two">
                            <div class="card-body">
                              <div className="skilled-based-packaged-list  program-left-wrapper">
                                <div className="job_ready_wrapper">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                      <div className="inner-wrapper">
                                        <img src={Resume} className="" alt="" />
                                        <p>Resume building</p>
                                        <ul>
                                          <li>Market Compatible</li>
                                          <li>Short and Elegant</li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                      <div className="inner-wrapper">
                                        <img
                                          src={Interview}
                                          className=""
                                          alt=""
                                        />
                                        <p>Mock interviews</p>
                                        <ul>
                                          <li>Gap Analysis</li>
                                          <li>Job Fittment Analysis </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                      <div className="inner-wrapper last-child">
                                        <img
                                          src={Development}
                                          className=""
                                          alt=""
                                        />
                                        <p>Linkedin profile development</p>
                                        <ul>
                                          <li>Highly Attractive</li>
                                          <li>Market Responsive</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="center-down-arrow">
                                  <img src={DownVoiletArrow} alt="arrow" />
                                </div>

                                <div class="skilled-based-inner-wrapper blue-container">
                                  <div class="heading-div">
                                    <h6>Offer letter</h6>
                                  </div>
                                  <div className="inner-item">
                                    <p>
                                      You will receive an offer letter
                                      describing the job norms and details
                                      regarding your onboarding.
                                    </p>
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
                <div className="skilled-based-packaged-list program-left-wrapper program-last-wrapper placement-wrapper">
                  <h2 className="section-heading greens-heading">
                    <span>3</span> Winning with a salary hike upto 180%
                  </h2>
                  <div class="right-block fresher-test">
                    <a href="#" class="theme_btn tertiary">
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
              <div
                className="col-lg-6 tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab">
                <div className="skilled-based-packaged-list program-left-wrapper">
                  <div class="faq-sec p-0" id="faq">
                    <div class="faq-wrapper">
                      <div
                        class="accordion
                              style-2"
                        id="accordionExample">
                        <div class="card">
                          <div
                            id="heading-one"
                            class="card-header collapsed"
                            data-toggle="collapse"
                            data-target="#collapse3"
                            aria-expanded="false">
                            <h2 className="section-heading">
                              <span>1</span> Get combat ready
                            </h2>
                          </div>
                        </div>

                        <div class="card">
                          <div
                            id="heading-two"
                            class="card-header collapsed"
                            data-toggle="collapse"
                            data-target="#collapse4"
                            aria-expanded="false">
                            <h2 className="section-heading blue-heading">
                              <span>2</span> With professional package
                            </h2>
                            <i class="fal fa-chevron-down"></i>
                          </div>
                          <div
                            id="collapse4"
                            class="collapse show"
                            data-parent="#accordionExample"
                            aria-labelledby="heading-two">
                            <div class="card-body">
                              <div className="skilled-based-packaged-list  program-left-wrapper">
                                <div className="job_ready_wrapper">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                      <div className="inner-wrapper">
                                        <img src={Resume} className="" alt="" />
                                        <p>Resume building</p>
                                        <ul>
                                          <li>Market Compatible</li>
                                          <li>Short and Elegant</li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                      <div className="inner-wrapper">
                                        <img
                                          src={Interview}
                                          className=""
                                          alt=""
                                        />
                                        <p>Mock interviews</p>
                                        <ul>
                                          <li>Gap Analysis</li>
                                          <li>Job Fittment Analysis </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                      <div className="inner-wrapper last-child">
                                        <img
                                          src={Development}
                                          className=""
                                          alt=""
                                        />
                                        <p>Linkedin profile development</p>
                                        <ul>
                                          <li>Highly Attractive</li>
                                          <li>Market Responsive</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="center-down-arrow">
                                  <img src={DownVoiletArrow} alt="arrow" />
                                </div>

                                <div class="skilled-based-inner-wrapper blue-container">
                                  <div class="heading-div">
                                    <h6>Offer letter</h6>
                                  </div>
                                  <div className="inner-item">
                                    <p>
                                      You will receive an offer letter
                                      describing the job norms and details
                                      regarding your onboarding.
                                    </p>
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
                <div className="skilled-based-packaged-list program-left-wrapper program-last-wrapper placement-wrapper">
                  <h2 className="section-heading greens-heading">
                    <span>3</span> Winning with a salary hike upto 180%
                  </h2>
                  <div class="right-block fresher-test">
                    <a href="SkilledBasedPackageTwo" class="theme_btn tertiary">
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
        </div>
      </section>

      <section className=" direct-placement five_show well_place_mobile_slider">
        <div className="container custom-container">
          <div className="row ">
            <div className="col-lg-4 col-md-10">
              <div className="increase-chart-graph">
                <Slider {...settings2}>
                  <div className="col-lg-12">
                    <div className="increase-chart-graph-slider">
                      <p className="main-para">
                        3 easy steps to
                        <br /> getting you placed!
                      </p>

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
            </div>
          </div>
        </div>
      </section>

      <section className="landing-banner basket-banner five_show well_place_having_dought">
        <div className="container ">
          <div className="row basket-row">
            <div className="col-lg-4 col-md-7 col-sm-10 col-10 m-auto">
              <div className="client-logo">
                <p>Trusted By 400+ Hiring Partners</p>
                <img src={PlanImg} alt="" />
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
          </div>
        </div>
      </section>

      {/* =====video-modal==== */}

      <div
        class="modal fade moda_video_sec"
        id="exampleModalCenter"
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
            <div class="modal-body">
              <div className="video-box">
                <div className="video-container">
                  <video controls src={video} className="video" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default DirectPlacement;
