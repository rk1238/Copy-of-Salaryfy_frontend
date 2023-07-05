import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

import move from "../img/icons/move.png";
import BtnArrow from "../img/btn-arrow.png";
import Img16 from "../img/icons/img-16.png";
import Arrow from "../img/arrow.png";
import Call from "../img/icons/call.png";
import Stars from "../img/icons/stars.png";
import Img9 from "../img/icons/img-9.png";
import Img10 from "../img/icons/img-10.png";
import Img11 from "../img/icons/img-11.png";
import Img12 from "../img/icons/img-12.png";
import Img13 from "../img/icons/img-13.png";
import Img14 from "../img/icons/img-14.png";
import Merrit from "../img/icons/merrit.png";
import Lion from "../img/lion.png";
import Rupees from "../img/rupees.png";
import Call2 from "../img/call.png";
import Whatsapp from "../img/whatsapp.png";
import MailBox from "../img/mail-box.png";

import Expand from "../img/expand-img.png";
import { useNavigate, useParams } from "react-router-dom";
const PaymentModelPaapNewLandingTwo = () => {
  const params = useParams();
  const course_id = [params.id];
  const navigate = useNavigate();
  window.localStorage.setItem("course_id", JSON.stringify(course_id));

  return (
    <React.Fragment>
      <Navbar />

      <section className="eligiblity-form-sec papp_firm_sec">
        <a href="/PaymentModelPage" className="move-btn">
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
          <div className="row eligiblity-form-filds align-items-center pgp-mnanagement">
            <div className="col-lg-6 order-lg-1 order-md-2 order-sm-2 order-2">
              <div className="eligiblity-filds-block-1">
                <div className="eligiblity-block">
                  <h1 className="mb-2 papp-heading">
                    Pay after <br /> placement
                  </h1>

                  <img src={Stars} className="py-3" alt="" />

                  <div className="mt-4">
                    
                    {/* <p>
                      Subtext Subtext Subtext Subtext Subtext Subtext Subtext
                      Subtext Subtext Subtext Subtext Subtext Subtext Subtext
                      Subtext Subtext Subtext Subtext Subtext Subtext Subtext
                      Subtext Subtext Subtext Subtext Subtext Subtext Subtext
                      Subtext Subtext Subtext{" "}
                    </p> */}
                  </div>
                </div>
                <div className="eligiblity-block-2">
                  <a
                    href=""
                    onClick={() => navigate("/PaymentModelPage/" + course_id)}
                    className="programs-btn program-btn-1 theme_btn
                                    ">
                    Enroll now <img src={BtnArrow} alt="arrow" className="" />
                    {/* <img src={Arrow} alt="arrow" className="arrow-1" /> */}
                    <span></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className=" margin_img_div">
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

      <section className="select-program-tab-sec select-program-tab-sec-2 full_show">
        <div className="container ">
          <div className="tab-select row">
            <div
              className="nav flex-column nav-pills col-lg-4"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical">
              <a
                className="nav-link active"
                id="v-pills-select-program-tab"
                data-toggle="pill"
                href="#v-pills-select-program"
                role="tab"
                aria-controls="v-pills-select-program"
                aria-selected="true">
                What is an ISA ?
              </a>
              <a
                className="nav-link"
                id="v-pills-give-merit-tab"
                data-toggle="pill"
                href="#v-pills-give-merit"
                role="tab"
                aria-controls="v-pills-give-merit"
                aria-selected="false">
                Payment flexibility
              </a>
              <a
                className="nav-link"
                id="v-pills-commencement-tab"
                data-toggle="pill"
                href="#v-pills-commencement"
                role="tab"
                aria-controls="v-pills-commencement"
                aria-selected="false">
                Class conduction
              </a>
              <a
                className="nav-link"
                id="v-pills-career-centre-tab"
                data-toggle="pill"
                href="#v-pills-career-centre"
                role="tab"
                aria-controls="v-pills-career-centre"
                aria-selected="false">
                Dedicated batch coordinator
              </a>
              <a
                className="nav-link"
                id="v-pills-placement-drive-tab"
                data-toggle="pill"
                href="#v-pills-placement-drive"
                role="tab"
                aria-controls="v-pills-placement-drive"
                aria-selected="false">
                One-to-one live Doubt Session
              </a>
              <a
                className="nav-link"
                id="v-pills-Kick-tab"
                data-toggle="pill"
                href="#v-pills-Kick"
                role="tab"
                aria-controls="v-pills-Kick"
                aria-selected="false">
                100% job guarantee
              </a>
            </div>
            <div className="tab-content col-lg-8 " id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-select-program"
                role="tabpanel"
                aria-labelledby="v-pills-select-program-tab">
                <ul className="curriculum_list">
                  <li>
                    <img src={Lion} className="py-3 w-100" alt="" />
                  </li>
                  <li>Income sharing agreement</li>
                </ul>
                <p>
                  ISA (Income Share Agreement) is a legally enforceable
                  agreement that offers students top-quality education and
                  training without upfront costs.. With this students will
                  receive top-quality education and training without any upfront
                  costs.
                </p>

                <ul className="list_items ">
                  <li>
                    {" "}
                    ISA program: pay tuition/training fees as a percentage of
                    annual salary after being hired
                  </li>
                  <li>Percentage ranges from 10-12%</li>
                  <li>
                    Students can focus on education and career development
                    without upfront financial burden
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-give-merit"
                role="tabpanel"
                aria-labelledby="v-pills-give-merit-tab">
                <ul className="mb-0 curriculum_list">
                  <li>
                    <img
                      src={Rupees}
                      className="
                                        w-100"
                      alt=""
                    />
                  </li>
                  <li>Payment flexibility</li>
                </ul>
                <p>
                  Students can choose to pay the fee in a lump sum, or opt for
                  installment payments through various NBFCs or or with bank
                  auto-sweep.
                </p>
                <p>
                  The ISA amount must be deposited to the institute in the first
                  month after securing employment, but flexible payment options
                  of 3 to 24 months are available through NBFCs or credit card.
                </p>
                <div className="row papp_new_wrapper">
                  <div className="col-lg-5 col-md-5 col-sm-5 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>NBFCs</strong>
                      </p>
                      <p>Payment option</p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <p>or</p>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-5 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>Bank</strong>
                      </p>
                      <p>auto-sweep option</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="v-pills-commencement"
                role="tabpanel"
                aria-labelledby="v-pills-commencement-tab">
                <ul className="curriculum_list">
                  <li>
                    <img
                      src={Img11}
                      className="py-3
                                        w-100"
                      alt=""
                    />
                  </li>
                  <li>Class conduction</li>
                </ul>
                <p>
                  Our courses are organized into batches, with all classes
                  delivered online. There are no in-person sessions. We also
                  offer class recordings for convenience, as well as online
                  study materials to support your learning experience.
                </p>

                <div className="row papp_new_wrapper">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="inner-wrapper">
                      <p>
                        <strong>
                          Batch <br /> classes
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="inner-wrapper">
                      <p>
                        <strong>
                          Study <br /> material
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="inner-wrapper">
                      <p>
                        <strong>
                          Online <br /> classes
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="inner-wrapper">
                      <p>
                        <strong>
                          Recorded <br /> classes
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-career-centre"
                role="tabpanel"
                aria-labelledby="v-pills-career-centre-tab">
                <ul className="curriculum_list">
                  <li>
                    <img
                      src={Img12}
                      className="py-3
                                        w-100"
                      alt=""
                    />
                  </li>
                  <li>Dedicated batch coordinator</li>
                </ul>
                <p>
                  Each batch has a dedicated coordinator who is responsible for
                  addressing all academic and technical concerns of the
                  students. You can contact your Batch Coordinator through
                  Student Support, the official WhatsApp number, or email for
                  any assistance.
                </p>

                <div className="row papp_new_wrapper">
                  <div className="col-lg-4 col-md-4 col-sm-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <img src={Call2} alt="" />
                      <p>Support</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <img src={Whatsapp} alt="" />
                      <p>Whatsapp number</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <img src={MailBox} alt="" />
                      <p>Email</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-placement-drive"
                role="tabpanel"
                aria-labelledby="v-pills-placement-drive-tab">
                <ul className="curriculum_list">
                  <li>
                    <img
                      src={Img13}
                      className="py-3
                                        w-100"
                      alt=""
                    />
                  </li>
                  <li>1 to 1 live doubt session</li>
                </ul>
                <p>
                  As part of the ongoing course, students can benefit from up to
                  4 live 1:1 doubt classes per month to address any academic
                  concerns they may have. If required, students can also opt for
                  additional live 1:1 doubt classes by paying Rs.249 per session
                  to the institution. These classes have a fixed duration of 30
                  minutes each.
                </p>
                <div className="row papp_new_wrapper">
                  <div className="col-lg-4 col-md-4 col-sm-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>4</strong>
                      </p>
                      <p>Free live 1:1 doubts</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>₹249</strong>
                      </p>
                      <p>for additional session</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>30</strong>
                      </p>
                      <p>
                        Minutes fixed duration
                        <br /> session
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-Kick"
                role="tabpanel"
                aria-labelledby="v-pills-Kick-tab">
                <ul className="curriculum_list">
                  <li>
                    <img
                      src={Img14}
                      className="py-3
                                        w-100"
                      alt=""
                    />
                  </li>
                  <li>100% job guarantee</li>
                </ul>
                <p>To be eligible for 100% placement, the student must</p>

                <ul className="list_items list_items_1">
                  <li>
                    maintain an attendance rate of more than 80% in all terms.
                  </li>
                  <li>
                    Complete all assignments and online exercises in the course
                    curriculum.
                  </li>
                  <li>Score more than 75% in all terminal exams.</li>
                  <li>Score more than 75% in the course completion exam.</li>
                </ul>
                <div className="eligiblity-block-2 d-flex justify-content-center mt-5">
                <a
                    href=""
                    onClick={() => navigate("/PaymentModelPage/" + course_id)}
                    className="programs-btn program-btn-1 theme_btn
                                    ">
                    Enroll now <img src={BtnArrow} alt="arrow" className="" />
                    {/* <img src={Arrow} alt="arrow" className="arrow-1" /> */}
                    <span></span>
                  </a>
                  {/* <a
                    onClick={() => navigate("/PaymentModelPage/" + course_id)}
                    className="programs-btn program-btn-1
                                    ">
                    Enroll now{" "}
                    <img src={BtnArrow} alt="arrow" className="arrow" />
                    <img src={Arrow} alt="arrow" className="arrow-1" />
                    <span></span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====mobile-view==== */}

      <section className="select-program-tab-sec roadmap-success-section five_show model_papp_section_mobile">
        <div className="container-fluid p-0">
          <div className="tab-select row">
            <div
              className="nav flex-column nav-pills col-lg-4"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical">
              <a
                className="nav-link active"
                id="v-pills-select-program-1-tab"
                data-toggle="pill"
                href="#v-pills-select-program-1"
                role="tab"
                aria-controls="v-pills-select-program-1"
                aria-selected="true">
                1
              </a>
              <a
                className="nav-link"
                id="v-pills-give-merit-1-tab"
                data-toggle="pill"
                href="#v-pills-give-merit-1"
                role="tab"
                aria-controls="v-pills-give-merit-1"
                aria-selected="false">
                2
              </a>
              <a
                className="nav-link"
                id="v-pills-commencement-1-tab"
                data-toggle="pill"
                href="#v-pills-commencement-1"
                role="tab"
                aria-controls="v-pills-commencement-1"
                aria-selected="false">
                3
              </a>
              <a
                className="nav-link"
                id="v-pills-career-centre-1-tab"
                data-toggle="pill"
                href="#v-pills-career-centre-1"
                role="tab"
                aria-controls="v-pills-career-centre-1"
                aria-selected="false">
                4
              </a>
              <a
                className="nav-link"
                id="v-pills-placement-drive-1-tab"
                data-toggle="pill"
                href="#v-pills-placement-drive-1"
                role="tab"
                aria-controls="v-pills-placement-drive-1"
                aria-selected="false">
                5
              </a>
              <a
                className="nav-link"
                id="v-pills-Kick-1-tab"
                data-toggle="pill"
                href="#v-pills-Kick-1"
                role="tab"
                aria-controls="v-pills-Kick-1"
                aria-selected="false">
                6
              </a>
            </div>
            <div
              className="tab-content col-lg-9 col-md-12 "
              id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-select-program-1"
                role="tabpanel"
                aria-labelledby="v-pills-select-program-1-tab">
                <ul className="curriculum_list">
                  <li>1 &nbsp; Income sharing agreement</li>
                </ul>

                <p>
                  ISA (Income Share Agreement) is a legally enforceable
                  agreement that offers students top-quality education and
                  training without upfront costs.. With this students will
                  receive top-quality education and training without any upfront
                  costs.
                </p>

                <ul className="list_items ">
                  <li>
                    {" "}
                    ISA program: pay tuition/training fees as a percentage of
                    annual salary after being hired
                  </li>
                  <li>Percentage ranges from 10-12%</li>
                  <li>
                    Students can focus on education and career development
                    without upfront financial burden
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-give-merit-1"
                role="tabpanel"
                aria-labelledby="v-pills-give-merit-1-tab">
                <ul className="curriculum_list">
                  <li>2 &nbsp; Payment flexibility</li>
                </ul>

                <p>
                  Students can choose to pay the fee in a lump sum, or opt for
                  installment payments through various NBFCs or or with bank
                  auto-sweep.
                </p>
                <p>
                  The ISA amount must be deposited to the institute in the first
                  month after securing employment, but flexible payment options
                  of 3 to 24 months are available through NBFCs or credit card.
                </p>
                <div className="row papp_new_wrapper">
                  <div className="col-lg-5 col-5 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>NBFCs</strong>
                      </p>
                      <p>Payment option</p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-2">
                    <p>or</p>
                  </div>
                  <div className="col-lg-5 col-5 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>Bank</strong>
                      </p>
                      <p>auto-sweep option</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-commencement-1"
                role="tabpanel"
                aria-labelledby="v-pills-commencement-1-tab">
                <ul className="curriculum_list">
                  <li>3 &nbsp; Class conduction</li>
                </ul>

                <p>
                  Our courses are organized into batches, with all classes
                  delivered online. There are no in-person sessions. We also
                  offer class recordings for convenience, as well as online
                  study materials to support your learning experience.
                </p>

                <div className="row papp_new_wrapper">
                  <div className="col-lg-6 col-6">
                    <div className="inner-wrapper">
                      <p>
                        <strong>
                          Batch <br /> classes
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-6">
                    <div className="inner-wrapper">
                      <p>
                        <strong>
                          Study <br /> material
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-6">
                    <div className="inner-wrapper">
                      <p>
                        <strong>
                          Online <br /> classes
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-6">
                    <div className="inner-wrapper">
                      <p>
                        <strong>
                          Recorded <br /> classes
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-career-centre-1"
                role="tabpanel"
                aria-labelledby="v-pills-career-centre-1-tab">
                <ul className="curriculum_list">
                  <li>4 &nbsp; Dedicated batch coordinator</li>
                </ul>

                <p>
                  Each batch has a dedicated coordinator who is responsible for
                  addressing all academic and technical concerns of the
                  students. You can contact your Batch Coordinator through
                  Student Support, the official WhatsApp number, or email for
                  any assistance.
                </p>

                <div className="row papp_new_wrapper">
                  <div className="col-lg-4 col-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <img src={Call2} alt="" />
                      <p>Support</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <img src={Whatsapp} alt="" />
                      <p>Whatsapp number</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <img src={MailBox} alt="" />
                      <p>Email</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-placement-drive-1"
                role="tabpanel"
                aria-labelledby="v-pills-placement-drive-1-tab">
                <ul className="curriculum_list">
                  <li>5 &nbsp; 1 to 1 live doubt session</li>
                </ul>

                <p>
                  As part of the ongoing course, students can benefit from up to
                  4 live 1:1 doubt classes per month to address any academic
                  concerns they may have. If required, students can also opt for
                  additional live 1:1 doubt classes by paying Rs.249 per session
                  to the institution. These classes have a fixed duration of 30
                  minutes each.
                </p>
                <div className="row papp_new_wrapper">
                  <div className="col-lg-4 col-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>4</strong>
                      </p>
                      <p>Free live 1:1 doubts</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>₹249</strong>
                      </p>
                      <p>for additional session</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-4 padding_fixed_mobile">
                    <div className="inner-wrapper">
                      <p>
                        <strong>30</strong>
                      </p>
                      <p>
                        Minutes fixed duration
                        <br /> session
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-Kick-1"
                role="tabpanel"
                aria-labelledby="v-pills-Kick-1-tab">
                <ul className="curriculum_list">
                  <li>6 &nbsp; 100% job guarantee</li>
                </ul>

                <p>To be eligible for 100% placement, the student must</p>

                <ul className="list_items list_items_1">
                  <li>
                    maintain an attendance rate of more than 80% in all terms.
                  </li>
                  <li>
                    Complete all assignments and online exercises in the course
                    curriculum.
                  </li>
                  <li>Score more than 75% in all terminal exams.</li>
                  <li>Score more than 75% in the course completion exam.</li>
                </ul>
                <div className="eligiblity-block-2 d-flex justify-content-center mt-5">
                  <a
                     onClick={() => navigate("/PaymentModelPage/" + course_id)}
                    className="programs-btn program-btn-1 program-btn-2
                                    ">
                    Enroll now{" "}
                    <img src={BtnArrow} alt="arrow" className="" />
                    {/* <img src={Arrow} alt="arrow" className="arrow-1" /> */}
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===mobile-view-end==== */}

      <Footer />
    </React.Fragment>
  );
};

export default PaymentModelPaapNewLandingTwo;
