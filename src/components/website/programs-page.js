import React, { useState, useEffect } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import BtnArrow from "../img/btn-arrow.png";
import Arrow from "../img/arrow.png";
import Lock from "../img/lock-icon.png";
import { useNavigate } from "react-router-dom";
import Expand from "../img/expand-img.png";
import Call from "../img/icons/call.png";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";

const ProgramsPage = () => {
  const navigate = useNavigate();
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [courses, setCourses] = useState("");

  const Token = JSON.parse(window.localStorage.getItem("token"));
  const edu_background = JSON.parse(window.localStorage.getItem("edu_background"));

  function enablebutton(event) {
    setButtonEnabled(event.target.checked);
  }

  function handleButtonClick(id) {
    const checkbox1 = document.getElementById(`1${id}`);
    if (buttonEnabled && checkbox1.checked) {
      console.log("id", id);
      navigate("/PaymentModelPage/" + id);
    }
  }

  useEffect(() => {
    // Get courses through Api
    let Api = ApiBaseUrl+"course-features";
    const fetchCourses = async (url) => {
      try {
        const res = await fetch(Api, {
          headers: {
            "x-access-token": Token,
          },
        });
        const data = await res.json();
        console.log(data.courses);
        setCourses(data.courses);
        //    isLoading=false;
      } catch (error) {}
    };
    fetchCourses(Api);
  }, [Token]);


  async function trackingCourses(id) {
    const url = ApiBaseUrl+"course-click/"+id;
    try {
      const response = await fetch(url, {
        headers: {
          'x-access-token': Token
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Failed to fetch courses:', response.status);
      }
      } catch (error) {
      console.error('Error fetching courses:', error);
      }
  }
  
  return (
    <React.Fragment>
      <Navbar />
      <section className="eligiblity-form-sec programs_page_mobile">
        <a className="call-btn-2 expand-button call-btn">
          {" "}
          <img src={Call} alt="arrow" className="expand-img" />
          <img src={Expand} alt="" className="expand-img-2" />
          <div className="d-block">
            <p className="text">Need help?</p>
            <p>Chat or call with our counselor</p>
          </div>
        </a>
        <div className="container">
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
                <p>select plan</p>
              </li>
              <li>
                <span>4</span>
                <p>Schedule call</p>
              </li>
            </ol>
          </div>
          <div className="eligiblity-form-filds skill-programs-section">
            <div className="programs-heading">
              <h2>Based on your score</h2>
              <p>
                you can choose from the following programs. The selected program
                will be added to your cart.{" "}
              </p>
            </div>
            <div className="row justify-content-center">
              {Array.isArray(courses) &&
                courses.map((value, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-6 flex_width_hundred">
                    {edu_background === "non_tech" ?
                      <div className=" program-cards program_details_wrapper">
                        <div className="top-block">
                         
                          <p  className="course_cetegory">
                            <span>{value?.category.name}</span>
                            {value?.type === '0' || value?.category_id===1 ?
                              <span><img src={Lock} alt="" /></span> :
                              ''}
                          </p>
                          <h4>
                            {" "}
                            <span>{value?.name.substring(0, 10)}</span>
                            {value?.name.substring(10)}
                          </h4>
                          <p>
                            <span>
                              {value?.course_duration} course duration |{" "}
                              {value?.placement_duration}
                              &nbsp;placement duration
                            </span>
                          </p>
                        </div>

                        <div className="bottom-block">
                          <ul>
                            {value?.course_features.map((feature, i) => (
                              <li key={i}>
                                <i
                                  className="fa fa-circle"
                                  aria-hidden="true"></i>
                                {feature?.name}
                              </li>
                            ))}
                          </ul>

                          <form>
                            {value?.type === '0' || value?.category_id===1 ?
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id={`1${value?.id}`}
                                  onClick={enablebutton}
                                  disabled
                                  style={{ color: 'gray' }}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`1${value?.id}`}>
                                  I have read all T&C
                                </label>
                              </div>
                              :
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id={`1${value?.id}`}
                                  onClick={enablebutton}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`1${value?.id}`}>
                                  I have read all T&C
                                </label>
                              </div>
                            }
                          
                          </form>
                          {value?.type === '0' ||  value?.category_id===1 ?
                            <div className="d-flex button_card_flexx disable-gray-btn">
                              <button
                                href=" "
                                disabled
                                className="programs-btn transparent"
                                onClick={() =>
                                  navigate(
                                    "/CoursePagePgpManagementDs/" + value?.id
                                  )
                                }>
                                View details
                                <span></span>
                              </button>
                              <a
                                className="programs-btn programs-btns mobile_hundred"
                                onClick={() =>
                                  {
                                  handleButtonClick(value?.id)
                                  trackingCourses(value?.id);
                                  }
                                    
                                }>
                                Enroll now{" "}
                                <img src={BtnArrow} alt="arrow" className="arrow" />
                                <img src={Arrow} alt="arrow" className="arrow-1" />
                                <span></span>
                              </a>
                            </div>
                            :
                            <div className="d-flex button_card_flexx">
                            <a
                              href=" "
                              className="programs-btn transparent"
                              onClick={() =>
                                navigate(
                                  "/CoursePagePgpManagementDs/" + value?.id
                                )
                              }>
                              View details
                              <span></span>
                            </a>
                            <button
                              className="programs-btn programs-btns mobile_hundred"
                              disabled={!buttonEnabled}
                              onClick={() => handleButtonClick(value?.id)}>
                              Enroll now{" "}
                              <img src={BtnArrow} alt="arrow" className="arrow" />
                              <img src={Arrow} alt="arrow" className="arrow-1" />
                              <span></span>
                            </button>
                            </div>
                          }
                          
                        </div>
                      </div>
                      :
                      <div className=" program-cards program_details_wrapper">
                      <div className="top-block">
                   
                        <p key={index} className="course_cetegory">
                          <span>{value?.category.name}</span>
                          {value?.type === '0' ?
                            <span><img src={Lock} alt="" /></span> :
                            ''}
                        </p>
                        <h4>
                          {" "}
                          <span>{value?.name.substring(0, 10)}</span>
                          {value?.name.substring(10)}
                        </h4>
                        <p>
                          <span>
                            {value?.course_duration} course duration |{" "}
                            {value?.placement_duration}
                            &nbsp;placement duration
                          </span>
                        </p>
                      </div>

                      <div className="bottom-block">
                        <ul>
                          {value?.course_features.map((feature, i) => (
                            <li key={i}>
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"></i>
                              {feature?.name}
                            </li>
                          ))}
                        </ul>

                        <form>
                          {value?.type === '0' ?
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id={`1${value?.id}`}
                                onClick={enablebutton}
                                disabled
                                style={{ color: 'gray' }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`1${value?.id}`}>
                                I have read all T&C
                              </label>
                            </div>
                            :
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id={`1${value?.id}`}
                                onClick={enablebutton}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`1${value?.id}`}>
                                I have read all T&C
                              </label>
                            </div>
                          }
                        
                        </form>
                        {value?.type != '0' ?
                          <div className="d-flex button_card_flexx">
                            <a
                              href=" "
                              className="programs-btn transparent"
                              onClick={() =>
                                navigate(
                                  "/CoursePagePgpManagementDs/" + value?.id
                                )
                              }>
                              View details
                              <span></span>
                            </a>
                            <button
                              className="programs-btn programs-btns mobile_hundred"
                              disabled={!buttonEnabled}
                              onClick={() => handleButtonClick(value?.id)}>
                              Enroll now{" "}
                              <img src={BtnArrow} alt="arrow" className="arrow" />
                              <img src={Arrow} alt="arrow" className="arrow-1" />
                              <span></span>
                            </button>
                          </div>
                          :
                          ''
                        }
                        {value?.type === '0' ?
                          <div className="d-flex button_card_flexx disable-gray-btn">
                            <button
                              href=" "
                              disabled
                              className="programs-btn transparent"
                              onClick={() =>
                                navigate(
                                  "/CoursePagePgpManagementDs/" + value?.id
                                )
                              }>
                              View details
                              <span></span>
                            </button>
                            <a
                              className="programs-btn programs-btns mobile_hundred"
                              onClick={() =>
                                  {
                                  handleButtonClick(value?.id)
                                  trackingCourses(value?.id);
                                  }
                                  }
                              >
                              Enroll now{" "}
                              <img src={BtnArrow} alt="arrow" className="arrow" />
                              <img src={Arrow} alt="arrow" className="arrow-1" />
                              <span></span>
                            </a>
                          </div>
                          :
                          ''
                        }
                      </div>
                      </div>
                    }
                  </div>
                ))}
              ;
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade sign-in-modal"
        id="ReadyModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
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
              <h2> Ready to start!</h2>
              <ul>
                <li>
                  1. You have 2 minutes to answer the following 10 questions.
                </li>
                <li>2. You have only 2 attempts for this test.</li>
                <li>
                  3. You can skip questions and return back to them later.{" "}
                  <br /> Good Luck!
                </li>
              </ul>

              <div className="test-box">
                <a
                  href="/eligiblity-test"
                  type="button"
                  className="theme_btn
                                tertiary">
                  Start test
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default ProgramsPage;
