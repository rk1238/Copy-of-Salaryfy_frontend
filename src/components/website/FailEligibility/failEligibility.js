import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import arrow from "../../img/arrow.png";
import Navbar from "../../common/navbar";

import { useNavigate } from "react-router-dom";

import Fail from "../../img/fail.png";

ChartJS.register(ArcElement);

const FailEligibility = () => {
  const navigate = useNavigate();
  // const resultMessage = JSON.parse(window.localStorage.getItem("message"));
  const total_per = JSON.parse(window.localStorage.getItem("total_per"));
  //const total_LR = JSON.parse(window.localStorage.getItem("total_LR"));
  // const total_LC = JSON.parse(window.localStorage.getItem("total_LC"));
  // const total_AVP = JSON.parse(window.localStorage.getItem("total_AVP"));
  const test_AVP = JSON.parse(window.localStorage.getItem("test_AVP"));
  const test_LC = JSON.parse(window.localStorage.getItem("test_LC"));
  const test_LR = JSON.parse(window.localStorage.getItem("test_LR"));
  // const is_eligible = JSON.parse(window.localStorage.getItem("is_eligible"));
  // const salary_in_lpa = JSON.parse(window.localStorage.getItem("salary_in_lpa"));
  const userName = localStorage.getItem("name");
  const data1 = Math.round(test_LR)
  const data2 = (Math.round(test_AVP))/2
  const data3 = Math.round(test_LC)
  const data4=(Math.round(test_AVP))/2
  const data = {
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
    },

    datasets: [
      {
        labels: "display: none;",
        data: [data1, data2, data3, data4],
        backgroundColor: [
          "rgba(210, 145, 188)",
          "rgba(182, 193, 209)",
          "rgba(254, 219, 209)",
          "rgba(217, 229, 174)",
        ],
        borderColor: [
          "rgba(210, 145, 188)",
          "rgba(182, 193, 209)",
          "rgba(254, 219, 209)",
          "rgba(217, 229, 174)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="hide_show_navbar">
        <Navbar />
      </div>
      <section className="direct-placement-route eligibility_faild">
        <div className="container ">
          <div className=" eligiblity-result-modal" id="submitResultModalTwo">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header"></div>
                <div className="modal-body ready-list">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="score-miter faild">
                        <h6>Sorry {userName}, </h6>
                        <p>
                          based on your eligibility score of {total_per}%, you are <br />{" "}
                          <b className="text-danger">not eligible</b> for 100%
                          placement.
                        </p>
                      </div>
                      <div className="score-miter failed-meter">
                        <img src={Fail} alt="" />

                        <div className="job_guarantee_para">
                          <p><b>Recommendation:</b> upskill yourself with top <br/>
                          industry programs before you avail a job.</p>
                        </div>
                        {/* <div className="right-block fresher-test">
                          <a
                            href="/SkilledBasedPackage"
                            className="theme_btn tertiary">
                           Click here <img src={arrow} alt="arrow" />
                            <span></span>
                          </a>
                        </div> */}
                      </div>
                    </div>
                    <div className="col-lg-4 border_radius_chart fail-doughnut">
                      <div className="doughnut-chart">
                        <h6>Your score</h6>
                        <div className="canvas-div">
                          {/* <canvas id="myChart"> 50%</canvas> */}

                          <Doughnut
                            data={data}
                            options={{
                              responsive: true,
                              maintainAspectRatio: true,
                              cutout: 100,
                            }}
                          />

                          <div id="doughnut-percentage">
                            <br />
                            <h3>{total_per }%</h3>
                          </div>

                          <div className="data-blink">
                            <div className="blink-list">
                              <ul>
                                <li>
                                  <div className="left-blink">
                                    <span className="span-1">&nbsp;</span>
                                    <p>Logical Reasoning</p>
                                  </div>

                                  <div className="right-blink">
                                    <i
                                      className="fa fa-times cross"
                                      aria-hidden="true"></i>
                                    <div className="blink">
                                      <div className="zoom-in-zoom-out"></div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="left-blink">
                                    <span className="span-2">&nbsp;</span>
                                    <p>Audio-Visual Processing</p>
                                  </div>

                                  <div className="right-blink">
                                    <i
                                      className="fa fa-times cross"
                                      aria-hidden="true"></i>
                                    <div className="blink">
                                      <div className="zoom-in-zoom-out"></div>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <div className="left-blink">
                                    <span className="span-5">&nbsp;</span>
                                    <p>Language Comprehension</p>
                                  </div>

                                  <div className="right-blink">
                                    <i
                                      className="fa fa-times cross"
                                      aria-hidden="true"></i>
                                    <div className="blink">
                                      <div className="zoom-in-zoom-out"></div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="left-blink">
                                    <span className="span-4">&nbsp;</span>
                                    <p>Processing Speed and Retention</p>
                                  </div>

                                  <div className="right-blink">
                                    <i
                                      className="fa fa-times cross"
                                      aria-hidden="true"></i>
                                    {/* <div className="blink">
                                    <div className="zoom-in-zoom-out"></div>
                                  </div> */}
                                  </div>
                                </li>
                              </ul>
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
        </div>
      </section>
    </React.Fragment>
  );
};

export default FailEligibility;
