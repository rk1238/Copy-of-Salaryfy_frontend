import React from 'react'
import NavbarTwo from "../common/navbar-two";
import dMail from "../img/mail.png";
import Calendar from "../img/icons/calendar.png";
import rightArrow from "../img/right-arrow.png";
import conpanyLogo from "../img/conpany-logo.png";
import move from "../img/icons/move.png";

const ScholarshipTestResultDetail = () => {
  return (
    <React.Fragment>
  <NavbarTwo />


  <section className="eligiblity-form-sec student-dashboard select-plan range-slider-plan full_show disclaimerpage-result">
  <a href="/DisclaimerPage" className="move-btn">
          <img src={move} alt="arrow" />
          Select plan
        </a>
        <div className="container custom-container">
          <div className="row">
          
            <div className="col-lg-12 col-md-12 col-sm-12 m-auto margin-auto-hide">
              <div className="tab-content" id="v-pills-tabContent">
            
                <div
                  className="tab-pane fade show active basket-banner m-auto"
                  id="v-pills-messages-2"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-2-tab"
                >
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="dashboard-content">
                        <h2>Scholarship Test</h2>
                        {/* <p>Sub text here</p> */}
                      </div>

                      <div className="scholarship-test ">
                        <div className="scholarship-test-wrapper">
                          <h6>Objective</h6>
                          <p>
                            The objective of the scholorship test is to comprehend the
                            academic skills of the learner. The Institute seeks
                            to assist a student who is academically strong
                            through the scholorship test. And hence, the questions for
                            the Scholorship test will be based on the Course that the
                            student has opted for.
                          </p>
                        </div>

                        <div className="scholarship-test-wrapper scholarship_row">
                          <h6>Details</h6>
                          <ul>
                            <li>The Scholorship test contains 30 questions.</li>
                            <li>Each question carry 1 mark.</li>
                            <li>There is no negative marking in the Test.</li>
                            <li>The Duration of the Scholorship test is 15 mins.</li>
                            <li>
                              You will be given 2 attempts to score in the Test.
                            </li>
                            <li>The scholorship criteria is given below.</li>
                          </ul>

                          <div className="scholarship-table">
                            <p className="left-para">Scholorship criteria</p>
                            <div className="table-responsive-xl special-inclusions-table">
                              <table className="table table-bordered">
                                <tbody>
                                  <tr>
                                    <td>Above 75%</td>
                                    <td>75% to 50%</td>
                                    <td>Below 50%</td>
                                  </tr>
                                  <tr>
                                    <td>₹ 0</td>
                                    <td> ₹ 5,000</td>
                                    <td> ₹ 10,000</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <ul>
                            <li>
                              After giving 1 attempt, you can come back anytime
                              for the 2nd attempt.
                            </li>
                            <li>
                              After gving two attempts to the test, the final
                              score be taken as the one which is highest.
                            </li>
                            <li>
                              The security amount will be calculated on the
                              score which is greater.
                            </li>
                            <li>
                              For example, if a student scores 55% in his 1st
                              attempt and 45% in his 2nd attempt, then for the
                              final calculation, his scores will be taken as
                              55%.
                            </li>
                            <li>
                              To which he is eligble to deposit only Rs.5000 as
                              the Security fee.
                            </li>
                          </ul>
                        </div>
                        <p>
                          This Scholorship test is a standard test module for
                          getting into companies like
                        </p>
                        <img src={conpanyLogo} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-4 basket-row ">
                      <div className="summary-table mb-5">
                        <h2 className="text-center mb-4">Having doubts?</h2>
                        <div className="table-responsive-xl special-inclusions-table">
                          <div className="having-doughts-sec">
                            <p className="text-center">
                            Get in touch with our counselor
                            </p>
                            <div className="call-session">
                              <p>Email us!</p>
                              <p className="number-cell">
                                <a href="#">contact@salaryfy.com</a>
                              </p>
                              <img src={dMail} alt="icon" className="icon" />
                            </div>
                            <p className="text-center mt-3">or</p>
                            <div className="call-session">
                              <p>Let us call you!</p>
                              <p className="number-cell">
                                <a href="#">Book a slot now</a>
                              </p>
                              <img src={Calendar} alt="icon" className="icon" />
                            </div>
                          </div>
                        </div>

                        <div className="green_block_test">
                          <a href="/DisclaimerPage">
                            <p>
                              Give
                              <span>Scholorship</span>
                              test now
                              <img src={rightArrow} alt="" />
                            </p>
                          </a>
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


      {/* =======mobile-view======== */}

      <section
        className="eligiblity-form-sec student-dashboard select-plan
            range-slider-plan five_show"
      >
        <div className="">
          <div className="row">
           
            <div className="col-lg-10 m-auto col-12 order-1">
              <div
                className="tab-content mobile_tab_content_show"
                id="v-pills-tabContent"
              >
           
                <div
                  className="tab-pane fade show active basket-banner m-auto"
                  id="v-pills-messages-three"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-three-tab"
                >

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="dashboard-content">
                        <h2>Scholarship Test</h2>
                        <div className="green_block_test">
                          <a href="/DisclaimerPage">
                            <p>
                              Give
                              <span>schorship</span>
                              test now
                              <img src={rightArrow} alt=""/>
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="scholarship-test ">
                        <div className="scholarship-test-wrapper">
                          <h6>Objective</h6>
                          <p>
                            The objective of the scholorship test is to comprehend the
                            academic skills of the learner.The Institute seeks
                            to assist a student who is academically strong
                            through the scholorship test.And hence, the questions for
                            the Scholorship test will be based on the Course that the
                            student has opted for.
                          </p>
                        </div>

                        <div className="scholarship-test-wrapper scholarship_row">
                          <h6>Details</h6>
                          <ul>
                            <li>The Scholorship test contains 30 questions.</li>
                            <li>Each question carry 1 mark.</li>
                            <li>There is no negative marking in the Test.</li>
                            <li>The Duration of the Scholorship test is 15 mins.</li>
                            <li>
                              You will be given 2 attempts to score in the Test.
                            </li>
                            <li>The scholorship criteria is given below.</li>
                          </ul>

                          <div className="scholarship-table">
                            <p className="left-para">Scholorship criteria</p>
                            <div className="table-responsive-xl special-inclusions-table">
                              <table className="table table-bordered">
                                <tbody>
                                  <tr>
                                    <td>Above 70%</td>
                                    <td>70% to 50%</td>
                                    <td>Bellow 50%</td>
                                  </tr>
                                  <tr>
                                    <td>free</td>
                                    <td> ₹ 10,000</td>
                                    <td> ₹ 20,000</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <ul>
                            <li>
                              After giving 1 attempt, you can come back anytime
                              for the 2nd attempt.
                            </li>
                            <li>
                              After gving two attempts to the test, the final
                              score be taken as the one which is highest.
                            </li>
                            <li>
                              The security amount will be calculated on the
                              score which is greater.
                            </li>
                            <li>
                              For example, if a student scores 55% in his 1st
                              attempt and 45% in his 2nd attempt, then for the
                              final calculation, his scores will be taken as
                              55%.
                            </li>
                            <li>
                              To which he is eligble to deposit only Rs.5000 as
                              the Security fee.
                            </li>
                          </ul>
                        </div>
                        <div className="green_block_test green_block_test_2">
                          <a href="/DisclaimerPage">
                            <p>
                              Give
                              <span>Scholorship</span>
                              test now
                              <img src={rightArrow} alt="" />
                            </p>
                          </a>
                        </div>
                        <p>
                          This Scholorship test is a standard test module for
                          getting into companies like
                        </p>
                        <img src={conpanyLogo} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-5">
                      <div className="having_dought_mobile five_show">
                        <div className="">
                          <div className="heading_section">
                            <h5>Having doubts?</h5>
                            <p> Get in touch with our counselor</p>
                          </div>
                          <div className="row">
                            <div className="col-lg-5 col-5 full-inner full_inner_1">
                              <div className="inner_wrapper full_inner_1">
                                <p>Email us!</p>
                                <img src={dMail} alt="icon" className="icon" />
                                <p>
                                  <strong>contact@salaryfy.com</strong>
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
                                <img
                                  src={Calendar}
                                  alt="icon"
                                  className="icon"
                                />
                                <p>
                                  <strong>Book a slot now</strong>
                                </p>
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
        </div>
      </section>
    </React.Fragment>
  )
}

export default ScholarshipTestResultDetail