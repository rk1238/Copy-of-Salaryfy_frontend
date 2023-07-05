import React, { useState } from "react";
import roadMap from "../img/fresher-eligibility-images/road_map_3.png";
import lenskartCover from "../img/lenskart_cover.png";
import lenskartProfile from "../img/lenskart.png";
import getHired from "../img/hired.png";
import placementDetailsFirstStep from "../img/placement_details_step3.png";
import placementDetailsIcon from "../img/placement_details_first_icon.png";
import StarRatings from "react-star-ratings";
import gmeet from "../img/gmeet.png";
import Modal from "react-bootstrap/Modal";
import modalTop from "../img/modal_top.png";
import lenskart from "../img/lenskart.png";
import dashboard from "../img/dashboard.png";
import { Link } from "react-router-dom";
import backButton from "../img/back_button.png";
import next from "../img/next.png";
import thumb from '../img/thumb.png'

const FresherPlacementDetailsFirstStep = () => {
  const changeRating = () => {};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        className="fresher_placement_details_modal_container"
        style={{ padding: "0px" }}
      >
        <Modal.Body style={{ padding: "0px" }}>
          <div className="fresher_placement_details_final_modal_container">
            <img style={{ width: "100vw" }} src={modalTop} alt="modal" />
            <p className="fresher_placement_details_final_modal_content">
              Your interview for
            </p>
            <img src={lenskart} alt="lenskart" />
            <p className="fresher_placement_details_final_modal_content">
              has been successfully scheduled on{" "}
            </p>
            <p
              style={{ marginLeft: "20px" }}
              className="placement_details_date_and_time"
            >
              On Sunday, 13 Dec 2023 , 4:00 PM
            </p>
            <Link to="/user-dashboard">
              <img
                style={{ cursor: "pointer" }}
                src={dashboard}
                alt="dashboard"
              />
            </Link>

            <p
              style={{ cursor: "pointer" }}
              className="placement_details_final_modal_view_more"
            >
              View more Jobs
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <section className="roadMap-section">
        <img
          style={{ margin: "5px auto", width: "100%" }}
          src={roadMap}
          alt="road-map"
        />
      </section>
      <section>
        <div className="fresher_placement_details_cover">
          <div
            style={{
              backgroundImage: `url(${lenskartCover})`,
              position: "relative",
              backgroundSize: "cover",
              width: "100%",
              height: "138px",
              backgroundColor: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.14) 21.88%, rgba(0, 0, 0, 0.41) 50%, rgba(0, 0, 0, 0.62) 69.27%, #000000 100%)`,
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "color",
            }}
            className="fresher_placement_details_cover_image"
          >
            <img
              className="fresher_placement_details_profile_icon"
              src={lenskartProfile}
              alt="lenskart"
            />
            <div className="fresher_placement_details_cover_container">
              <p className="fresher_placement_details_job_interview">
                Interview on
              </p>
              <p className="fresher_placement_details_job_date">04 May 2023</p>
              <Link to="/fresher-placement-details-first-step">
                <img src={getHired} alt="get-hired" />
                </Link>
                
            </div>
          </div>
        </div>
        <div className="fresher_placement_details_profile_bottom_container">
          <p className="fresher_placement_details__profile_title">Lenskart</p>
          <div>
            <h3 className="fresher_placement_details__profile_job_title">
              Sales Associates (Frontend Sales)
            </h3>
            <div className="fresher_placement_details_container_flex">
              <div className="fresher_placement_job_location_container">
                <p className="fresher_placement_job_location">Location:</p>
                <p className="fresher_placement_job_location_second">
                  &nbsp; Bangalore
                </p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="fresher_placement_job_salary_container">
                <p className="fresher_placement_job_salary">Starting Salary:</p>
                <p className="fresher_placement_job_salary_second">
                  &nbsp; Upto 4LPA
                </p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="fresher_placement_job_type_container">
                <p className="fresher_placement_job_type">Job Type:</p>
                <p className="fresher_placement_job_type_second">
                  {" "}
                  &nbsp;On-Site
                </p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="fresher_placement_job_posts_container">
                <p className="fresher_placement_job_posts">No. of Posts:</p>
                <p className="fresher_placement_job_posts_second"> &nbsp;38</p>
              </div>
            </div>
          </div>
        </div>
        <div className="placement_details_instruction_first_step_container">
          <p className="placement_details_instruction">
            Please follow the below steps to Submit your Application{" "}
          </p>
          <img src={placementDetailsFirstStep} alt="placement-details" />
          <h3
            style={{ marginLeft: "20px", marginBottom: "0px" }}
            className="placement_details_instruction_company_screening_question"
          >
            Interview details
          </h3>
          <br />
          <p
            style={{ marginLeft: "20px" }}
            className="placement_details_date_and_time"
          >
            On Sunday, 13 Dec 2023 , 4:00 PM
          </p>

          <p
            style={{ marginLeft: "20px" }}
            className="placement_details_instruction"
          >
            Please confirm your availability in google calender
          </p>
          {/* <img src={gmeet} alt="gmeet" /> */}
          <div style={{margin:'20px'}}>
            <h2 className="placement_details_interview_content_title">An interview is a two-way process. The company is evaluating your suitability for the job, and you are evaluating the company as a potential employer. Keep these instructions in mind to ace your interview and secure your dream job.</h2>
      <h3 className="placement_details_interview_content_subtitle">Instructions for the Interview:</h3>
      <ol className="placement_details_interview_ordered_list">
        <li>Dress professionally and according to the company's culture and dress code.</li>
        <li>Be punctual for the interview, whether in-person or virtual.</li>
        <li>Bring copies of relevant documents and be prepared to answer questions about your qualifications and achievements.</li>
        <li>Speak confidently and highlight your strengths while maintaining eye contact.</li>
        <li>Send a thank-you email or message after the interview to show your appreciation and enthusiasm for the opportunity.</li>
      </ol>
      <div  style={{display:'flex',alignItems:'center',gap:'10px'}}>
        <p className="all_the_best">All the very best!</p>
        <img src={thumb} alt="thumb" />
      </div>
      <hr />
      <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
      <input type="checkbox" name="checkBoxInterview" id="checkBoxInterview" />
      <p htmlFor="checkBoxInterview" className="checkbox_after_content">I want to get the job description on my whatsapp number.</p>
      </div>
     
          </div>


          <div className="placement_details_first_button_container">
            <img style={{ cursor: "pointer" }} src={backButton} alt="back" />
            <img
              style={{ cursor: "pointer" }}
              onClick={handleShow}
              src={next}
              alt="next"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FresherPlacementDetailsFirstStep;
