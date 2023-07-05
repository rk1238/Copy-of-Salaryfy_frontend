// import React from "react";
import React, { useState, useEffect } from "react";

import Navbar from "../common/navbar";
import Footer from "../common/footer";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import PlanImg from "../img/plan-img.png";
import Check from "../img/check.png";
// import View from "../img/view.png";
import Back from "../img/back.png";
import warning from "../img/warning.png";
import PlanLogo from "../img/plan-logo.png";
import dCall from "../img/icons/d-call.png";
import Calendar from "../img/icons/calendar.png";
import {useParams } from 'react-router-dom';
import Taj from "../img/taj.png";
import { useNavigate } from "react-router-dom";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";

import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap from "../img/fresher-eligibility-images/road-map-2.png";

const PaymentModelPage = () => {
  const params = useParams();
  const course_id = [params.id];
  const [coursesDetail, setCoursesDetail] = useState("");
  const Token = JSON.parse(window.localStorage.getItem("token"));

  const navigate = useNavigate();
  window.localStorage.setItem('course_id', JSON.stringify(course_id))
  useEffect(() => {
    // Get courses through Api
    let Api = ApiBaseUrl+"course-details/" + course_id;
    const fetchCourses = async (url) => {
      try {
        const res = await fetch(Api, {
          headers: {
            "x-access-token": Token,
          },
        });
        const data = await res.json();
        setCoursesDetail(data.course);
        //    isLoading=false;
      } catch (error) {}
    };
    fetchCourses(Api);
  }, [Token]); 
  return (
    <React.Fragment>
      <Navbar />
      <section className="eligiblity-form-sec payment_model_main_wrapper">
        <div className="container ">
          {/* <div className="timeline-pop">
            <ol>
              <li className="active">
                <span className="active-border">1</span>
                <p>Eligiblity</p>
              </li>
              <li className="active">
                <span className="active-border">2</span>
                <p>Select course</p>
              </li>
              <li className="active">
                <span className="active-border">3</span>
                <p>Select plan</p>
              </li>
              <li>
                <span>4</span>
                <p>Schedule call</p>
              </li>
            </ol>
          </div> */}


<div style={{marginTop:'-150px'}}>
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
</div>
         



          <div className="row eligiblity-form-filds">
            <div className="col-lg-4">
              <div className="eligiblity-filds-block-1">
                <div className="eligiblity-block">
                  <h1 className="mb-2">Mode of enrollment</h1>
                  <p>You are enrolling for the <b>“{coursesDetail.name}”</b></p>
                </div>
                <div className="eligiblity-block-2">
                  <p>Trusted By 400+ Hiring Partners</p>
                  <img src={PlanImg} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-6 plan_view_mobile" >
              
              <div className="select-plan select-plan-1 recommended-plan enrollment-wrapper">
                <div className="plan-green-block">
                  <p>
                    <span>PAY AFTER PLACEMENT PLAN</span>
                  </p>
                  <p className="price">₹0</p>
                  <p>(Based on Merit Test)</p>
                </div>
                <div className="plan-transprant-block">
                  <ul>
                    <li>
                      <img src={Check} alt="" />
                      Income sharing Agreement (ISA)
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      ISA fee is 10-12% of annual package (post placement)
                    </li>
                    <li>
                      <img src={Check} alt="" /> 
                      Payment flexibility: Up to 24 months (post placement)
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      1 to 1 live doubts classes
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      Batch wise classes
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      Dedicated batch coordinator
                    </li>
                    <li>
                      <img src={Check} alt="" /> 
                      100% job guarantee
                    </li>
                    
                  </ul>
                  <div className="buttons">
                    <div className="w-100">
                      <p
                        href=""
                        onClick={() =>
                          navigate(
                            "/PaymentModelPaapNewLandingTwo/" + course_id
                          )
                        }
                        className="view-plan transparent"
                      >
                        <i className="fa fa-external-link" aria-hidden="true"></i>{" "}
                        View full details
                      </p>
                    </div>
                    <div className="w-100">
                      <p href="/DisclaimerPage"
                      onClick={()=>{
                        navigate("/fresher-skill-disclaimer")
                      }}
                        className="theme_btn tertiary">
                        Proceed
                        <img src={RightGreen} alt="arrow" className="img-1"/>
                        <img src={SvgArrow} className="partners-img img-2" alt="" />
                        <span></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 plan_view_mobile">

              <div className="select-plan select-plan-2 recommended-plan enrollment-wrapper  premium-plan-card">
              <img src={Taj} alt=""  className="premium-taj"/>
                <div className="plan-green-block">
                  <p>
                    <span>PREMIUM PLAN</span>
                  </p>
                  <p className="price">₹1,00,000</p>
                  <p>(Scholarship available)</p>
                </div>
                <div className="plan-transprant-block">
                  <ul>
                    <li>
                      <img src={Check} alt="" />
                      No Income Sharing Agreement (ISA)
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      Exclusive one-to-one Class
                    </li>
                    <li>
                      <img src={Check} alt="" /> 
                      Dedicated Faculty
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      Dedicated Batch Mentor
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      Study at your own pace
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      Increases 80% chances of higher packages
                    </li>
                    <li>
                      <img src={Check} alt="" /> 
                      Lifetime access to the course content
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      One-time Program fee
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      Payment Flexibilty: NBFC/ Credit Cards (3-24 months)
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      100% Job Guarantee
                    </li>
                    
                  </ul>
                  <div className="buttons">
                    <div className="w-100">
                      <p
                        href="#"
                        className="view-plan transparent"
                      >
                        <i className="fa fa-external-link" aria-hidden="true"></i>{" "}
                        View full details
                      </p>
                    </div>
                    <div className="w-100">
                      <button
                        className="theme_btn tertiary"
                        type="button"
                        data-toggle="modal"
                        data-target=".submitTestModal"
                      >
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
          <div className="plan-logo-block">
            <img src={PlanLogo} className="plan-logo" alt="" />
          </div>
        </div>
      </section>

      <section className="having_dought_mobile five_show">
        <div className="container">
            <div className="heading_section">
               <h5>Having doubts?</h5>
               <p>Get in touch with our counselor</p>
            </div>
          <div className="row">
            <div className="col-lg-5 col-5 full-inner full_inner_1">
              <div className="inner_wrapper full_inner_1">
                <p>Call us now!</p>
                <img src={dCall} alt="icon" className="icon" />
                <p>
                  <strong>+91 99882 27778</strong>
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-2  absolute_div">
              <div className="inner_wrapper ">
                <p>or</p>
              </div>
            </div>
            <div className="col-lg-5 col-5 full-inner ">
              <div className="inner_wrapper full_inner_1">
                <p>Let us call you!</p>
                <img src={Calendar} alt="icon" className="icon" />
                <p>
                  <strong>Book a slot now</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    

<div className="modal  submitTestModal warning-msg" id="" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <p> Sorry, this option is unavailable.</p>
      </div>
     
    </div>
  </div>
</div>

    <Footer />
    </React.Fragment>
  );
};

export default PaymentModelPage;
