import React, { useState, useEffect } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

import move from "../img/icons/move.png";
import call from "../img/icons/call.png";
import btnArrow from "../img/btn-arrow.png";
import arrow from "../img/arrow.png";
import Expand from "../img/expand-img.png";
import Call from "../img/icons/call.png";
import Lock from "../img/lock-icon.png";

import { useNavigate } from "react-router-dom";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";

const SkillProgramSpage = () => {
  const [courses, setCourses] = useState("");
  const navigate = useNavigate();
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const Token = JSON.parse(window.localStorage.getItem("token"));
  const edu_background = JSON.parse(window.localStorage.getItem("edu_background"));

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

  function enablebutton(event) {
    setButtonEnabled(event.target.checked);
  }
  function handleButtonClick(id) {
    const checkbox1 = document.getElementById(`1${id}`);
    if (buttonEnabled && checkbox1.checked) {
      console.log("id", id);
      navigate("/BasketPayment/" + id);
    }
  }

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
        <a href="/SkilledBasedPackage" className="move-btn">
          <img src={move} alt="arrow" />
          Select plan
        </a>

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
              <li>
                <span>2</span>
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
          <div className="eligiblity-form-filds skill-programs-section">
            <div className="programs-heading">
              <h2>High Paying Programs</h2>
              {/* <p>Based on your score, you can choose from the following programs. The selected program will be added to your cart. </p> */}
              {/* <p>You are eligible for the following courses</p> */}
            </div>
            <div className="row justify-content-center">
              {Array.isArray(courses) &&
                courses.map((value,index) => (
                  <div key={index } className="col-lg-4 col-md-6 col-sm-6 col-6 flex_width_hundred">
                    {edu_background === "non_tech" ?
                        <div className=" program-cards program_details_wrapper">
                        <div className="top-block">
                          {/* <p><span>{value?.category.name[0,6] }</span></p> */}
                          <p className="course_cetegory">
                            <span>{value?.category.name}</span>
                            {value?.type === '0' || value?.category_id===1?
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
                            {value?.course_features.map((feature, index) => (
                              <li key={index}>
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
                                className=" programs-btn transparent"
                                onClick={() =>
                                  navigate(
                                    "/CoursePagePgpManagementDsTwo/" + value?.id
                                  )
                                  
                                }>
                                View details
                                <span></span>
                              </button>
                              <button
                                // href="/BasketPaymentTwo"
                                onClick={() => handleButtonClick(value?.id)}
                                disabled
                                className="programs-btn programs-btns">
                                Opt now{" "}
                                <img src={btnArrow} alt="arrow" className="arrow" />
                                <img src={arrow} alt="arrow" className="arrow-1" />
                                <span></span>
                              </button>
                            </div> :
                            <div className="d-flex button_card_flexx ">
                            <button
                              href=" "
                              className=" programs-btn transparent"
                               onClick={() =>
                                navigate(
                                  "/CoursePagePgpManagementDsTwo/" + value?.id
                                )
                              }>
                              View details
                              <span></span>
                            </button>
                            <a
                              // href="/BasketPaymentTwo"
                              onClick={() => handleButtonClick(value?.id)}
                              className="programs-btn programs-btns">
                              Opt now{" "}
                              <img src={btnArrow} alt="arrow" className="arrow" />
                              <img src={arrow} alt="arrow" className="arrow-1" />
                              <span></span>
                            </a>
                            </div> 
                          }
                           </div>
                          </div>
                          : 
                          <div  className="program-cards program_details_wrapper">
                        <div className="top-block">
                          {/* <p><span>{value?.category.name[0,6] }</span></p> */}
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
                            {value?.course_features.map((feature, index) => (
                              <li key={index}>
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
                                className=" programs-btn transparent"
                                onClick={() =>
                                  navigate(
                                    "/CoursePagePgpManagementDsTwo/" + value?.id
                                  )
                                }>
                                View details
                                <span></span>
                              </a>
                              <a
                                // href="/BasketPaymentTwo"
                                onClick={() => handleButtonClick(value?.id)}
                                className="programs-btn programs-btns">
                                Opt now{" "}
                                <img src={btnArrow} alt="arrow" className="arrow" />
                                <img src={arrow} alt="arrow" className="arrow-1" />
                                <span></span>
                              </a>
                            </div> :
                            ''
                          }
                          {value?.type === '0' ?
                            <div className="d-flex button_card_flexx disable-gray-btn">
                              <button
                                href=" "
                                className="programs-btn transparent"
                                disabled
                                onClick={() => {
                                  navigate(
                                    "/CoursePagePgpManagementDsTwo/" + value?.id
                                  )
                                }
                                }>
                                View details
                                <span></span>
                              </button>
                              <a
                                // href="/BasketPaymentTwo"
                                onClick={() =>
                                  {
                                  handleButtonClick(value?.id)
                                  trackingCourses(value?.id);
                                  }
                                    
                                }
                                className="programs-btn programs-btns">
                                Opt now{" "}
                                <img src={btnArrow} alt="arrow" className="arrow" />
                                <img src={arrow} alt="arrow" className="arrow-1" />
                                <span></span>
                              </a>
                            </div> :
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

      <Footer />
    </React.Fragment>
  );
};

export default SkillProgramSpage;
