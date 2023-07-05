import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

import move from "../img/icons/move.png";
import Call from "../img/icons/call.png";
import Stars from "../img/icons/stars.png";
import BtnArrow from "../img/btn-arrow.png";
import Arrow from "../img/arrow.png";
import Img9 from "../img/icons/img-9.png";
import Process from "../img/icons/process.png";
import Img16 from "../img/icons/img-16.png";
import Expand from "../img/expand-img.png";

const PaymentModelPaapNewLanding = () => {
  return (
    <React.Fragment>
      <Navbar />

      <section className="eligiblity-form-sec">
        <a href="/CoursePagePgpManagementDs" className="move-btn">
          <img src={move} alt="arrow" />
          Select plan
        </a>
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
                <p>Eligiblity</p>
              </li>
              <li className="active">
                <span className="active-border">2</span>
                <p>Select course</p>
              </li>
              <li>
                <span>3</span>
                <p>Select plan</p>
              </li>

              <li>
                <span>4</span>
                <p>Schedule call</p>
              </li>
            </ol>
          </div>
          <div className="row eligiblity-form-filds align-items-center">
            <div className="col-lg-6">
              <div className="eligiblity-filds-block-1">
                <div className="eligiblity-block">
                  <h1 className="mb-2">Pay after placement plan (PAPP)</h1>

                  <img src={Stars} className="py-3" alt="" /> 

                  <div className="mt-4">
                    <img src={Img16} className="py-3" alt="" />
                  </div>
                </div>
                <div className="eligiblity-block-2">
                  <a
                    href="/PaymentModelPaapNewLandingTwo"
                    className="programs-btn program-btn-1
                                    ">
                    Enroll now{" "}
                    <img src={BtnArrow} alt="arrow" className="arrow" />
                    <img src={Arrow} alt="arrow" className="arrow-1" />
                    <span></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="">
                <img
                  src={Img9}
                  className="py-3
                                w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan-steps-wrapper">
        <div className="container">
          <div className="center-block">
            <ul>
              <li>5</li>
              <li>Steps to getting you your dream job!</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="process-img">
            <img
              src={Process}
              className="py-3
                w-100"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default PaymentModelPaapNewLanding;
