import React from "react";
import FooterLogo from "../img/footer-logo.png";
import Youtube from "../img/icons/youtube.png";
import Insta from "../img/icons/insta.png";
import Whatsapp from "../img/icons/whtasapp.png";
import Linkdln from "../img/icons/linkdlen.png";
import Twitter from "../img/icons/twitter.png";
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="theme-footer">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-3">
              <div className="row logo  text-center text-lg-left mb-5 mb-lg-0">
                <div className="footer-logo-top">
                  <img src={FooterLogo} alt="logo" />
                  <p>
                    We exist to re-define the market value of a job seeker for
                    his betterment.
                  </p>
                </div>

                <div className="copyright-bottom full_show">
                  <p>2023 copyright Salaryfy <span>TM</span></p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-4 col-6 order-1 order-sm-2 fotter_mobile_alignment">
              <div className="footer-widget">
                <h5 className="widget-title">Placement</h5>
                <ul className="widget-list">
                  <li>
                    <Link to="/fresher-eligibility">Freshers</Link>
                  </li>
                  <li>
                    <Link to="/experience-eligibility">Working professional</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-4 col-6 order-2 order-sm-3 fotter_mobile_alignment">
              <div className="footer-widget">
                <h5 className="widget-title">Company</h5>
                <ul className="widget-list">
                  
                  <li>
                   
                    <Link to="/AboutPage">About us</Link>
                  </li>
                  <li>
                    <Link to="#">Blogs</Link>
                  </li>
                  <li>
                   
                    <Link to="#">Parent company</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-use">Terms of use</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy policy</Link>
                  </li>
                  <li>
                    <Link to="/ContactUs">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 order-4">
              <div className="footer-widget">
                <h5 className="widget-title text-center text-sm-left">
                Follow us!
                </h5>
                <ul className="social-media">
                  <li>
                    <a href="https://www.youtube.com/@salaryfy">
                      <img src={Youtube} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/salaryfynow/">
                      <img src={Insta} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Whatsapp} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/salaryfynow">
                      <img src={Linkdln} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/salaryfynow">
                      <img src={Twitter} alt="icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
