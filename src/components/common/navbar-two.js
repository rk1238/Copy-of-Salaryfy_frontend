import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import whiteUser from "../img/white-user.png";
import img1 from "../img/new-logo.png";
import dbProfile from "../img/db-profile.jpg";
import DashboardProfile from "../img/dashboard-profile.png";
import { PublicUrl } from "../PublicUrl/publicurl";

const NavbarTwo = () => {
  const navigate = useNavigate();
  // const userName = JSON.parse(window.localStorage.getItem("name"));
  const profile_image =localStorage.getItem("profile_image");
  const userName = JSON.parse(localStorage.getItem("name"));
  const ProfileImageBucket=PublicUrl+"/direct_placed_documents/"
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <React.Fragment>
      <header
        className="theme-header absolute-header shadow-add-active theme_header_mobile"
        id="top_fixed_header">
        <div className="container custom-container">
          <div className="header-bottom">
            <div
              className="navbar navbar-expand-lg navbar_two_mobile_view"
              style={{ display: "flex", alignItems: "flex-end" }}>
              <div className="navbar-toggler aside-trigger">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a href="/" className="theme-logo">
                <img src={img1} alt="Data Folkz" />
              </a>
              <div className="navbar-right d-flex align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      href="/AfterScholarshipTestDashboard"
                      className="nav-link">
                      Dashboard
                    </a>
                  </li>

                  <li className="menu-item">
                    <a style={{ textDecoration: "none" }} href="/ContactUs">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/AboutPage" className="nav-link ">
                      About us
                    </a>
                  </li>
                  <li className="nav-item has-dropdown">
                    <a href="#" className="nav-link navbar_two_dbset">
                      <img src={ProfileImageBucket+profile_image} alt="" className="" /> &nbsp;
                      {userName}
                      <i className="fal fa-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a
                          style={{ textDecoration: "none" }}
                          href="#"
                          onClick={logout}>
                          Log out
                        </a>
                      </li>
                      <li className="menu-item">
                        <a style={{ textDecoration: "none" }} href="#">
                          Profile
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="dashboard-profile-div five_show">
                  <a href=""><img src={ProfileImageBucket+profile_image} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="aside-overlay aside-trigger"></div>

      <aside id="mobile-asider" className="mobile-aside">
        <div className="menu-block">
          <span className="mobile-close aside-trigger">&times;</span>
        </div>
        <ul className="navbar-nav">
          <li>
            <a href="/AfterScholarshipTestDashboard" className="nav-link">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/ContactUs" className="nav-link">
              Contact
            </a>
          </li>

          <li>
            <a href="/AboutPage"> About us</a>
          </li>
          <li className="nav-item has-dropdown dropdown">
            <a href="#" className="nav-link dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={ProfileImageBucket+profile_image} alt="" className="" /> &nbsp;
              {userName}&nbsp;
              <i className="fal fa-angle-down"></i>
            </a>
            <ul className="sub-menu dropdown-menu" aria-labelledby="dropdownMenu2">
              <li className="menu-item">
                <a style={{ textDecoration: "none" }} href="#" onClick={logout}>
                  Log out
                </a>
              </li>
              <li className="menu-item">
                <a style={{ textDecoration: "none" }} href="#">
                  Log in
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </React.Fragment>
  );
};

export default NavbarTwo;
