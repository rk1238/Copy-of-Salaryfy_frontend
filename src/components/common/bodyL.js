import React, { useState, useEffect, useRef } from "react";
import "../js/course_detail_counter";
import imgpart from "../img/partners.png";
import imgbanner from "../img/banner-img.png";
import arrow from "../img/arrow.png";
import mobileBannerArrow from "../img/mobile-banner-arrow.png";

import slider2 from "../img/slider-2.png";
import SvgArrow from "../img/arrow-svg.svg";
import slider4 from "../img/slider-4.png";

import career from "../img/career.png";
import roundFull from "../img/full-rotate.png";

import PartnersMobile from "../img/partners-mobile.png";
import { useNavigate } from "react-router-dom";
import img1 from "../img/img-1.png";
import img2 from "../img/img-2.png";
import img3 from "../img/img-3.png";
import img4 from "../img/img-4.png";
import img5 from "../img/img-5.png";
import img6 from "../img/img-6.png";
import img7 from "../img/img-7.png";
import img8 from "../img/img-8.png";
import img9 from "../img/img-9.png";
import img10 from "../img/img-10.png";
import img11 from "../img/img-11.png";
import img12 from "../img/img-12.png";
import img13 from "../img/img-13.png";
import img14 from "../img/img-14.png";
import img15 from "../img/img-15.png";
import img16 from "../img/img-16.png";
import img17 from "../img/img-17.png";
import img18 from "../img/img-18.png";
import circle2 from "../img/circle-2.png";
// import bannerArrow from "../img/banner-arrow.png";
import ResBanner from "../img/res-banner.png";
import RightGreen from "../img/right-green.png";
import DhawalLokhande from "../img/Dhawal_Lokhande.png";
import PallaviRustagi from "../img/Pallavi_Rustagi.png";
import wipro from "../img/wipro.png";
import PratyayDasSharma from "../img/Pratyay_Das_Sharma.png";
import AM from "../img/AM.png";
import Rahul_Yadav from "../img/Rahul_Yadav.png";
import Anurag_Srivastava from "../img/Anurag_Srivastava.png";
import deloitte from "../img/deloitte.png";

import stroke1 from "../img/stroke-1.png";
import media1 from "../img/media-1.svg";
import media2 from "../img/media-2.svg";
import stroke2 from "../img/stroke-2.png";
import Speedo from "../img/speedo.gif";

import NewLogo from "../img/new-logo-2.png";
import video from "../img/data_video.mp4";
import expgreen1 from "../img/exp-green-1.png";
import green1 from "../img/exp-green.png";

import Slider from "react-slick";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";

import "./newbody.styles.css";
import apple from "../img/companies/apple.png";
import amazon from "../img/companies/amazon.png";
import google from "../img/companies/google.png";
import meta from "../img/companies/meta.png";
import person from "../img/landing-person.png";
import person2 from "../img/landingpage-vectors/person2.jpeg";

import fastestPlacement from "../img/five_thousand.png";
import hiringPartners from "../img/two_hundred.png";
import averagePAckage from "../img/five_days.png";

import companies from '../img/companies.png'

export default function BodyL() {
  //Signin api=====================
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [VisitorCount, setVisitorCount] = useState();
  const texts = [
    "graduates",
    "postgraduates",
    "working professionals",
    "upskill programs",
    "students",
    "unemployed",
    "job hunters",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }, 2000); // 1 minute in milliseconds

    return () => clearInterval(intervalId);
  }, [currentTextIndex]);

  // useEffect(() => {

  //   let Api = ApiBaseUrl + "visitor-count";
  //   const fetchEligibilityCounter = async (url) => {
  //     try {
  //       const res = await fetch(Api);
  //       const data = await res.json();
  //       setVisitorCount(data.VisitorCount);

  //     } catch (error) {}
  //   };
  //   fetchEligibilityCounter(Api);
  // }, []);

  // useEffect(() => {
    

  //   let Api = ApiBaseUrl + "store-visitor-count";
  //   const fetchvisitorCounter = async (Api) => {
  //     const res = await fetch(Api);
  //     const data = await res.json();
  //   };
  //   fetchvisitorCounter(Api);
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    });
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch(ApiBaseUrl + "visitor-count");
        const data1 = await res1.json();
        setVisitorCount(data1.VisitorCount);

        const res2 = await fetch(ApiBaseUrl + "store-visitor-count");
        const data2 = await res2.json();
        // Do something with data2
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //slider settings==========

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
    ],
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1299,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
    ],
  };

  const fresherClick = () => {
    navigate("/fresher-eligibility");
  };

  const experienceClick = ()=>{
    navigate('/experience-eligibility')
  }

  return (
    <React.Fragment>
      <section className="landing-banner">
        <div className="landing-banner-sec">
          <div className="container custom-container">
            <div>
              <div className="d-none d-xl-block">
                {/* Content for the Extra Large (xl) div */}
                <div className="flex-container">
                  <div>
                    <h1 className="landing-banner-title">
                      End to end <br />
                      <strong className="job-change">
                        Job Change
                      </strong> <br /> solution for You
                    </h1>

                    <div className="landing-banner-sub-heading">
                      <p>
                        6874+ people have got their dream job through Salaryfy.
                        When
                      </p>
                      <p>are you getting yours?</p>
                    </div>

                    <div className="landing-banner-buttons-container">
                      <button
                        className="fresher-button "
                        onClick={fresherClick}
                      >
                        <span>I'm a Fresher</span>
                      </button>
                      <button onClick={experienceClick} className="experienced-button">
                        I'm Experienced
                      </button>
                    </div>

<div style={{display: 'flex', justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'1px',marginLeft:'-50px',marginTop:'-20px'}}>
<div>
                      <p className="trusted_partners">
                        Trusted By 10000+ Hiring Partners
                      </p>
                    </div>

                    <div className="landing-banner-image-container">
                      <img src={companies} alt="companies" />
                      {/* <img src={apple} alt="apple" />
                      <img src={meta} alt="meta" />
                      <img src={amazon} alt="amazon" /> */}
                    </div>
</div>
                    
                  </div>
                  <div className="personImage">
                    <img src={person} alt="person" />
                  </div>
                </div>
              </div>
              {/* Div for Large (lg) screens */}
              <div className="d-none d-lg-block d-xl-none">
                {/* Content for the Large (lg) div */}
                <div className="flex-container">
                  <div>
                    <h1 className="landing-banner-title-large">
                      End to end <br />
                      <strong className="job-change">
                        Job Change
                      </strong> <br /> solution for You
                    </h1>

                    <div className="landing-banner-sub-heading">
                      <p>
                        6874+ people have got their dream job through Salaryfy.
                        When
                      </p>
                      <p>are you getting yours?</p>
                    </div>

                    <div className="landing-banner-buttons-container">
                      <button
                        className="fresher-button-large"
                        onClick={fresherClick}
                      >
                        I'm a Fresher
                      </button>
                      <button onClick={experienceClick} className="experienced-button-large">
                        I'm Experienced
                      </button>
                    </div>

                    <div style={{display: 'flex', justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'1px',marginLeft:'-50px',marginTop:'-20px'}}>
<div>
                      <p className="trusted_partners">
                        trusted by 10000+ Hiring Partners
                      </p>
                    </div>

                    <div className="landing-banner-image-container">
                      <img src={companies} alt="companies" />
                      {/* <img src={apple} alt="apple" />
                      <img src={meta} alt="meta" />
                      <img src={amazon} alt="amazon" /> */}
                    </div>
</div>

                    
                  </div>
                  <div className="personImageLargeContainer">
                    <img
                      className="personImageLarge"
                      src={person}
                      alt="person"
                    />
                  </div>
                </div>
              </div>

              {/* Div for Medium (md) screens */}
              <div className="d-none d-md-block d-lg-none">
                {/* Content for the Medium (md) div */}

                <div className="flex-container-medium">
                  <div>
                    <h1 className="landing-banner-title">
                      End to end <br />
                      <strong className="job-change">
                        Job Change
                      </strong> <br /> solution for You
                    </h1>

                    <div className="landing-banner-sub-heading">
                      <p>
                        6874+ people have got their dream job through Salaryfy.
                        When
                      </p>
                      <p>are you getting yours?</p>
                    </div>

                    <div className="landing-banner-buttons-container">
                      <button
                        className="fresher-button "
                        onClick={fresherClick}
                      >
                        I'm a Fresher
                      </button>
                      <button onClick={experienceClick} className="experienced-button">
                        I'm Experienced
                      </button>
                    </div>

                    

                    <div style={{display: 'flex', justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'1px',marginLeft:'-60px',marginTop:'-20px'}}>
<div>
                      <p className="trusted_partners">
                        trusted by 10000+ Hiring Partners
                      </p>
                    </div>

                    <div className="landing-banner-image-container">
                      <img src={companies} alt="companies" />
                      {/* <img src={apple} alt="apple" />
                      <img src={meta} alt="meta" />
                      <img src={amazon} alt="amazon" /> */}
                    </div>
</div>
                  </div>
                  <div className="personImageMedium">
                    <img src={person} alt="person" />
                  </div>
                </div>
              </div>

              {/* Div for Mobile (sm and xs) screens */}
              <div className="d-sm-block d-md-none">
                {/* Content for the Mobile (sm and xs) div */}

                <div className="flex-container-small">
                  <div>
                    <h1 className="landing-banner-title-small">
                      End to end <br />
                      <strong className="job-change">
                        Job Change
                      </strong> <br /> solution for You
                    </h1>

                    <div className="landing-banner-sub-heading-small">
                      <p>
                        6874+ people have got their dream job through Salaryfy.
                        When
                      </p>
                      <p>are you getting yours?</p>
                    </div>

                    <div className="landing-banner-buttons-container-small">
                      <button
                        className="fresher-button-small "
                        onClick={fresherClick}
                      >
                        I'm a Fresher
                      </button>
                      <button onClick={experienceClick} className="experienced-button-small">
                        I'm Experienced
                      </button>
                    </div>

                    <div className="personImageSmall">
                    <img style={{width:'100vw',margin:'20px auto'}} src={person2} alt="person" />
                  </div>

                  <div style={{display: 'flex', justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'1px',marginTop:'0px'}}>
<div>
                      <p className="trusted_partners">
                        trusted by 10000+ Hiring Partners
                      </p>
                    </div>

                    <div className="landing-banner-image-container">
                      <img src={companies} alt="companies" />
                      {/* <img src={apple} alt="apple" />
                      <img src={meta} alt="meta" />
                      <img src={amazon} alt="amazon" /> */}
                    </div>
</div>

                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* <div id="FixedTimerOuterDiv" style={{backgroundColor: "red", width: "200px", height: "200px"}}>
          </div> */}
        </div>
      </section>

      <section>
        <div className="d-none d-xl-block">
          <div className="landing-banner-section-strip">
            <div className="container">
              <div>
                <div>
                  <img src={fastestPlacement} alt="fastest-placement" />
                </div>
                <div className="landing-banner-section-strip-innercontainer">
                  <h3>5000+</h3>
                  <p>Successfully Job Switched</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={hiringPartners} alt="hiring-partners" />
                </div>
                <div className="landing-banner-section-strip-innercontainer">
                  <h3>200%</h3>
                  <p>Maximum Hike</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={averagePAckage} alt="average-package" />
                </div>
                <div className="landing-banner-section-strip-innercontainer">
                  <h3>5 Days</h3>
                  <p>Fastest Job Switch Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-lg-block d-xl-none">
          <div className="landing-banner-section-strip">
            <div className="container">
              <div>
                <div>
                  <img src={fastestPlacement} alt="fastest-placement" />
                </div>
                <div className="landing-banner-section-strip-innercontainer">
                  <h3>5000+</h3>
                  <p>Successfully Job Switched</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={hiringPartners} alt="hiring-partners" />
                </div>
                <div className="landing-banner-section-strip-innercontainer">
                  <h3>200%</h3>
                  <p>Maximum Hike</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={averagePAckage} alt="average-package" />
                </div>
                <div className="landing-banner-section-strip-innercontainer">
                  <h3>5 Days</h3>
                  <p>Fastest Job Switch Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-md-block d-lg-none">
          <div className="landing-banner-section-strip">
            <div className="container">
              <div>
                <div>
                  <img src={fastestPlacement} alt="fastest-placement" />
                </div>
                <div className="landing-banner-section-strip-innercontainer-medium">
                  <h3>5000+</h3>
                  <p>Successfully Job Switched</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={hiringPartners} alt="hiring-partners" />
                </div>
                <div className="landing-banner-section-strip-innercontainer-medium">
                  <h3>200%</h3>
                  <p>Maximum Hike</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={averagePAckage} alt="average-package" />
                </div>
                <div className="landing-banner-section-strip-innercontainer-medium">
                  <h3>5 Days</h3>
                  <p>Fastest Job Switch Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-sm-block d-md-none">
          <div className="landing-banner-section-strip-small">
            <div className="container">
              <div>
                <div>
                  <img src={fastestPlacement} alt="fastest-placement" />
                </div>
                <div className="landing-banner-section-strip-innercontainer-medium">
                  <h3>5000+</h3>
                  <p>Successfully Job Switched</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={hiringPartners} alt="hiring-partners" />
                </div>
                <div className="landing-banner-section-strip-innercontainer-medium">
                  <h3>200%</h3>
                  <p>Maximum Hike</p>
                </div>
              </div>
              <div>
                <div>
                  <img src={averagePAckage} alt="average-package" />
                </div>
                <div className="landing-banner-section-strip-innercontainer-medium">
                  <h3>5 Days</h3>
                  <p>Fastest Job Switch Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* slider*************** */}

      <section className="client-section">
        <h2 className="main-heading">
          <span>Our</span> speed <span>is your</span> power
        </h2>
        <div className="client-card-block">
          <Slider {...settings}>
            {/* <div className="sliders-row row client-card-slider"> */}

            <div className="col-lg-12">
              <div
                className=" row
                                       client-card-slide-block"
              >
                <div className="col-lg-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={DhawalLokhande} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Dhawal Lokhande </h4>
                        <p>
                          <strong>
                            Senior Manager - Process and Automation
                          </strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper">
                        <p>Placed in</p>
                        <h3>5</h3>
                        <p>days</p>
                      </div>
                    </div>
                    <p className="line-para">
                      “Salaryfy has helped me get where I am today. The overall
                      experience was good, and the platform was really easy to
                      navigate. I got my skills analyzed and got a package way
                      above where I was sitting. With the help of my skills, I
                      managed to get a higher salary package, and I was able to
                      realize this only after getting in touch with Salaryfy. ”
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={slider2} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row client-card-slide-block">
                <div className="col-lg-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={PallaviRustagi} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Pallavi Rastogi</h4>
                        <p>
                          <strong>Data Analyst</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper">
                        <p>Placed in</p>
                        <h3>12</h3>
                        <p>days</p>
                      </div>
                    </div>
                    <p className="line-para">
                      “Clearly, one of the best portals I have visited to get my
                      skills tested and analyzed and land a splendid package on
                      the basis of that. The experience with Salaryfy was
                      hassle-free and time-saving.”
                    </p>
                    <div className="company-logo">
                      <p>
                        {/* Placed by Data Folkz at <img src={slider4} alt="img" /> */}
                        Placed by Salaryfy at <img src={wipro} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="row
                                       client-card-slide-block"
              >
                <div className="col-lg-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={PratyayDasSharma} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Pratyay Das Sharma</h4>
                        <p>
                          <strong>Data Analyst</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper">
                        <p>Placed in</p>
                        <h3>7</h3>
                        <p>days</p>
                      </div>
                    </div>
                    <p className="line-para">
                      “The mentors at Salaryfy were equipped with expertise in
                      project management, analytical thinking, and skills
                      associated with association-building. With their guidance,
                      I was able to put my knowledge and come up with solutions
                      during capstone projects using analytics. ”
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={slider4} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row client-card-slide-block">
                <div className="col-lg-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Rahul_Yadav} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Rahul Yadav </h4>
                        <p>
                          <strong>Data Analyst</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper">
                        <p>Placed in</p>
                        <h3>12</h3>
                        <p>days</p>
                      </div>
                    </div>
                    <p className="line-para">
                      Undoubtedly the best cutting-edge platform that I crossed
                      paths with in order to enhance my skills. The mentors at
                      Salaryfy are dedicated to giving us exposure to case
                      studies and capstone projects, making us ready for the
                      industry's complexities.
                    </p>
                    <div className="company-logo">
                      <p>
                        {/* Placed by Data Folkz at <img src={slider4} alt="img" /> */}
                        Placed by Salaryfy at <img src={AM} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row client-card-slide-block">
                <div className="col-lg-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Anurag_Srivastava} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Anurag Srivastava </h4>
                        <p>
                          <strong>Data Analyst</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper">
                        <p>Placed in</p>
                        <h3>12</h3>
                        <p>days</p>
                      </div>
                    </div>
                    <p className="line-para">
                      The program delivered is designed in such a way that it
                      lays the foundation to the core, making it a
                      beginner-friendly course that will help you master the
                      skills that are required to thrive in the industry.
                    </p>
                    <div className="company-logo">
                      <p>
                        {/* Placed by Data Folkz at <img src={slider4} alt="img" /> */}
                        Placed by Salaryfy at <img src={deloitte} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
          </Slider>
        </div>
      </section>

      <section className="logo-slide section full_show">
        <div className="container custom-container">
          <div className="row">
            <div className="main-client-wrappper">
              <div className="marquee-box">
                <marquee scrollamount="10">
                  <img src={img1} alt="logo" />
                  <img src={img2} alt="logo" />
                  <img src={img3} alt="logo" />
                  <img src={img4} alt="logo" />
                  <img src={img5} alt="logo" />
                  <img src={img6} alt="logo" />
                  <img src={img7} alt="logo" />
                  <img src={img8} alt="logo" />
                  <img src={img9} alt="logo" />
                  <img src={img1} alt="logo" />
                  <img src={img2} alt="logo" />
                  <img src={img3} alt="logo" />
                  <img src={img4} alt="logo" />
                  <img src={img5} alt="logo" />
                  <img src={img6} alt="logo" />
                  <img src={img7} alt="logo" />
                  <img src={img8} alt="logo" />
                  <img src={img9} alt="logo" />
                  <img src={img1} alt="logo" />
                  <img src={img2} alt="logo" />
                  <img src={img3} alt="logo" />
                  <img src={img4} alt="logo" />
                  <img src={img5} alt="logo" />
                  <img src={img6} alt="logo" />
                  <img src={img7} alt="logo" />
                  <img src={img8} alt="logo" />
                  <img src={img9} alt="logo" />
                </marquee>
              </div>
            </div>
          </div>
          <div className="landing-section-heading hiring-box">
            <h2 className="text-center">
              Your gateway to <span> 10,000+ </span> companies
            </h2>
            <p className="text-center">
              {" "}
              6874+ people have got their dream job through Salaryfy. When are
              you getting yours?
            </p>
          </div>
          <div className="row">
            <div className="main-client-wrappper">
              <div className="marquee-box">
                <marquee scrollamount="10" direction="right">
                  <img src={img10} alt="logo" />
                  <img src={img11} alt="logo" />
                  <img src={img12} alt="logo" />
                  <img src={img13} alt="logo" />
                  <img src={img14} alt="logo" />
                  <img src={img15} alt="logo" />
                  <img src={img16} alt="logo" />
                  <img src={img17} alt="logo" />
                  <img src={img18} alt="logo" />
                  <img src={img10} alt="logo" />
                  <img src={img11} alt="logo" />
                  <img src={img12} alt="logo" />
                  <img src={img13} alt="logo" />
                  <img src={img14} alt="logo" />
                  <img src={img15} alt="logo" />
                  <img src={img16} alt="logo" />
                  <img src={img17} alt="logo" />
                  <img src={img18} alt="logo" />
                  <img src={img10} alt="logo" />
                  <img src={img11} alt="logo" />
                  <img src={img12} alt="logo" />
                  <img src={img13} alt="logo" />
                  <img src={img14} alt="logo" />
                  <img src={img15} alt="logo" />
                  <img src={img16} alt="logo" />
                  <img src={img17} alt="logo" />
                  <img src={img18} alt="logo" />
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====mobile-view=== */}

      <section className="logo-slide section five_show">
        <div className="container custom-container">
          <div className="landing-section-heading hiring-box">
            <h2 className="text-center">
              Your gateway to <br />
              <span>10,000+ companies </span>
            </h2>
            <p className="text-center">
              {" "}
              So that you always end up getting a job
            </p>
          </div>
          <div className="marquee-box">
            <img src={PartnersMobile} alt="logo" />
          </div>
        </div>
      </section>
      {/* ===mobile-view-end=== */}

{/*       

      <section className="section landing-select-type-sec">
        <div className="container">
          <h3 className="select-type-heading">Select your type</h3>
          <div className="card-container">
            <div className="cardss smallCards large" id="big_card">
              <div className="flip_sec_card row">
                <div
                  className="left_img col-lg-5 col-md-5 col-sm-5 col-5"
                  id="fresher_class"
                >
                  <img src={expgreen1} alt="" />
                </div>
                <div className="right_wrapper col-lg-7 col-md-7 col-sm-7 col-7 fresher_card">
                  <p>Fresher</p>
                  <ul>
                    <li>Students</li>
                    <li>Graduates</li>
                    <li>Upskill</li>
                    <li>Unemployed</li>
                  </ul>
                  <p className="content">
                    Get skilled and secure a job with an average package of 12
                    LPA
                  </p>
                </div>
              </div>
            </div>
            <p className="center_or">or</p>
            <div className="cardss smallCards small" id="small_card">
              <div className="small_show_content">
                <div className="flip_sec_card row">
                  <div
                    className="left_img small_card_class "
                    id="small_card_class_landing"
                  >
                    <img src={green1} alt="" />
                    <p className="exp_p">Experienced</p>
                  </div>
                  <div
                    className="right_wrapper col-lg-7 col-md-7 col-sm-7 col-7 exp_card"
                    style={{ display: "none" }}
                  >
                    <p>Experienced</p>
                    <ul>
                      <li>Working professional</li>
                      <li>Employed</li>
                      <li>Job change</li>
                    </ul>
                    <p className="content">
                      Get skilled and secure a job with an average package of 12
                      LPA
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
                      <strong>
                        Get a quick report on your communication, logical
                        reasoning & speed.
                      </strong>
                    </p>
                  </div>
                </li>
                <div id="fresher_tab">
                  <li>
                    <span className="">2</span>
                    <div className="timeline_content">
                      <p>See your market value</p>
                      <p>
                        <strong>
                          With our advanced AI salary predictor, stay informed
                          of your true market value.
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="">3</span>
                    <div className="timeline_content">
                      <p>Learn top industry skills</p>
                      <p>
                        <strong>
                          Learn the skills that top companies are looking for.
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="">4</span>
                    <div className="timeline_content">
                      <p>Get your dream job</p>
                      <p>
                        <strong>
                          With Salaryfy’s comprehensive job preparation (resume
                          building, personality training, soft skills & many
                          more) after the course.
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="">5</span>
                    <div className="timeline_content">
                      <p>Pay after placement</p>
                      <p>
                        <strong>
                          Pay only 10-12% of your package on a monthly basis
                          after securing a job.
                        </strong>
                      </p>
                    </div>
                  </li>
                </div>
                <div id="experienced_tab" style={{ display: "none" }}>
                  <li>
                    <span className="">2</span>
                    <div className="timeline_content">
                      <p>Upload resume</p>
                      <p>
                        <strong>
                          and our placement officer will schedule your interview
                          rounds.
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
                          With Salaryfy’s comprehensive job preparation (resume
                          building, personality training, soft skills & many
                          more).
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="">4</span>
                    <div className="timeline_content">
                      <p>Job changed</p>
                      <p>
                        <strong>Within 30 days of resume upload.</strong>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="">5</span>
                    <div className="timeline_content">
                      <p>Pay after placement</p>
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
            {/* <div className="banne-outer-timer">
              <a
                href="/EligiblityFormNewFunnel"
                className="theme_btn tertiary white"
              >
                Check Eligiblity
                <img src={RightGreen} alt="arrow" className="" />
                <span></span>
              </a>
            </div> */}
          {/* </div>
        </div>
      </section> */}
 {/* } */}


      <section className="video-section">
        <div className="container">
          <div className="landing-section-heading">
            <h2 className="text-center">How it Works?</h2>
          </div>
          <div className="video-box">
            <div className="video-container">
              {/* <video controls autoPlay src={video} className="video" /> */}
              {/* <video controls src={video} className="video" autoPlay muted /> */}
              <video
                className="video"
                ref={videoRef}
                src={video}
                autoPlay
                loop
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="career-ready-sec section full_show rendom_speedo">
        <div className="container custom-container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6">
              <div className="career-ready-block">
                <h5>
                  Discover your worth with our advanced
                  <span> AI Salary Predictor</span>
                </h5>
                <p>
                  Don't settle for less. With our AI salary predictor and
                  comprehensive support, we'll help you upgrade to a high-paying
                  job with no prior experience necessary.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="career-right-block">
                <img src={Speedo} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* =====mobile-code==== */}

      {/* <section className="career-ready-sec section five_show rendom_speedo">
        <div className="container custom-container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6">
              <div className="career-ready-block">
                <h5>
                  <span>Discover</span> your worth with our{" "}
                  <span>advanced</span> AI Salary Predictor
                </h5>
                <p>
                  Don't settle for less. With our AI salary predictor and
                  comprehensive support, we'll help you upgrade to a high-paying
                  job with no prior experience necessary.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="career-right-block">
                <img src={Speedo} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ===mobile-end=== */}

      <section className="career-ready-sec section full_show">
        <div className="container custom-container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6">
              <div className="career-ready-block">
                <h5>
                  Get job-ready for an <br />
                  <span> in-demand</span> career
                </h5>
                <p>
                  Break into a new field like Artificial Intelligence or data
                  science. No prior experience necessary to get started.
                </p>
                <img src={career} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="career-right-block">
                <ul>
                  <li>55% average salary hike</li>
                  <li>45LPA highest salary</li>
                  <li>12k plus career transition</li>
                  <li>400+ hiring partners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====mobile-code==== */}

      <section className="career-ready-sec section five_show">
        <div className="container custom-container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6">
              <div className="career-ready-block">
                <h5>
                  Get job-ready for an <br />
                  <span> in-demand</span> career
                </h5>
                <p>
                  Break into a new field like Artificial Intelligence or data
                  science. No prior experience necessary to get started.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="career-right-block">
                <ul>
                  <li>55% average salary hike</li>
                  <li>45LPA highest salary</li>
                  <li>12k plus career transition</li>
                  <li>400+ hiring partners</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="career-ready-block">
                <img src={career} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===mobile-end=== */}

      <section className="development-course ">
        <div className="container custom-container">
          <div className="circle-img">
            <img src={circle2} className="full_show" alt="" />

            <img src={roundFull} className="five_show" alt="" />

            <div className="list-menu">
              <div className="list row">
                <div className="col-lg-6 col-sm-6 col-6">
                  <ul>
                    <li>Leadership Skills</li>

                    <li>Retention Skills</li>

                    <li>Management Skills</li>
                    <li>Hackathons</li>
                    <li>Management Skills</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-6">
                  <ul>
                    <li>Communication Skills</li>
                    <li>Mock Interviews</li>
                    <li>Job guarantee program</li>
                    <li>Personality development</li>
                    <li>Management Skills</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review-sec">
        <div className="review-slide">
          {/* <div className="row customers-review-slider"> */}
          <Slider {...settings2}>
            <div className="col-lg-12">
              <div className="review-content">
                <img src={stroke1} className="stroke-1" alt="salaryfy" />
                <div>
                  <p>
                    Data Folkz is a global digital skills training provider that
                    is aimed at equipping students and corporate employees with
                    crucial Data Science Skills. The IIT Alumni trainers are
                    dedicated to making the students job-ready
                  </p>
                  <img src={media1} className="img" alt="salaryfy" />
                </div>
                <img src={stroke2} className="stroke-2" alt="salaryfy" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="review-content">
                <img src={stroke1} className="stroke-1" alt="salaryfy" />
                <div>
                  <p>
                    Data Folkz is a global digital skills training provider that
                    is aimed at equipping students and corporate employees with
                    crucial Data Science Skills. The IIT Alumni trainers are
                    dedicated to making the students job-ready
                  </p>
                  <img src={media2} className="img" alt="salaryfy" />
                </div>
                <img src={stroke2} className="stroke-2" alt="salaryfy" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="review-content">
                <img src={stroke1} className="stroke-1" alt="salaryfy" />
                <div>
                  <p>
                    Data Folkz is a global digital skills training provider that
                    is aimed at equipping students and corporate employees with
                    crucial Data Science Skills. The IIT Alumni trainers are
                    dedicated to making the students job-ready
                  </p>
                  <img src={media1} className="img" alt="salaryfy" />
                </div>
                <img src={stroke2} className="stroke-2" alt="salaryfy" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="review-content">
                <img src={stroke1} className="stroke-1" alt="salaryfy" />
                <div>
                  <p>
                    Data Folkz is a global digital skills training provider that
                    is aimed at equipping students and corporate employees with
                    crucial Data Science Skills. The IIT Alumni trainers are
                    dedicated to making the students job-ready
                  </p>
                  <img src={media2} className="img" alt="salaryfy" />
                </div>
                <img src={stroke2} className="stroke-2" alt="salaryfy" />
              </div>
            </div>
          </Slider>
          {/* </div> */}
        </div>
      </section>

      <section className="landing-faq faq-sec section">
        <div className="container">
          <div className="section-title centered">
            <h3 className="main-title">FAQ's</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="faq-wrapper">
                <div className="accordion" id="accordionExample3">
                  <div className="card">
                    <div
                      className="card-header
                                                        collapsed"
                      data-toggle="collapse"
                      data-target="#cf-1"
                      aria-expanded="false"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      What is Salaryfy?
                    </div>
                    <div
                      id="cf-1"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Salaryfy is a career advancement platform that
                          provides end-to-end job change facilities for the
                          desired companies. From listing companies to
                          completing the joining formalities for a new joiner in
                          a company, Salaryfy's placement experts can do it all.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header
                                                        collapsed"
                      data-toggle="collapse"
                      data-target="#cf-2"
                      aria-expanded="false"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      How does Salaryfy work?
                    </div>
                    <div
                      id="cf-2"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Salaryfy uses advanced algorithms and machine learning
                          to match job seekers with job opportunities that align
                          with their skills, experience, and career aspirations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-3"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      Is Salaryfy free to use?
                    </div>
                    <div
                      id="cf-3"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Salaryfy offers both free and paid services. Our free
                          services include job recommendations, while our paid
                          services include resume building, interview coaching,
                          and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-4"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      How do I sign up for Salaryfy?
                    </div>
                    <div
                      id="cf-4"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          To sign up for Salaryfy, simply visit our website and
                          check your eligibility. Based on the eligibility
                          scores, you will be redirected either to Skill-based
                          Placement or Direct Placement Services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-5"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      How does Salaryfy match me with job opportunities?
                    </div>
                    <div
                      id="cf-5"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Salaryfy matches you with job opportunities based on
                          your skills, experience, and career goals using
                          advanced algorithms and machine learning.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-6"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      Does Salaryfy offer resume writing services?
                    </div>
                    <div
                      id="cf-6"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Yes, Salaryfy offers professional resume writing
                          services to help you create a compelling resume that
                          showcases your skills and experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-7"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      Does Salaryfy offer interview coaching services?
                    </div>
                    <div
                      id="cf-7"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Yes, Salaryfy offers interview coaching services to
                          help you prepare for job interviews and improve your
                          chances of getting hired.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-8"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      How long does it take to find a job through Salaryfy?
                    </div>
                    <div
                      id="cf-8"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Salaryfy takes approximately 1 month to place a
                          student in a job while using their free services can
                          take up to 3 months.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-9"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      How does Salaryfy help me with career development?
                    </div>
                    <div
                      id="cf-9"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Salaryfy offers a range of career development
                          services, including professional development courses,
                          mentorship programs, and career coaching services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-10"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      Can I get a refund if I am not satisfied with Salaryfy's
                      services?
                    </div>
                    <div
                      id="cf-10"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Salaryfy offers a satisfaction guarantee for our paid
                          services. If you are not satisfied with our services,
                          you can contact our customer support team for a
                          refund.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-11"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      How can I contact Salaryfy's customer support team?
                    </div>
                    <div
                      id="cf-11"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          You can contact Salaryfy's customer support team by
                          emailing support@salaryfy.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-12"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      What kind of job opportunities does Salaryfy offer?
                    </div>
                    <div
                      id="cf-12"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Salaryfy offers job opportunities in a wide range of
                          industries and job functions, including technology,
                          finance, marketing, and healthcare.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      data-toggle="collapse"
                      data-target="#cf-13"
                    >
                      <div className="plus">
                        <span></span>
                        <span></span>
                      </div>
                      How does Salaryfy help me stand out to employers?
                    </div>
                    <div
                      id="cf-13"
                      className="collapse"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <p>
                          Salaryfy offers various career development services,
                          including professional development courses, mentorship
                          programs, and career coaching services, to help you
                          improve your skills and experience and stand out to
                          employers.
                        </p>
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
}
