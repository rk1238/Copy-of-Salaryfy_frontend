import React from "react";

import Footer from "../common/footer";
import arrow from "../img/arrow.png";
import DownGreenArrow from "../img/down-green-arrow.png";
import DownVoiletArrow from "../img/down-voilet-arrow.png";
import Img18 from "../img/icons/img-18.png";
import Img19 from "../img/icons/img-19.png";
import Img20 from "../img/icons/img-20.png";
import Resume from "../img/resume.png";
import Interview from "../img/interview.png";
import Development from "../img/development.png";
import Navbar from "../common/navbar";
import Slider from "react-slick";
import Expand from "../img/expand-img.png";
import Call from "../img/icons/call.png";


import carelon from "../img/carelon.png";
import imgpart from "../img/partners.png";
import sai_krishna from "../img/sai_krishna.png";
// import sai_krishna from "../img/sai_krishna.png";
import FleecaIndia from "../img/Fleeca_India.png";
import Sharad_Mathur from "../img/Sharad_Mathur.png";
import Karan_Karle from "../img/Karan_Karle.png";
import muthootGroup from "../img/muthoot-group.png";
import SvgArrow from "../img/arrow-svg.svg";
import RightGreen from "../img/right-green.png";

import { Chart as ChartJS, ArcElement } from "chart.js";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
ChartJS.register(ArcElement);

var settings2 = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true,
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

var settings3 = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true,
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

ChartJS.register(ArcElement);
const SkilledBasedPackage = () => {
  const salary_in_lpa = JSON.parse(window.localStorage.getItem("salary_in_lpa"));
  const useName = JSON.parse(localStorage.getItem("name"));
  const Pillar1 = ({ x, y, width, height, fill, value }) => {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="#B3B3B3"
          // stroke="white"
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
          // stroke="white"
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
      "What you deserve": salary_in_lpa,
      amt: 20,
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <section className="eligiblity-form-sec chart_mobile_padding">
      <a className="call-btn-2 expand-button call-btn">
            {" "}
            <img src={Call} alt="arrow" className='expand-img' />
            <img src={Expand} alt="" className='expand-img-2' />
            <div className='d-block'>
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
          <div className="row eligiblity-form-filds full_show skill_based_wrapper">
            <div className="col-lg-6 left_card">
              <div className="eligiblity-filds-block-1">
                <div className="skilled-based-packaged">
                  <div className="skill_div">
                  <h3>Your skill cart</h3>
                  <p>Placement duration: 1 month</p>
                  </div>
                  
                  <div className="skilled-based-packaged-list">
                    <div className="skilled-based-inner-wrapper">
                      <div className="heading-div">
                        <h6>Skilled Package</h6>
                      </div>
                      <ul>
                        <li>
                          <p>
                            <b>1. Job guarantee program : </b> 50 to 100 learning
                            hours
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>2. Skills :</b> High Paying Top Industry Skills
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>3. Live projects :</b> Get real world experience.
                          </p>
                        </li>

                        <li>
                          <p>
                            <b>4. Community :</b>  Connect, learn & grow with your peers.
                          </p>
                        </li>
                       
                        <li>
                          <p>
                            <b>5. Hackathons :</b> Participate in real life competition
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="skilled-based-inner-wrapper blue-container">
                      <div className="heading-div">
                        <h6>Career center access</h6>
                      </div>
                      <ul>
                        <li>
                          <p>
                            <b>6. Resume building : </b> Better chance of
                            getting accepted
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>7.  Linkedin profile :</b>  Optimize Linkedin for job success.
                           
                          </p>
                        </li>
                        
                        <li>
                          <p>
                            <b>8. Mock interviews :</b> Master your interview skills.  
                          </p>

                        </li>
                        <li>
                          <p>
                            <b>9. Personality development : </b> Communication skills  
                          </p>
                        </li>

                        <li>
                          <p>
                            <b>10.  Alumni access : </b>  Expand your opportunities. 
                           
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="buttons-div">
                      <div className="right-block fresher-test">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/SkillProgramSpage"
                          className="theme_btn
                                      transparent">
                          View programs
                          <span></span>
                        </a>
                      </div>
                      <div className="right-block fresher-test">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/BasketPaymentTwo"
                          className="theme_btn tertiary">
                          Get Access <img src={RightGreen} alt="arrow" className="img-1"/>
                             <img src={SvgArrow} className="partners-img img-2" alt="" />
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              <div className=" five_show">
              <div className="increase-chart-graph">
               
                <p className="trusted-para mt-5">
                    Trusted By 400+ Hiring Partners
                  </p>
                  <img src={imgpart} className="partners-img w-100" />
              </div>
            </div>
            </div>

            <div className="col-lg-6 full_show">
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
                          <span>2</span> <p>Join your class & career center</p>
                        </li>
                        <li>
                          <span>3</span> <p>Get your dream job!</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="increase-chart-graph-slider">
                      <h4>{useName}, in order to get {salary_in_lpa} LPA you need</h4>
                      <p>About skilled based program</p>
                      <div className="score-miter">
                        <div className="score-miter-graph">
                          <br />
                          <BarChart
                            width={330}
                            height={250}
                            data={dataBar}
                            barGap={55}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 15,
                              bottom: 5,
                            }}
                            fill="#0E5F59">
                            <XAxis dataKey="name" fill="#0E5F59" />
                            {/* axisLine={{ stroke: 'white' }} */}
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
                              barSize={48}
                              shape={<Pillar1 />}
                              label={{
                                position: "top",
                                formatter: (value) => `${value} LPA`,
                                fontSize: "13px",
                              }}></Bar>
                            <Bar
                              dataKey="What you deserve"
                              fill="#0E5F59"
                              minPointSize={10}
                              barSize={48}
                              shape={<Pillar2 />}
                              label={{
                                position: "top",
                                formatter: (value) => `${value} LPA`,
                                fontSize: "13px",
                                fill: "#0E5F59",
                              }}></Bar>
                          </BarChart>
                        </div>
                      </div>
                      {/* <Bar options={options} data={data} /> */}

                      {/* <canvas id="myChart" className="discovery-chart-bar"></canvas> */}
                    </div>
                  </div>
                </Slider>
                <div className="increase-chart-graph hiring-partner-group">
               
                <p className="trusted-para mt-5">
                    Trusted By 400+ Hiring Partners
                  </p>
                  <img src={imgpart} className="partners-img" />
              </div>
              </div>
            </div>
            
          </div>

          <div className="row eligiblity-form-filds five_show">
            <div className="col-lg-6">
              <div className="increase-chart-graph">
                <div className="col-lg-12">
                  <div className="increase-chart-graph-slider mobile-slide">
                    <h4>{useName}, in order to get {salary_in_lpa} LPA you need</h4>
                    <p>About skilled based program</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="eligiblity-filds-block-1 ">
                <div className="skilled-based-packaged">
                <div className="skill_div">
                  <h3>Your skill cart</h3>
                  <p>Placement duration: 1 month</p>
                  </div>
                  <div className="skilled-based-packaged-list">
                    <div className="skilled-based-inner-wrapper">
                      <div className="heading-div">
                        <h6>Skilled Package</h6>
                      </div>
                      <ul>
                        <li>
                          <p>
                            <b>1.Job guarantee program : </b> 50 to 100 learning
                            hours
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>2. Skills :</b> High Paying Top Industry Skills
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>3. Live projects :</b> Get real world experience.
                          </p>
                        </li>

                        <li>
                          <p>
                            <b>4. Community :</b>  Connect, learn & grow with your peers.
                          </p>
                        </li>
                       
                        <li>
                          <p>
                            <b>5. Hackathons :</b> Participate in real life competition
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="skilled-based-inner-wrapper blue-container">
                      <div className="heading-div">
                        <h6>Career center access</h6>
                      </div>
                      <ul>
                        <li>
                          <p>
                            <b>6. Resume building : </b> Better chance of
                            getting accepted
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>7.  Linkedin profile :</b>  Optimize Linkedin for job success.
                           
                          </p>
                        </li>
                        
                        <li>
                          <p>
                            <b>8. Mock interviews :</b> Master your interview skills.  
                          </p>

                        </li>
                        <li>
                          <p>
                            <b>9. Personality development : </b> Communication skills  
                          </p>
                        </li>

                        <li>
                          <p>
                            <b>10.  Alumni access : </b>  Expand your opportunities. 
                           
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="buttons-div">
                      <div className="right-block fresher-test">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/SkillProgramSpage"
                          className="theme_btn
                                      transparent">
                          View programs
                          <span></span>
                        </a>
                      </div>
                      <div className="right-block fresher-test">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/BasketPaymentTwo"
                          className="theme_btn tertiary">
                           Get Access <img src={RightGreen} alt="arrow" className="img-1"/>
                             <img src={SvgArrow} className="partners-img img-2" alt="" />
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" five_show">
              <div className="increase-chart-graph hiring-partner-group">
               
                <p className="trusted-para mt-5">
                    Trusted By 400+ Hiring Partners
                  </p>
                  <img src={imgpart} className="partners-img" />
              </div>
            </div>
            </div>

            
          </div>
        </div>
      </section>


      <section className="client-section">
        <h2 className="main-heading">
        Wall of fame
        </h2>
        <div className="client-card-block">
          <Slider {...settings}>
            {/* <div className="sliders-row row client-card-slider"> */}

            <div className="col-lg-12">
              <div
                className=" row
                                       client-card-slide-block">
                <div className="col-lg-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Sharad_Mathur} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Sharad Mathur </h4>
                        <p>
                          <strong>PY dev devops</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper">
                        <p>Placed in</p>
                        <h3>12</h3>
                        <p>LPA</p>
                      </div>
                    </div>
                    <p className="line-para">
                      “Salaryfy has helped me get where I am today. The overall experience was good, and the platform was really easy to navigate. I got my skills analyzed and got a package way above where I was sitting. With the help of my skills, I managed to get a higher salary package, and I was able to realize this only after getting in touch with Salaryfy. ”
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={FleecaIndia} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="row
                                       client-card-slide-block">
                <div className="col-lg-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={Karan_Karle} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>Karan Karle</h4>
                        <p>
                          <strong>Teacher</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper">
                        <p>Placed in</p>
                        <h3>10</h3>
                        <p>LPA</p>
                      </div>
                    </div>
                    <p className="line-para">
                      “The program delivered is designed in such a way that it lays the foundation to the core, making it a beginner-friendly course that will help you master the skills that are required to thrive in the industry. ”
                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={muthootGroup} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="row
                                       client-card-slide-block">
                <div className="col-lg-4 col-md-4 order-lg-1 order-md-1 order-sm-2 order-2">
                  <div className="client-img">
                    <img src={sai_krishna} alt="img" />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-lg-2 order-md-2 order-sm-1 order-1">
                  <div className="card-right-content">
                    <div className="card-flex">
                      <div className="left-wrapper">
                        <h4>sai krishna</h4>
                        <p>
                          <strong>Analyst</strong>
                        </p>
                        {/* <a className="" href="#">
                          Visit Linkedin
                        </a> */}
                      </div>
                      <div className="right-wrapper">
                        <p>Placed in</p>
                        <h3>14</h3>
                        <p>LPA</p>
                      </div>
                    </div>
                    <p className="line-para">
                    The program offered at the platform was led by best-in-class content delivered by leading faculty and industry leaders in the form of live sessions, case studies, projects, Q&As, work experience, and internships. 

                    </p>
                    <div className="company-logo">
                      <p>
                        Placed by Salaryfy at <img src={carelon} alt="img" />
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

      <section className="well_place_program">
        <div className="container custom-container">
          <div className="section-heading">
            <h1>How we’ll place you?</h1>
            <p>
            You are enrolling with us to get a new skill that will help you land your dream job. 
            </p>
          </div>
          <div className="row well_place_program_tio_margin">
            <div className="col-lg-6 fixed_height_program">
              <div className="skilled-based-packaged-list program-left-wrapper">
                <h2 className="section-heading section-heading-2">
                  <span>1</span> Select a job guarantee program
                </h2>
                <div className="skilled-based-inner-wrapper">
                  <div className="heading-div">
                    <h6>Job guarantee programs</h6>
                  </div>
                  <div className="inner-item">
                    <p>
                    This is a job-guarantee program that ensures your placement following the successful completion of the program. 
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="technical-list">
                          <p>Technical</p>
                          <ul>
                            <li>Program name</li>
                            <li>Program name</li>
                            <li>Program name</li>
                            <li>Program name</li>
                            <li>Program name</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="technical-list">
                          <p>Non-Technical</p>
                          <ul>
                            <li>Program name</li>
                            <li>Program name</li>
                            <li>Program name</li>
                            <li>Program name</li>
                            <li>Program name</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center-down-arrow">
                  <img src={DownGreenArrow} alt="arrow" />
                </div>
              </div>

              <div className="skilled-based-packaged-list program-left-wrapper">
                <div className="skilled-based-inner-wrapper">
                  <div className="heading-div">
                    <h6> Develop skills</h6>
                  </div>
                  <div className="inner-item">
                    <p>
                    Get equipped with job-ready skills to penetrate the industry barrier and land your dream job.
                    </p>

                    <div className="technical-list skills-test">
                      <ul className="skill-list">
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                      </ul>
                      <ul className="skill-list">
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                      </ul>
                      <ul className="skill-list">
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                        <li>
                          <a href="#">Skill</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="center-down-arrow">
                  <img src={DownGreenArrow} alt="arrow" />
                </div>
              </div>

              <div className="skilled-based-packaged-list program-left-wrapper">
                <div className="skilled-based-inner-wrapper">
                  <div className="heading-div">
                    <h6> Hackathons and live projects</h6>
                  </div>
                  <div className="inner-item">
                    <p>
                    The program comes with live projects and case studies to give you a better understanding of the industry requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="skilled-based-packaged-list  program-left-wrapper">
                <h2 className="section-heading blue-heading">
                  <span>2</span> Get job ready
                </h2>
                <div className="skilled-based-inner-wrapper blue-container">
                  <div className="heading-div">
                    <h6>Career center</h6>
                  </div>
                  <div className="inner-item">
                    <p>
                    Salaryfy is aimed at the 360° development of the student with a dedicated career center in place. 
                    </p>
                    <div className="roadmap-success-section ">
                      <div className="career-wrapper-sec">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="inner-wrapper">
                              <img src={Img18} className="" alt="" />
                              <p>Personality development</p>
                              <ul>
                                <li>Communication Skills</li>
                                <li>Soft Skills</li>
                                <li>Behavior Analysis</li>
                                <li>Etiquettes</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="inner-wrapper">
                              <img src={Img19} className="" alt="" />
                              <p>Skill development</p>
                              <ul>
                                <li>Visualization Skills</li>
                                <li>Analytical Thinking </li>
                                <li>Negotiation Skills</li>
                                <li>Decision Making</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="inner-wrapper">
                              <img src={Img20} className="" alt="" />
                              <p>Profile development</p>
                              <ul>
                                <li>LinkedIn Enhancing</li>
                                <li>Resume Building</li>
                                <li>Brand Presence</li>
                                <li>Network Building</li>
                                <li>Self-Promotion</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center-down-arrow">
                  <img src={DownVoiletArrow} alt="arrow" />
                </div>

                <div className="job_ready_wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div className="inner-wrapper">
                        <img src={Resume} className="" alt="" />
                        <p>Resume building</p>
                        <ul>
                          <li>Market Compatible</li>
                          <li>Short and Elegant</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div className="inner-wrapper">
                        <img src={Interview} className="" alt="" />
                        <p>Mock interviews</p>
                        <ul>
                          <li>Gap Analysis</li>
                          <li>Job Fittment Analysis </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div className="inner-wrapper last-child">
                        <img src={Development} className="" alt="" />
                        <p>Linkedin profile development</p>
                        <ul>
                          <li>Highly Attractive</li>
                          <li>Market Responsive</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skilled-based-packaged-list program-left-wrapper program-last-wrapper">
                  <h2 className="section-heading greens-heading">
                    <span>3</span> Get placed with an average package of {salary_in_lpa} LPA
                  </h2>
                  <div className="right-block fresher-test">
                    <a href="/BasketPaymentTwo" className="theme_btn tertiary">
                      Opt skilled package now <img src={RightGreen} alt="arrow" className="img-1"/>
                             <img src={SvgArrow} className="partners-img img-2" alt="" />
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 full_show">
              <div className="program-right-wrapper">
                <p>How it works video here </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="eligiblity-form-sec eligiblity_mobile_sec five_show">
        <div className="container">
          <div className="row eligiblity-form-filds five_show mt-5">
            <div className="col-lg-6 mobile_background_chart">
              <div className="increase-chart-graph ">
                <Slider {...settings3}>
                  <div className="col-lg-12">
                    <div className="increase-chart-graph-slider">
                      <h4>
                        3 easy steps to
                        <br />
                        getting you placed!
                      </h4>

                      <ul>
                        <li>
                          <span>1</span> <p>Select course & plan</p>
                        </li>
                        <li>
                          <span>2</span> <p>Join your class & career center</p>
                        </li>
                        <li>
                          <span>3</span> <p>Get your dream job!</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="increase-chart-graph-slider">
                      <div className="score-miter">
                        <div className="score-miter-graph">
                          <br />
                          <BarChart
                            width={450}
                            height={400}
                            data={dataBar}
                            barGap={55}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 15,
                              bottom: 5,
                            }}
                            fill="#0E5F59">
                            <XAxis dataKey="name" fill="#0E5F59" />
                            {/* axisLine={{ stroke: 'white' }} */}
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
                              barSize={48}
                              shape={<Pillar1 />}
                              label={{
                                position: "top",
                                formatter: (value) => `${value} LPA`,
                                fontSize: "13px",
                              }}></Bar>
                            <Bar
                              dataKey="What you deserve"
                              fill="#0E5F59"
                              minPointSize={10}
                              barSize={48}
                              shape={<Pillar2 />}
                              label={{
                                position: "top",
                                formatter: (value) => `${value} LPA`,
                                fontSize: "13px",
                                fill: "#0E5F59",
                              }}></Bar>
                          </BarChart>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default SkilledBasedPackage;
