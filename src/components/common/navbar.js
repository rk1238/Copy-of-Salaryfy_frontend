import React,{useEffect,useState} from "react";
import img1 from "../img/new-logo.png";
import { Link } from "react-router-dom";
import { PublicUrl } from "../PublicUrl/publicurl";

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const ProfileImageBucket = PublicUrl + "/direct_placed_documents/";
  const profile_image = localStorage.getItem("profile_image");
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handleDashboardClick = () => {
    if (authenticated) {
      window.location.href = '/AfterScholarshipTestDashboard';
    } else {
      window.location.href = '#';
    }
  };
  return (
    <React.Fragment>
      <header
        className="theme-header absolute-header shadow-add-active"
        id="top_fixed_header">
        <div className="container custom-container">
          <div className="header-bottom">
            <div
              className="navbar navbar-expand-lg"
              style={{ display: "flex", alignItems: "flex-end" }}>
              
              <Link to="/" className="theme-logo">
              <img src={img1} alt="Data Folkz" />
              </Link>
              <div className="navbar-right d-flex align-items-center">
                <ul className="navbar-nav">
                  {/* <li className="nav-item">
                    <a
                      href="#"
                      onClick={handleDashboardClick}
                      className="nav-link">
                      Dashboard
                    </a>
                  </li> */}

                  <li className="menu-item">
                    <Link style={{ textDecoration: "none" }} to="/ContactUs">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/AboutPage" className="nav-link ">
                      About us
                    </Link>

                  </li>
                </ul>

                <Link className="theme_btn" style={{ textDecoration: "none" }}>
                  Log In
                  <span></span>
                </Link>

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
        
        <div className="menu-block">
          <span className="mobile-close aside-trigger">&times;</span>
        </div>
        <ul className="navbar-nav">
          {/* <li>
            <a href="/AfterScholarshipTestDashboard" className="nav-link">
              Dashboard
            </a>
          </li> */}
          <li>
            <Link to="/ContactUs" className="nav-link">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/AboutPage"> About us</Link>
          </li>
        </ul>
      </aside>

      
    </React.Fragment>
  );
};

export default Navbar;
