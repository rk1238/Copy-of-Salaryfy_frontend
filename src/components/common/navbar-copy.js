import React from "react";

import img1 from "../img/logo.png";
import arrow from "../img/arrow.png";

const Navbar = () => {

return (
    <React.Fragment>
      <header
        className="theme-header absolute-header shadow-add-active"
        id="top_fixed_header"
      >
        <div className="container custom-container">
    
          <div className="header-bottom">
            <div
              className="navbar navbar-expand-lg"
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <a href="/" className="theme-logo">
                <img src={img1} alt="Data Folkz" />
              </a>
              <div className="navbar-right d-flex align-items-center">
                <ul className="navbar-nav">
                
                  <li className="nav-item has-dropdown megamenu">
                    <a href="#" className="nav-link">
                      Job Guarantee Programs
                      <i className="fal fa-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="program-category">
                            <h6 className="program-heading">
                              Technical courses
                            </h6>
                            <section className="program-section program-section-wrapper">
                              <div className="container custom-container">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="program-block">
                                      <h6>
                                        <span>PG Program</span>in AI & Big Data
                                        Analytics
                                      </h6>

                                      <div className="link">
                                        <a
                                          style={{ textDecoration: "none" }}
                                          href="#"
                                        >
                                          Short sub text here
                                        </a>
                                        <a href="#">
                                          <img src={arrow} alt="arrow" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="program-block">
                                      <h6>
                                        <span>Program name</span> in subject
                                        name here text
                                      </h6>

                                      <div className="link">
                                        <a
                                          style={{ textDecoration: "none" }}
                                          href="#"
                                        >
                                          Short sub text here
                                        </a>
                                        <a href="#">
                                          <img src={arrow} alt="arrow" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="program-block">
                                      <h6>
                                        <span>Program name</span> in subject
                                        name here text
                                      </h6>

                                      <div className="link">
                                        <a
                                          style={{ textDecoration: "none" }}
                                          href="#"
                                        >
                                          Short sub text here
                                        </a>
                                        <a href="#">
                                          <img src={arrow} alt="arrow" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="program-block">
                                      <h6>
                                        <span>Program name</span> in subject
                                        name here text
                                      </h6>

                                      <div className="link">
                                        <a
                                          style={{ textDecoration: "none" }}
                                          href="#"
                                        >
                                          Short sub text here
                                        </a>
                                        <a href="#">
                                          <img src={arrow} alt="arrow" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="program-category">
                            <h6 className="program-heading">
                              Non-Technical courses
                            </h6>
                            <section className="program-section">
                              <div className="container custom-container">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="program-block">
                                      <h6>
                                        <span>PG Program</span>in AI & Big Data
                                        Analytics
                                      </h6>

                                      <div className="link">
                                        <a
                                          style={{ textDecoration: "none" }}
                                          href="#"
                                        >
                                          Short sub text here
                                        </a>
                                        <a href="#">
                                          <img src={arrow} alt="arrow" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="program-block">
                                      <h6>
                                        <span>Program name</span> in subject
                                        name here text
                                      </h6>

                                      <div className="link">
                                        <a
                                          style={{ textDecoration: "none" }}
                                          href="#"
                                        >
                                          Short sub text here
                                        </a>
                                        <a href="#">
                                          <img src={arrow} alt="arrow" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="program-block">
                                      <h6>
                                        <span>Program name</span> in subject
                                        name here text
                                      </h6>

                                      <div className="link">
                                        <a
                                          style={{ textDecoration: "none" }}
                                          href="#"
                                        >
                                          Short sub text here
                                        </a>
                                        <a href="#">
                                          <img src={arrow} alt="arrow" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="program-block">
                                      <h6>
                                        <span>Program name</span> in subject
                                        name here text
                                      </h6>

                                      <div className="link">
                                        <a
                                          style={{ textDecoration: "none" }}
                                          href="#"
                                        >
                                          Short sub text here
                                        </a>
                                        <a href="#">
                                          <img src={arrow} alt="arrow" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Corporate Trainings
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="#"
                      className="nav-link"
                    >
                      Hire From Us
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="#"
                      className="nav-link"
                    >
                      Alumni
                    </a>
                  </li>
                  <li className="nav-item has-dropdown">
                    <a href="#" className="nav-link">
                      Resources
                      <i className="fal fa-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a
                          style={{ textDecoration: "none" }}
                          href="#"
                        >
                          Video Bytes
                        </a>
                      </li>

                      <li className="menu-item">
                        <a
                          style={{ textDecoration: "none" }}
                          href="#"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          style={{ textDecoration: "none" }}
                          href="#"
                          className="nav-link"
                        >
                          refer-earn
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          style={{ textDecoration: "none" }}
                          href="#"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <a
                  style={{ textDecoration: "none" }}
                  href="#"
                  className="theme_btn"
                  data-toggle="modal"
                  data-target="#SigninModal"
                >
                  Sign In
                  <span></span>
                </a>

                <div className="navbar-toggler aside-trigger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="aside-overlay aside-trigger"></div>

      <aside id="mobile-asider" className="mobile-aside">
        <img className="absolute-image" src="" alt="Data Folkz" />
        <div className="menu-block">
          <img className="logo" src="" alt="Data Folkz" />
          <span className="mobile-close aside-trigger">&times;</span>
        </div>
        <ul className="navbar-nav">
          <li>
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="has-dropdown">
            <a href="#" className="mobile-toggler expand-toggler">
              Program
            </a>
            <ul className="submenu">
              <div className="menu-block">
                <span className="back-btn mobile-close-btn shrink-toggler">
                  <i className="fal fa-long-arrow-left"></i>
                </span>
                <span className="menu-text">All Programs</span>
                <span className="mobile-close aside-trigger menu-refresher">
                  &times;
                </span>
              </div>
              <li className="has-dropdown">
                <a href="#" className="mobile-toggler">
                  Job Guarantee
                </a>
                <ul className="submenu has-bg">
                  <div className="menu-block">
                    <span className="back-btn mobile-close-btn">
                      <i className="fal fa-long-arrow-left"></i>
                    </span>
                    <span className="menu-text">Job Guarantee Programs</span>
                  </div>
                  <li className="nav-item course-block">
                    <a href="#" className="nav-link">
                      <div className="course-image"></div>
                      <p>
                        PG Program for Management in Data Science
                        <span className="registered">
                          <span>R</span>
                        </span>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item course-block">
                    <a href="#" className="nav-link">
                      <div className="course-image"></div>
                      <p>
                        PG Program in Artificial Intelligence &amp; Big Data
                        Analytics
                        <span className="registered">
                          <span>R</span>
                        </span>
                      </p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#" className="mobile-toggler">
                  Upskilling Programs
                </a>
                <ul className="submenu has-bg">
                  <div className="menu-block">
                    <span className="back-btn mobile-close-btn">
                      <i className="fal fa-long-arrow-left"></i>
                    </span>
                    <span className="menu-text">Upskilling Programs</span>
                  </div>
                  <li className="nav-item course-block">
                    <a href="#" className="nav-link">
                      <div className="course-image"></div>
                      <p>
                        Professional Certificate in Data Science
                        <span className="registered">
                          <span>R</span>
                        </span>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item course-block">
                    <a href="" className="nav-link">
                      <div className="course-image"></div>
                      <p>
                        Professional Certificate in Artificial Intelligence
                        <span className="registered">
                          <span>R</span>
                        </span>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item course-block">
                    <a href="#" className="nav-link">
                      <div className="course-image"></div>
                      <p>
                        Professional Certificate in Data Analytics
                        <span className="registered">
                          <span>R</span>
                        </span>
                      </p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#" className="mobile-toggler">
                  Flex Courses
                </a>
                <ul className="submenu has-bg">
                  <div className="menu-block">
                    <span className="back-btn mobile-close-btn">
                      <i className="fal fa-long-arrow-left"></i>
                    </span>
                    <span className="menu-text">Flex Courses</span>
                  </div>
                  <div className="flex-box">
                    <li className="nav-item course-block">
                      <a href="#" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization Program in SQL
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="#" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization Program in Tableau
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Excel in Analytics
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="#" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in Natural Language Processing
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="#" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in Python Programming
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="#" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in Database Management System
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="#" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in Big Data with Apache PIG
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="#" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in Big Data with Hive
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="#" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in Big Data
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in Computer Vision &amp; Neural Network
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in Big Data with Py-Spark
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in R Programming
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-item course-block">
                      <a href="" className="nav-link">
                        <div className="course-image"></div>
                        <p>
                          Specialization in Machine Learning
                          <span className="registered">
                            <span>R</span>
                          </span>
                        </p>
                      </a>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Corporate Training
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Fees & ISA</a>
          </li>
          <li>
            <a href="#">
              Admission Process
            </a>
          </li>
          <li>
            <a href="#">Hire From Us</a>
          </li>
          <li className="has-dropdown">
            <a href="#" className="mobile-toggler expand-toggler">
              Resources
            </a>
            <ul className="submenu">
              <div className="menu-block">
                <span className="back-btn mobile-close-btn shrink-toggler">
                  <i className="fal fa-long-arrow-left"></i>
                </span>
                <span className="menu-text">Resources</span>
                <span className="mobile-close aside-trigger menu-refresher">
                  &times;
                </span>
              </div>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                >
                  Video Bytes
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                >
                  Refer & Earn
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                >
                  Alumni
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="menu-contact-block">
          <li>
            <a
              href="#"
              className="theme_btn"
              data-toggle="modal"
              data-target="#loginModal"
            >
              Log in
              <span></span>
            </a>
          </li>
          <li>
            <a className="contact-info" href="mailto:contact@datafolkz.in">
              Email: <span>admissions@datafolkz.in</span>
            </a>
          </li>
          <li>
            <a className="contact-info" href="tel:08035216853">
              Phone: <span>08035216853</span>
            </a>
          </li>
        </ul>
      </aside>
      <div className="aside-overlay aside-trigger"></div>
    </React.Fragment>
  );
};

export default Navbar;
