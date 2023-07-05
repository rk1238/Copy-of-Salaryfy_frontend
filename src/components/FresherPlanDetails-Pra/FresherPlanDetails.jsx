import React from "react";
import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap2 from "../img/new_roadmap.png";
import instantFrame from "../img/instant_frame.png";
import jobOppurtunity from "../img/job_oppurtunity.png";
import resumeBuilding from "../img/resume_building.png";
import interviewPreparation from "../img/interview_preparation.png";
import careerCounseling from "../img/career_counseling.png";
import networkingOppurtunity from "../img/networking_oppurtunity.png";
import timeSaving from "../img/time_saving.png";
import selectButton from '../img/select_icon.png'

const FresherPlanDetails = () => {
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
      <div className="fresher_plan_details_container">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src={instantFrame} alt="instant_frame" />
          <h3 className="fresher_plan_detils_title">Placement Drive</h3>
        </div>
        <div>
          <p className="fresher_plan_details_content">
            Instant placement services for freshers which are offered by
            Salaryfy are specialized services that help recent graduates or
            those who are entering the workforce for the first time to find job
            opportunities quickly and efficiently. These services are designed
            to cater to the needs of young professionals who are seeking their
            first job or looking to switch careers.
          </p>
          <p className="fresher_plan_details_content">
            Here are some details about instant placement services for freshers
            offered by Salaryfy:
          </p>

          <img src={jobOppurtunity} alt="jobOppurtunity" />
          <p className="fresher_plan_details_content_inner">
            Instant placement services for freshers provide access to various
            job opportunities across various industries. These services
            typically have a large network of employers, which means they can
            help freshers find suitable job openings that match their skills and
            qualifications.
          </p>
          <img src={resumeBuilding} alt="resumeBuilding" />
          <p className="fresher_plan_details_content_inner">
            Many instant placement services also offer assistance with resume
            building. They can help freshers create professional resumes
            highlighting their strengths and achievements. This can be
            particularly useful for those who may not have a lot of work
            experience.
          </p>
          <img src={interviewPreparation} alt="interviewPreparation" />
          <p className="fresher_plan_details_content_inner">
            These services may also offer interview preparation sessions to help
            freshers prepare for job interviews. This can include mock
            interviews, feedback on interview skills, and tips on how to answer
            common interview questions.
          </p>
          <img src={careerCounseling} alt="careerCounseling" />
          <p className="fresher_plan_details_content_inner">
            Some instant placement services may also offer career counseling
            services to help freshers determine their career goals and develop a
            plan to achieve them. This can be particularly useful for those who
            are unsure about which career path to pursue
          </p>
          <img src={networkingOppurtunity} alt="networkingOppurtunity" />
          <p className="fresher_plan_details_content_inner">
            Instant placement services may also provide networking opportunities
            for freshers. This can include connecting with other young
            professionals, attending job fairs, and participating in industry
            events.
          </p>
          <img src={timeSaving} alt="timeSaving" />
          <p className="fresher_plan_details_content_inner">
            Instant placement services for freshers can save a lot of time and
            effort in job hunting. They can help freshers streamline the job
            search process by providing access to a large pool of job
            opportunities and helping them navigate the application process.
          </p>
          <p className="fresher_plan_details_bottom">
            In conclusion, instant placement services for freshers can be an
            excellent resource for those who are just starting out in their
            careers. Salaryfy offers a wide range of services to help young
            professionals find job opportunities, build their resumes, prepare
            for interviews, and develop their careers.
          </p>
        </div>
        <div>
            <img src={selectButton} alt="selectButton" />
        </div>
      </div>
    </div>
  );
};

export default FresherPlanDetails;
