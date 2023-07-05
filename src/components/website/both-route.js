import React, { useEffect } from "react";
import Slider from "react-slick";
import GreenCheck from "../img/green-check.png";

import { Chart as ChartJS, ArcElement } from "chart.js";
import arrow from "../img/arrow.png";
import Cross from "../img/cross.png";
import "../js/course_detail_counter";
import { useNavigate } from "react-router-dom";
import expgreen1 from "../img/exp-green-1.png";
import green1 from "../img/exp-green.png";
import Navbar from "../common/navbar";
import RightGreen from "../img/right-green.png";
import { BarChart, Bar, XAxis, YAxis, Legend } from "recharts";
ChartJS.register(ArcElement);

var settings2 = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
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

const BothRoute = () => {
  const navigate = useNavigate();
  const total_per = JSON.parse(window.localStorage.getItem("total_per"));
  const userName = JSON.parse(localStorage.getItem("name"));
  const current_package = JSON.parse(window.localStorage.getItem("current_package"));
  const AllTestFormValue = JSON.parse(
    window.localStorage.getItem("AllTestFormValue")
  );
  
  const salary_hike = JSON.parse(window.localStorage.getItem("salary_hike"));
  const hike_in_LPA = Math.round(current_package * (1 + salary_hike / 100));
  const Pillar1 = ({ x, y, width, height, fill, value }) => {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="#B3B3B3"
          
          strokeWidth={2}
        />
        <text
          x={x + width / 2}
          y={y + height / 2}
          transform={`rotate(-90, ${x + width / 2}, ${y + height / 2})`}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize={12}>
          You are here
        </text>
      </g>
    );
  };
  const Pillar2 = ({ x, y, width, height, fill, value }) => {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="#0E5F59"
         
        />
        <text
          x={x + width / 2}
          y={y + height / 2}
          transform={`rotate(-90, ${x + width / 2}, ${y + height / 2})`}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize={12}>
          What you deserve
        </text>
      </g>
    );
  };

  const dataBar = [
    {
      name: "Different Scenario",
      "You are here": 5,
      "What you deserve": hike_in_LPA,
      amt: 20,
    },
  ];
  ChartJS.register(ArcElement);
  useEffect(() => {
    console.log("alltestformvalue", AllTestFormValue);
  }, []);
  return (
    <React.Fragment>
      <div className="hide_show_navbar">
        <Navbar />
      </div>
      <section className="eligiblity-form-sec direct-placement-route both-route-chart">
        <div className="container custom-container">
          <div className=" eligiblity-result-modal" id="submitResultModalTwo">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header"></div>
                <div className="modal-body ready-list">
                  <div className="row both-skill-replace">
                    <div className="col-lg-8 padding_hide">
                      <div className="score-miter">
                        <h6>Congratulation {userName},</h6>
                        <p className="five_show">
                          <b>
                            Congratulation {userName}, based on your eligiblity score
                            of {total_per}%{" "}
                          </b>
                        </p>
                        <p className="five_show">
                          you can get a job with minimum <b> 3 to 5 LPA </b>
                          but in an ideal scenario you can get upto
                        </p>
                        <p className="full_show">
                          based on your eligibility{" "}
                          <b>score of {Math.round(total_per)}%</b> you can get a
                          job with minimum {" "}
                          <b>
                          {
                          current_package === '3' ? "1 to 3 LPA" :
                          current_package === '5' ? "3 to 5 LPA" :
                          current_package === '5' ? "5 to 7 LPA" : 
                          current_package === '8' ? "More than 7 LPA" :           
                          ""
                        }
                          </b> but in an ideal
                          scenario you can get upto
                        </p>
                      </div>

                      <div className="row eligiblity-form-filds">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 plan_view_mobile">
                          <div className="select-plan select-plan-2 recommended-plan enrollment-wrapper direct-placement-card">
                            <div className="plan-green-block">
                              <p>
                                <span>Direct placement</span>
                              </p>
                              <p className="price-tag">
                                Placement uration: 1 month
                              </p>
                            </div>
                            <div className="plan-transprant-block">
                              <p className="price">30%</p>
                              <p className="minimum-hike-para">upto hike</p>
                              <ul>
                                <li>
                                  <img src={Cross} alt="" />
                                  Upskill program
                                </li>
                                <li>
                                  <img src={Cross} alt="" />
                                  New skills: tech & non-tech
                                </li>
                                <li>
                                  <img src={GreenCheck} alt="" /> Pointer here
                                  Personality development
                                </li>
                                <li>
                                  <img src={GreenCheck} alt="" />
                                  Resume building
                                </li>
                                <li>
                                  <img src={GreenCheck} alt="" />
                                  Mock interviews
                                </li>
                                <li>
                                  <img src={GreenCheck} alt="" />
                                  Placement drives
                                </li>
                              </ul>

                              <div className="buttons">
                                <div className="right-block w-100">
                                  <a
                                    href="/DirectPlacement"
                                    className="theme_btn tertiary">
                                    Opt now
                                    <img src={arrow} alt="arrow" />
                                    <span></span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 col-6 plan_view_mobile">
                          <h2 className="recommended-heading recommended-heading-1 direct-placement-heading">
                            Recommended
                          </h2>
                          <div className="select-plan recommended-plan enrollment-wrapper direct-placement-card premium-plan-card">
                            <div className="plan-green-block">
                              <p>
                                <span>Skilled placement</span>
                              </p>
                              <p className="price-tag">
                                Placement duration: Course duration + 1 month
                              </p>
                            </div>
                            <div className="plan-transprant-block">
                              <p className="price">80%</p>
                              <p className="minimum-hike-para">upto hike</p>
                              <ul>
                                <li>
                                  <img src={GreenCheck} alt="" />
                                  Upskill program
                                </li>
                                <li>
                                  <img src={GreenCheck} alt="" />
                                  New skills: tech & non-tech
                                </li>
                                <li>
                                  <img src={GreenCheck} alt="" /> Pointer here
                                  Personality development
                                </li>
                                <li>
                                  <img src={GreenCheck} alt="" />
                                  Resume building
                                </li>
                                <li>
                                  <img src={GreenCheck} alt="" />
                                  Mock interviews
                                </li>
                                <li>
                                  <img src={GreenCheck} alt="" />
                                  Placement drives
                                </li>
                              </ul>

                              <div className="buttons">
                                <div className="right-block w-100">
                                  <a
                                    href="/SkilledBasedPackage"
                                    className="theme_btn tertiary">
                                    Opt now
                                    <img src={arrow} alt="arrow" />
                                    <span></span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 border_radius_chart full_show">
                      <div className="increase-chart-graph">
                        <Slider {...settings2}>
                          <div className="col-lg-12">
                            <div className="increase-chart-graph-slider">
                              <h4>
                                3 easy steps to
                                <br />
                                getting you placed!
                              </h4>
                              {/* <p>Subtext here Subtext here Subtext here </p> */}

                              <ul>
                                <li>
                                  <span>1</span> <p>Select course & plan</p>
                                </li>
                                <li>
                                  <span>2</span>{" "}
                                  <p>Join your class & career center</p>
                                </li>
                                <li>
                                  <span>3</span> <p>Get your dream job!</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <div className="col-lg-12">
                            <div className="increase-chart-graph-slider">
                              <h4>{userName}, in order to get {hike_in_LPA} LPA you need</h4>
                              <p>Subtext here about skilled based program</p>
                            </div>
                            <div className="score-miter">
                              <div className="score-miter-graph">
                                <br />
                                <BarChart
                                  width={400}
                                  height={300}
                                  data={dataBar}
                                  barGap={55}
                                  margin={{
                                    top: 40,
                                    right: 180,
                                    left: 10,
                                    bottom: 5,
                                  }}
                                  fill="#0E5F59">
                                  <XAxis dataKey="name" fill="#0E5F59" />
                                  <YAxis
                                    tick={null}
                                    tickLine={null}
                                    label={{
                                      value: "Lakh Per Annum",
                                      position: "center",
                                      angle: -90,
                                      offset: 60,
                                      fontSize: "15px",
                                      fill: "#0E5F59",
                                    }}
                                  />
                                  <Bar
                                    dataKey="You are here"
                                    fill="#B3B3B3"
                                    minPointSize={5}
                                    barSize={43}
                                    shape={<Pillar1 />}
                                    label={{
                                      position: "top",
                                      formatter: (value) => `${value}LPA`,
                                      fontSize: "13px",
                                    }}></Bar>
                                  <Bar
                                    dataKey="What you deserve"
                                    fill="#0E5F59"
                                    minPointSize={10}
                                    barSize={43}
                                    shape={<Pillar2 />}
                                    label={{
                                      position: "top",
                                      formatter: (value) => `${value}LPA`,
                                      fontSize: "13px",
                                      fill: "#0E5F59",
                                    }}></Bar>
                                </BarChart>
                              </div>
                              <br />
                            </div>
                          </div> */}
                        </Slider>
                      </div>
                    </div>

                    <section className="section landing-select-type-sec five_show col-12">
                      <div className="">
                        <h3 className="select-type-heading">
                          Select your type
                        </h3>
                        <div className="card-container">
                          <div
                            className="cardss smallCards large"
                            id="big_card">
                            <div className="flip_sec_card row">
                              <div
                                className="left_img col-lg-5 col-md-5 col-sm-5 col-5"
                                id="fresher_class_both">
                                <img src={expgreen1} alt="" />
                              </div>
                              <div className="right_wrapper col-lg-7 col-md-7 col-sm-7 col-7 fresher_card">
                                <p>Skilled placement</p>
                                <ul>
                                  <li>Students</li>
                                  <li>Graduates</li>
                                  <li>Upskill</li>
                                  <li>Unemployed</li>
                                </ul>
                                <p className="content">
                                  Get skilled and secure a job with an average
                                  package of 12 LPA
                                </p>
                              </div>
                            </div>
                          </div>
                          <p className="center_or">or</p>
                          <div
                            className="cardss smallCards small"
                            id="small_card">
                            <div className="small_show_content">
                              <div className="flip_sec_card row">
                                <div className="left_img small_card_class" id="small_card_class_both">
                                  <p className="exp_p">
                                    Direct <br /> placement
                                  </p>
                                  <img src={green1} alt="" />
                                </div>
                                <div
                                  className="right_wrapper col-lg-7 col-md-7 col-sm-7 col-7 exp_card"
                                  style={{ display: "none" }}>
                                  <p>Direct placement</p>
                                  <ul>
                                    <li>Working professional</li>
                                    <li>Employed</li>
                                    <li>Job change</li>
                                  </ul>
                                  <p className="content">
                                    Get skilled and secure a job with an average
                                    package of 12 LPA
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="select_type_timeline">
                          <div className="timeline-pop">
                            <ol>
                              <li>
                                <span className="">1</span>
                                <div className="timeline_content">
                                  <p>Check eligibility</p>
                                  <p>
                                    <strong>Get a quick report on your communication, logical reasoning & speed.</strong>
                                  </p>
                                </div>
                              </li>
                              <div id="fresher_tab">
                                <li>
                                  <span className="">2</span>
                                  <div className="timeline_content">
                                    <p>See your market value</p>
                                    <p>
                                      <strong>With our advanced AI salary predictor, stay informed of your true market value.</strong>
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <span className="">3</span>
                                  <div className="timeline_content">
                                    <p>Learn top industry skills</p>
                                    <p>
                                      <strong>Learn the skills that top companies are looking for.</strong>
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <span className="">4</span>
                                  <div className="timeline_content">
                                    <p>Get your dream  job</p>
                                    <p>
                                      <strong>With Salaryfy’s comprehensive job preparation (resume building, personality training, soft skills & many more) after the course.</strong>
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <span className="">5</span>
                                  <div className="timeline_content">
                                    <p>Pay ISA later</p>
                                    <p>
                                      <strong>
                                      Pay only 10-12% of your package on a monthly basis after securing a job.
                                      </strong>
                                    </p>
                                  </div>
                                </li>
                              </div>
                              <div
                                id="experienced_tab"
                                style={{ display: "none" }}>
                                <li>
                                  <span className="">2</span>
                                  <div className="timeline_content">
                                    <p>Upload resume</p>
                                    <p>
                                      <strong>
                                      and our placement officer will schedule your interview rounds.
                                      </strong>
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <span className="">3</span>
                                  <div className="timeline_content">
                                    <p>Get Groomed</p>
                                    <p>
                                      <strong>
                                      With Salaryfy’s comprehensive job preparation (resume building, personality training, soft skills & many more).
                                      </strong>
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <span className="">4</span>
                                  <div className="timeline_content">
                                    <p>Job changed</p>
                                    <p>
                                      <strong>
                                      Within 30 days of resume upload.
                                      </strong>
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <span className="">5</span>
                                  <div className="timeline_content">
                                    <p>Pay ISA later</p>
                                    <p>
                                      <strong>
                                      Only 1% of your package after a successful job change.
                                      </strong>
                                    </p>
                                  </div>
                                </li>
                              </div>
                            </ol>
                          </div>
                          <div className="banne-outer-timer">
                            <a href="" className="theme_btn tertiary">
                              {" "}
                              Check Eligiblity &nbsp;
                              <img src={RightGreen} alt="arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BothRoute;
