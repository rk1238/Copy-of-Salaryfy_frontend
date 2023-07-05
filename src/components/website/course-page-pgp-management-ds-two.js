import React, { useState, useEffect } from "react";
import "../js/course_detail_counter";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import video from "../img/data_video.mp4";
import move from "../img/icons/move.png";
import Call from "../img/icons/call.png";
import Stars from "../img/icons/stars.png";

import Img15 from "../img/icons/img-15.png";
import CGreen from "../img/icons/certi-mob-g.png";
import CWhite from "../img/icons/certi-mob-light.png";

import BtnArrow from "../img/btn-arrow.png";
import Arrow from "../img/arrow.png";
import Cup from "../img/cup.png";
import Certificate from "../img/certificate.png";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";
import Calling from "../img/icons/c-1.png";
import C2 from "../img/icons/c-2.png";
import C3 from "../img/icons/c-3.png";
import C4 from "../img/icons/c-4.png";
import R1 from "../img/icons/r-1.png";
import R2 from "../img/icons/r-2.png";
import R3 from "../img/icons/r-3.png";
import R4 from "../img/icons/r-4.png";
import R5 from "../img/icons/r-5.png";
import R6 from "../img/icons/r-6.png";
import R7 from "../img/icons/r-7.png";
import Img17 from "../img/icons/img-17.png";
import Img18 from "../img/icons/img-18.png";
import Img19 from "../img/icons/img-19.png";
import Img20 from "../img/icons/img-20.png";
import Profile from "../img/icons/profile.png";
import activeOne from "../img/res/active-1.png";
import liteOne from "../img/res/lite-1.png";
import FacultyDrk from "../img/faculty-dark.png";
import FacultyLte from "../img/faculty-lte.png";
import Faculty from "../img/faculty.png";
import FacultyProfile from "../img/faculty-profile.png";
import activeTwo from "../img/res/active-2.png";
import liteTwo from "../img/res/lite-2.png";

import activeThree from "../img/res/active-3.png";
import liteThree from "../img/res/lite-3.png";

import activeFour from "../img/res/active-4.png";
import liteFour from "../img/res/lite-4.png";

import activeFive from "../img/res/active-5.png";
import liteFive from "../img/res/lite-5.png";

import activeSix from "../img/res/active-6.png";
import liteSix from "../img/res/lite-6.png";

import activeSeven from "../img/res/active-7.png";
import liteSeven from "../img/res/lite-7.png";
import Expand from "../img/expand-img.png";

import { useNavigate, useParams } from "react-router-dom";
import { PublicUrl } from "../PublicUrl/publicurl";
import blank_img from "../img/blank.jpg";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";

const CoursePagePgpManagementDsTwo = () => {
  const [coursesDetail, setCoursesDetail] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const p = [params.id];
  const Token = JSON.parse(window.localStorage.getItem("token"));
  window.localStorage.setItem("course_id", JSON.stringify(p));
  const [openSectionIndex, setOpenSectionIndex] = useState(-1);
  const courseBucket = PublicUrl + "course/";

  useEffect(() => {
    // Get courses through Api
    let Api = ApiBaseUrl+"course-details/" + p;
    const fetchCourses = async (url) => {
      try {
        const res = await fetch(Api, {
          headers: {  
            "x-access-token": Token,
          },
        });
        const data = await res.json();
        console.log("value", data.course);
        setCoursesDetail(data.course);
        //    isLoading=false;
      } catch (error) {}
    };
    fetchCourses(Api);
  }, [Token]);

  return (
    <React.Fragment>
      <Navbar />

      <section className="eligiblity-form-sec eligiblity-course-sec pgp_management_detail">
        <a onClick={() => navigate("/ProgramsPage/")} className="move-btn">
          <img src={move} alt="arrow" />
          Select course
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
        <div className="container ">
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
          <div className="row eligiblity-form-filds pgp-mnanagement">
            <div className="col-lg-8 order-lg-1 order-md-2 order-sm-2 order-2">
              <div className="eligiblity-filds-block-1">
                <div className="eligiblity-block">
                  <h1 className="mb-2">
                    {coursesDetail.name && (
                      <>
                        <span>{coursesDetail.name.substring(0, 10)}</span>
                        {coursesDetail.name.substring(10)}
                      </>
                    )}
                  </h1>

                  <img src={Stars} className="py-3" alt="" />

                  <div className="">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: coursesDetail.description,
                      }}
                    />
                  </div>
                </div>
                <div className="eligiblity-block-2">
                  <a
                    onClick={() => navigate("/PaymentModelPage/" + p)}
                    className="theme_btn programs-btn program-btn-1"
                  >
                    Enroll now{" "}
                    <img src={SvgArrow} className="partners-img" alt="" />
                    <span></span>
                  </a>
                  {/* <a
                    href="#"
                    className="programs-btn program-btn-1
                                    "
                  >
                    Enroll now <img src={BtnArrow} alt="arrow" className="arrow" />
                    <img src={Arrow} alt="arrow" className="arrow-1" />
                    <span></span>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="course_right_images">
                <img src={Img15} className="py-3  w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-inner">
                <div className="counter-img">
                  <img src={Calling} className="py-3" alt="" />
                </div>
                <h4>
                  {" "}
                  <span className="counter" data-from="0" data-to="100">
                    100
                  </span>{" "}
                  %
                </h4>
                <p>Job guarantee</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-inner">
                <div className="counter-img">
                  <img src={C2} className="py-3" alt="" />
                </div>
                <h4>
                  <span className="counter" data-from="0" data-to="260">
                    260
                  </span>
                  %
                </h4>
                <p>Salary hike</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-inner">
                <div className="counter-img">
                  <img src={C3} className="py-3" alt="" />
                </div>
                <h4>
                  {" "}
                  <span className="counter" data-from="0" data-to="5">
                    5
                  </span>{" "}
                  k+
                </h4>

                <p>Hiring partners</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-inner">
                <div className="counter-img">
                  <img src={C4} className="py-3 " alt="" />
                </div>
                <h4>
                  {" "}
                  <span className="counter" data-from="0" data-to="3">
                    3
                  </span>{" "}
                  k+
                </h4>
                <p>Career mentoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="select-program-tab-sec roadmap-success-section ">
        <div className="container-fluid p-0">
          <div className="tab-select row">
            <div
              className="nav flex-column nav-pills col-lg-3 col-md-4 col-sm-5"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <h3 className="full_show">Your roadmap for success!</h3>
              <a
                className="nav-link active"
                id="v-pills-select-program-tab"
                data-toggle="pill"
                href="#v-pills-select-program"
                role="tab"
                aria-controls="v-pills-select-program"
                aria-selected="true"
              >
                <div className="five_show">
                  <img src={activeOne} alt="" className="active-img" />
                  <img src={liteOne} alt="" className="lite-img" />
                </div>
                <span className="full_show">Course curriculum</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-give-merit-tab"
                data-toggle="pill"
                href="#v-pills-give-merit"
                role="tab"
                aria-controls="v-pills-give-merit"
                aria-selected="false"
              >
                <div className="five_show">
                  <img src={activeTwo} alt="" className="active-img" />
                  <img src={liteTwo} alt="" className="lite-img" />
                </div>
                <span className="full_show">Career centre</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-commencement-tab"
                data-toggle="pill"
                href="#v-pills-commencement"
                role="tab"
                aria-controls="v-pills-commencement"
                aria-selected="false"
              >
                <div className="five_show">
                  <img src={activeFour} alt="" className="active-img" />
                  <img src={liteFour} alt="" className="lite-img" />
                </div>
                <span className="full_show"> Final exam</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-career-centre-tab"
                data-toggle="pill"
                href="#v-pills-career-centre"
                role="tab"
                aria-controls="v-pills-career-centre"
                aria-selected="false"
              >
               
                <div className="five_show">
                  <img src={activeThree} alt="" className="active-img" />
                  <img src={liteThree} alt="" className="lite-img" />
                </div>
                <span className="full_show"> Tools and Projects</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-placement-drive-tab"
                data-toggle="pill"
                href="#v-pills-placement-drive"
                role="tab"
                aria-controls="v-pills-placement-drive"
                aria-selected="false"
              >
                <div className="five_show">
                  <img src={activeFive} alt="" className="active-img" />
                  <img src={liteFive} alt="" className="lite-img" />
                </div>
                <span className="full_show">Placement drive</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-Kick-tab"
                data-toggle="pill"
                href="#v-pills-Kick"
                role="tab"
                aria-controls="v-pills-Kick"
                aria-selected="false"
              >
                <div className="five_show">
                  <img src={activeSix} alt="" className="active-img" />
                  <img src={liteSix} alt="" className="lite-img" />
                </div>
                <span className="full_show">Job roles</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-certificate-tab"
                data-toggle="pill"
                href="#v-pills-certificate"
                role="tab"
                aria-controls="v-pills-certificate"
                aria-selected="false"
              >
                <div className="five_show">
                  <img src={CGreen} alt="" className="active-img" />
                  <img src={CWhite} alt="" className="lite-img" />
                </div>
                <span className="full_show">Certificate</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-faculty-tab"
                data-toggle="pill"
                href="#v-pills-faculty"
                role="tab"
                aria-controls="v-pills-faculty"
                aria-selected="false" 
              >
                <div className="five_show">
                  <img src={FacultyDrk} alt="" className="active-img" />
                  <img src={FacultyLte} alt="" className="lite-img" />
                </div>
                <span className="full_show">Faculty</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-review-tab"
                data-toggle="pill"
                href="#v-pills-review"
                role="tab"
                aria-controls="v-pills-review"
                aria-selected="false"
              >
                <div className="five_show">
                  <img src={activeSeven} alt="" className="active-img" />
                  <img src={liteSeven} alt="" className="lite-img" />
                </div>
                <span className="full_show">Student review</span>
              </a>
            </div>
            <div
              className="tab-content col-lg-9 col-md-8 col-sm-7"
              id="v-pills-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="v-pills-select-program"
                role="tabpanel"
                aria-labelledby="v-pills-select-program-tab"
              >
                <ul className="curriculum_list">
                  <li>
                    <img src={R1} className="py-3  w-100" alt="" />
                  </li>
                  <li>Course curriculum</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: coursesDetail.curriculum_content,
                  }}
                />

                <>
                  
                  {Array.isArray(coursesDetail.course_curriculum_term) &&
                    coursesDetail.course_curriculum_term.map(
                      (valuenext, index) => (
                        <div
                          className={`faq-accordian ${
                            openSectionIndex === index ? "open" : ""
                          }`}
                          key={index}
                        >
                          <div
                            className="accordion style-2"
                            id={`accordionExample${index}`}
                          >
                            <div className="card">
                              <div
                                id={`heading-${index}`}
                                className="card-header"
                                data-toggle="collapse"
                                data-target={`#collapse${index}`}
                                aria-expanded={openSectionIndex === index}
                                onClick={() => setOpenSectionIndex(index)}
                              >
                                <i
                                  className="fa fa-angle-down arrow"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span className="term-label">
                                  {valuenext.CourseCurriculumTerm.name}
                                </span>{" "}
                                <span className="flex-1">{valuenext.CourseCurriculumTerm.description}</span>
                              </div>

                              <div
                                id={`collapse${index}`}
                                className={`collapse ${
                                  openSectionIndex === index ? "show" : ""
                                }`}
                                data-parent={`#accordionExample${index}`}
                                aria-labelledby={`heading-${index}`}
                              >
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-7">
                                      <div className="bussiness-timeline">
                                        <p>
                                          {
                                            valuenext.CourseCurriculumTerm
                                              .description
                                          }
                                        </p>
                                        <ul className="financial-aid-list">
                                          {valuenext.curriculum_term_topic.map(
                                            (topic, index) => (
                                              <li key={index}>
                                                <h4>{topic.name}</h4>
                                                <p>{topic.description}</p>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-3">
                                      <img
                                        src={Img17}
                                        className="py-3 w-100"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                </>

                <div className="buttons-div">
                  <a href="#" class="theme_btn tertiary">
                    Download Syllabus<span></span>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-give-merit"
                role="tabpanel"
                aria-labelledby="v-pills-give-merit-tab"
              >
                <ul className="curriculum_list">
                  <li>
                    <img src={R2} className="py-3 w-100" alt="" />
                  </li>
                  <li>Career centre</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: coursesDetail.career_center_content,
                  }}
                />

                <div className="career-wrapper-sec">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 full_break">
                      <div className="inner-wrapper">
                        <img src={Img18} className="py-3" alt="" />
                        <p>Personality development</p>
                        <ul>
                          <li>Communication Skills</li>
                          <li>Soft Skills</li>
                          <li>Behavior Analysis </li>
                          <li>Etiquettes</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 full_break">
                      <div className="inner-wrapper">
                        <img src={Img19} className="py-3" alt="" />
                        <p>Skill development</p>
                        <ul>
                          <li>Visualization Skills</li>
                          <li>Analytical Thinking </li>
                          <li>Negotiation Skills </li>
                          <li>Decision Making</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 full_break">
                      <div className="inner-wrapper">
                        <img src={Img20} className="py-3" alt="" />
                        <p>Profile development</p>
                        <ul>
                          <li>LinkedIn Enhancing </li>
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
              <div
                className="tab-pane fade"
                id="v-pills-commencement"
                role="tabpanel"
                aria-labelledby="v-pills-commencement-tab"
              >
                <ul className="curriculum_list">
                  <li>
                    <img src={R3} className="py-3 w-100" alt="" />
                  </li>
                  <li>Course completion exam</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: coursesDetail.final_exam_content,
                  }}
                />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-career-centre"
                role="tabpanel"
                aria-labelledby="v-pills-career-centre-tab"
              >
                <ul className="curriculum_list">
                  <li>
                    <img src={R4} className="py-3 w-100" alt="" />
                  </li>
                  <li>Tools and Projects</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: coursesDetail.mock_interview_content,
                  }}
                />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-placement-drive"
                role="tabpanel"
                aria-labelledby="v-pills-placement-drive-tab"
              >
                <ul className="curriculum_list">
                  <li>
                    <img src={R5} className="py-3 w-100" alt="" />
                  </li>
                  <li>Placement drive</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: coursesDetail.placement_drive_content,
                  }}
                />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-Kick"
                role="tabpanel"
                aria-labelledby="v-pills-Kick-tab"
              >
                <ul className="curriculum_list">
                  <li>
                    <img src={R6} className="py-3 w-100" alt="" />
                  </li>
                  <li>Job roles</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: coursesDetail.job_role_content,
                  }}
                />

                <div className="role-category-sec">
                  <ul>
                    {Array.isArray(coursesDetail.course_job_roles) &&
                      coursesDetail.course_job_roles.map((job_role) => (
                        <li key={job_role.id}>{job_role.name}</li>
                      ))}
                  </ul>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-certificate"
                role="tabpanel"
                aria-labelledby="v-pills-certificate-tab"
              >
                <ul className="curriculum_list">
                  <li>
                    <img src={Cup} className="py-3 w-100" alt="" />
                  </li>
                  <li>Certificate</li>
                </ul>
                <p>
                  Salaryfy offers NASSCOM certificates, recognized as the gold
                  standard in the IT industry, ensuring that our students
                  receive the best education and training available. This
                  prestigious certification not only enhances your skills but
                  also significantly increases your chances of landing your
                  dream job.
                </p>
                <div className="certificate">
                  <img src={Certificate} className="py-3 " alt="" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-faculty"
                role="tabpanel"
                aria-labelledby="v-pills-faculty-tab"
              >
                <ul className="curriculum_list">
                  <li>
                    <img src={Faculty} className="py-3 w-100" alt="" />
                  </li>
                  <li>Faculty</li>
                </ul>
                <p>
                  Discover our expert Faculty who will help you achieve your
                  professional goals. Gain practical insights and skills from
                  experienced professionals who are passionate about your
                  success.
                </p>
                <div className="faculty_profile">
                  {coursesDetail.course_faculty && (
                <>
                  <div className="left_wrapper">
                  <img src={courseBucket + coursesDetail.course_faculty.profile_image} className="py-3 "
                  alt={coursesDetail.course_faculty.name}  style={{width: "80px", height: "auto"}}/>
                  </div>
                  <div className="right_wrapper">
                  
                 <div>
                <p className="highlight">
                <strong>{coursesDetail.course_faculty.name}</strong>
                </p>
                <p>{coursesDetail.course_faculty.department}</p>
                {/* <p>Founder & ceo Angel Investor</p> */}
                </div>
                
                   </div>
                   </>
                     )}
                </div>
                
                 <ul className="faculty-list">
                    {coursesDetail.course_faculty && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: coursesDetail.course_faculty.description,
                        }} />
                    )}
                </ul>
                
                <div className="video-box">
                  <div className="video-container">
                  {coursesDetail.course_faculty && (
                    <video controls  src={courseBucket+coursesDetail.course_faculty.media_path} autoPlay muted className="video" /> 
                  )}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-review"
                role="tabpanel"
                aria-labelledby="v-pills-review-tab"
              >
                <ul className="curriculum_list">
                  <li>
                    <img src={R7} className="py-3 w-100" alt="" />
                  </li>
                  <li>Student review</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: coursesDetail.student_review_content,
                  }}
                />
                <div className="review-wrapper-sec">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="inner-wrapper">
                        <div className="profile-block">
                          <img src={blank_img} style={{width:'50px',height:'50px'}} className="" alt="" />
                          <div className="left-div">
                          <h6>Saksham Choudhary</h6>
                            {/* <p>Data scientist at Google</p>  */}
                            {/* <a href="#">
                              Linkedin
                              <i
                                className="fa fa-external-link"
                                aria-hidden="true"></i>
                            </a> */}
                          </div>
                        </div>
                        <p className="detail-wrapper">
                        My overall journey at Data Folkz has been great because my mentor has been super supportive and guided me throughout my journey at Data Folkz. The curriculum was thorough, was easy to follow. If you are a beginner in the tech domain, just like me, you don’t need to worry as the program has got the most relevant and explaining content that will help you grasp the concepts easily. Make notes from the course content and learn how to implement your learnings.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="inner-wrapper">
                        <div className="profile-block">
                          <img src={blank_img} style={{width:'50px',height:'50px'}} alt="" />
                          <div className="left-div">
                            <h6>Arpita Belwal </h6>
                            {/* <p>Data scientist at Google</p>
                            <a href="#">
                              Linkedin
                              <i
                                className="fa fa-external-link"
                                aria-hidden="true"></i>
                            </a> */}
                          </div>
                        </div>
                        <p className="detail-wrapper">
                        I enjoyed this Data Science program thoroughly and got to learn about Data Engineering, Python, and other big data tools associated with Data Science. I pursued this particular program to leverage my technical knowledge and experience in order to work as a Data Engineer in the field and bring a difference to the organization. The platform designed by Salaryfy assists with the coordination of practical as well as theoretical knowledge.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="inner-wrapper">
                        <div className="profile-block">
                          <img src={blank_img} style={{width:'50px',height:'50px'}} className="" alt="" />
                          <div className="left-div">
                            <h6>Kamal Rajan</h6>
                            {/* <p>Data scientist at Google</p>
                            <a href="#">
                              {" "}
                              Linkedin
                              <i
                                className="fa fa-external-link"
                                aria-hidden="true"></i>
                            </a> */}
                          </div>
                        </div>
                        <p className="detail-wrapper">
                        I was working as a Business Analyst in a firm. With the professional Data Science course offered by Salaryfy, I was able to see a bigger picture of what my career could be if I could grab some crucial skills and knowledge. The learnings from this particular course have significantly assisted me in enhancing my overall performance at work while gaining a mid-term increase in my salary. {" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="inner-wrapper">
                        <div className="profile-block">
                          <img src={blank_img} style={{width:'50px',height:'50px'}} className="" alt="" />
                          <div className="left-div">
                            <h6>Ritesh Sharma </h6>
                            {/* <p>Data scientist at Google</p>
                            <a href="#">
                              Linkedin{" "}
                              <i
                                className="fa fa-external-link"
                                aria-hidden="true"></i>
                            </a> */}
                          </div>
                        </div>
                        <p className="detail-wrapper">
                        The course was comprehensive and well-structured, and what added to the major USPs of the course was the fact that there were live classes. These live sessions were really productive and interactive. The program helped me elevate my knowledge and skill levels and opened a lot of opportunities for me.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default CoursePagePgpManagementDsTwo;
