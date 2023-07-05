import React from 'react'

import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap from "../img/fresher-eligibility-images/road-map-2.png";
import arrow from "../img/arrow.png";
import imgpart from "../img/partners.png";
import Slider from "react-slick";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { useNavigate } from 'react-router-dom';

var settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
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

const JobGuarantee = () => {
 const navigate = useNavigate()
    const salary_in_lpa = JSON.parse(window.localStorage.getItem("salary_in_lpa"));
    const useName = localStorage.getItem("name");
    const salary_hike = JSON.parse(window.localStorage.getItem("salary_hike"));
    const current_package = JSON.parse(window.localStorage.getItem("current_package"));
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
          "What you deserve": hike_in_LPA,
          amt: 20,
        },
      ];


      const viewPrograms = ()=>{
        navigate("/fresher-eligibility-programs")
      }

      const getAccess = ()=>{
        navigate('/BasketPaymentTwo')
      }

  return (
    <div>
        
    <div className="container">
  <section>
    {/* This container is used only for extra large screen */}
    <div className="d-none d-xl-block">
      <div className="eligibility-fresher-container">
        <div className="eligibility-fresher-left-side">
          <h2>Fresher</h2>
          <p>
            Fill the form to check your eleigibility and get a salary-hike
            prediction.
          </p>
        </div>
        <div className="eligibility-fresher-right-side">
          <div className="eligibility-fresher-right-side-row">
            <img src={playButton} alt="play" />
            <p>How it Works?</p>
          </div>
        </div>
      </div>
    </div>

    {/* This container is used only for  large screen */}
    <div className="d-none d-lg-block d-xl-none">
      <div className="eligibility-fresher-container">
        <div className="eligibility-fresher-left-side">
          <h2>Fresher</h2>
          <p>
            Fill the form to check your eleigibility and get a salary-hike
            prediction.
          </p>
        </div>
        <div className="eligibility-fresher-right-side">
          <div className="eligibility-fresher-right-side-row">
            <img src={playButton} alt="play" />
            <p>How it Works?</p>
          </div>
        </div>
      </div>
    </div>

    {/* This container is used only for  medium screen */}
    <div className="d-none d-md-block d-lg-none">
      <div className="eligibility-fresher-container-medium">
        <div className="eligibility-fresher-left-side-medium">
          <h2>Fresher</h2>
          <p>
            Fill the form to check your eleigibility and get a salary-hike
            prediction.
          </p>
        </div>
        <div className="eligibility-fresher-right-side-medium">
          <div className="eligibility-fresher-right-side-row-medium">
            <img src={playButton} alt="play" />
            <p>How it Works?</p>
          </div>
        </div>
      </div>
    </div>

    {/* This container is used only for mobile screen */}
    <div className="d-sm-block d-md-none">
      <div className="eligibility-fresher-container-small">
        <div className="eligibility-fresher-left-side-small">
          <h2>Fresher</h2>
          <p>
            Fill the form to check your eleigibility and get a salary-hike
            prediction.
          </p>
        </div>
        <div className="eligibility-fresher-right-side-small">
          <div className="eligibility-fresher-right-side-row-small">
            <img src={playButton} alt="play" />
            <p>How it Works?</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="roadMap-section">
    <img src={roadMap} alt="road-map" />
  </section>

 
 <section className='job-guarantee-container-full'>
 <div className="row eligiblity-form-filds skill_based_wrapper ">
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
                        <p
                        onClick={viewPrograms}
                          style={{ textDecoration: "none" }}
                          // href="/SkillProgramSpage"
                          className="theme_btn
                                      transparent">
                          View programs
                          <span></span>
                        </p>
                      </div>
                      <div className="right-block fresher-test">
                        <p
                        onClick={getAccess}
                          style={{ textDecoration: "none" }}
                          // href="/BasketPaymentTwo"
                          className="theme_btn tertiary">
                          Get Access <img src={arrow} alt="arrow" />
                          <span></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              <div className="five_show">
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
                      <p>Subtext here Subtext here Subtext here </p>

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
                      <h4>{useName}, in order to get {hike_in_LPA} LPA you need</h4>
                      <p>Subtext here about skilled based program</p>
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

     
 </section>


  </div>
</div>
  )
}

export default JobGuarantee