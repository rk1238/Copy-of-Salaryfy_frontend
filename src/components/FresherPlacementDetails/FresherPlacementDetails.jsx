import React from "react";
import placementSlide from "../img/placement_left_slide.png";
import lenskartCover from "../img/lenskart_cover.png";
import lenskartProfile from "../img/lenskart.png";
import getHired from "../img/hired.png";
import jobDetails from "../img/job_details.png";
import listIcon from "../img/list_icon.png";
import { Link } from "react-router-dom";

const FresherPlacementDetails = () => {
  return (
    <div className="fresher_placement_details_main_container">
      <div className="fresher_placement_details_flex_container">
        <div className="fresher_placement_details_left">
          <img src={placementSlide} alt="placementSlide" />
        </div>
        <div className="fresher_placement_details_right">
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
                <p className="fresher_placement_details_job_date">
                  04 May 2023
                </p>
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
                  <p className="fresher_placement_job_salary">
                    Starting Salary:
                  </p>
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
                  <p className="fresher_placement_job_posts_second">
                    {" "}
                    &nbsp;38
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fresher_placement_job_content_container">
            <div style={{ width: "90%", margin: "auto",padding:'30px 0px' }}>
              <div className="fresher_placement_job_flex_container">
                <div>
                  <img src={listIcon} alt="listIcon" />
                  <h3
                    style={{ margin: "0px" }}
                    className="fresher_placement_job_title"
                  >
                    Essential Requirements:
                  </h3>
                </div>
                <img src={jobDetails} alt="job-details" />
              </div>
              <p className="fresher_placement_job_first_para placement_content">
                Lorem ipsum is placeholder text commonly used in the graphic,
                {/* <br /> */}
                print, and publishing industries for previewing layouts and
                visual 
                {/* <br /> */}
                mockups. Lorem ipsum is placeholder text commonly used in the{" "}
                {/* <br /> */}
                graphic, print, and publishing industries for previewing layouts{" "}
                {/* <br /> */}
                and visual mockups. Lorem ipsum is placeholder text commonly
                used 
                {/* <br /> */}
                in the graphic, print, and publishing industries for previewing{" "}
                {/* <br /> */}
                layouts and visual mockups.
              </p>
              <div className="fresher_placement_job_flex_container_first">
                <img src={listIcon} alt="listIcon" />
                <h3
                  style={{ margin: "0px" }}
                  className="fresher_placement_job_title"
                >
                  Incentives:
                </h3>
              </div>
              <ol className="fresher_placement_job_ordered_list">
                <li>Recognition and rewards</li>
                <li>Referral programs</li>
                <li>Professional development</li>
                <li>Health and wellness</li>
                <li>Tuition reimbursement</li>
                <li>Bonuses and raises</li>
              </ol>
              <div className="fresher_placement_job_flex_container_first">
                <img src={listIcon} alt="listIcon" />
                <h3
                  style={{ margin: "0px" }}
                  className="fresher_placement_job_title"
                >
                  Interview details:
                </h3>
              </div>
              <p className="placement_content">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing
                layouts and visual mockups. Lorem ipsum is placeholder text
                commonly used in the graphic, print, and publishing industries
                for previewing layouts and visual mockups.
              </p>
              <p className="placement_content">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text.
              </p>
              <div className="fresher_placement_job_flex_container_first">
                <img src={listIcon} alt="listIcon" />
                <h3
                  style={{ margin: "0px" }}
                  className="fresher_placement_job_title"
                >
                  Job details:
                </h3>
              </div>
              <p className="placement_content">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing
                layouts and visual mockups. Lorem ipsum is placeholder text
                commonly used in the graphic, print, and publishing industries
                for previewing layouts and visual mockups.
              </p>
              <p className="placement_content">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text. Lorem ipsum is
                placeholder text commonly used in the graphic, print, and
                publishing industries for previewing layouts and visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing
                layouts and visual mockups.
              </p>
              <p className="placement_content">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text. Lorem ipsum is
                placeholder text commonly used in the graphic, print, and
                publishing industries for previewing layouts and visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing
                layouts and visual mockups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FresherPlacementDetails;
